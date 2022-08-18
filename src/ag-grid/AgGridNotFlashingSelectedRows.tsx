import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';

let nextId = 0;

function getNextId() {
  nextId++;
  return `${nextId}`;
}

export interface Row {
  id: string;
  value: string;
}

function makeRow(value: string): Row {
  return {
    id: getNextId(),
    value,
  };
}

const rowData = ['1', '2', '3', '4'].map(makeRow);

const colDefs: ColDef[] = [
  {
    headerName: 'Value',
    field: 'value',
    checkboxSelection: true,
    rowDrag: true,
  },
];

export const AgGridNotFlashingSelectedRows: React.FC = () => {
  return (
    <div className="ag-theme-material" style={{ position: 'absolute', inset: 0 }}>
      <AgGridReact<Row>
        columnDefs={colDefs}
        rowData={rowData}
        rowSelection="multiple"
        enableCellChangeFlash={true}
        getRowId={({ data }) => data.id}
        rowDragManaged={true}
        rowDragMultiRow={true}
        onRowDragEnd={(event) => {
          event.api.flashCells({ rowNodes: event.nodes });
        }}
        onGridReady={({ api }) => {
          api.selectIndex(1, false, false);
          api.selectIndex(3, true, false);
          // setInterval(() => {
          //   api.flashCells({ rowNodes: [api.getDisplayedRowAtIndex(0)!, api.getDisplayedRowAtIndex(1)!] });
          // }, 2000);
        }}
      />
    </div>
  );
};
