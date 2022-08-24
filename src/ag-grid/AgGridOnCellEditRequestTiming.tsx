import { ColDef, ICellEditor, ICellEditorParams } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React, { useImperativeHandle, useRef, useState } from 'react';

let nextId = 0;

const getNextId = () => `${++nextId}`;

export interface Row {
  id: string;
  value1: string;
  value2: string;
}

const makeRow = (): Row => ({
  id: getNextId(),
  value1: '',
  value2: '',
});

const initialRowData = [makeRow()];

const CustomEditor = React.forwardRef<ICellEditor, ICellEditorParams>((props, editorApiRef) => {
  const latestStateRef = useRef({ props, value: props.value });
  latestStateRef.current.props = props;

  useImperativeHandle(
    editorApiRef,
    () => {
      // noinspection JSUnusedGlobalSymbols
      return {
        getValue() {
          return latestStateRef.current.value;
        },

        isCancelBeforeStart() {
          console.log('isCancelBeforeStart');
          return false;
        },
      };
    },
    []
  );

  return (
    <input
      defaultValue={props.value}
      onChange={(e) => {
        latestStateRef.current.value = e.target.value;
      }}
      autoFocus
      ref={(input) => input?.select()}
    />
  );
});

const colDefs: ColDef[] = [
  {
    headerName: 'Col 1',
    field: 'value1',
    editable: true,
  },
  {
    headerName: 'Col 2',
    field: 'value2',
    editable: true,
    cellEditor: CustomEditor,
  },
];

export const AgGridOnCellEditRequestTiming: React.FC = () => {
  const [rowData, setRowData] = useState(initialRowData);
  return (
    <div className="ag-theme-material" style={{ position: 'absolute', inset: 0 }}>
      <AgGridReact<Row>
        singleClickEdit={true}
        stopEditingWhenCellsLoseFocus={true}
        columnDefs={colDefs}
        rowData={rowData}
        getRowId={({ data }) => data.id}
        readOnlyEdit={true}
        onCellEditRequest={(event) => {
          console.log('onCellEditRequest');
          setRowData([
            {
              ...rowData[0],
              [event.column.getColId()]: event.newValue,
            },
          ]);
        }}
      />
    </div>
  );
};
