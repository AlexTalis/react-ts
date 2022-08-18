import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React, { useCallback, useMemo, useState } from 'react';

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

const initialRows = ['1', '2', '3'].map(makeRow);

export const AgGridDuplicateAndDeleteException: React.FC = () => {
  const [rowData, setRowData] = useState<Row[]>(initialRows);

  const moveRow = useCallback(function () {
    setRowData(function (prevRowData) {
      return [
        prevRowData[0],
        {
          ...prevRowData[2],
          id: getNextId(),
        },
        prevRowData[1],
        prevRowData[2],
      ];
    });
    setRowData(function (prevRowData) {
      const rowData = [...prevRowData];
      rowData.length = 3;
      return rowData;
    });
  }, []);

  const colDefs = useMemo(
    (): ColDef[] => [
      {
        headerName: 'Value',
        // field: '',
        checkboxSelection: true,
        editable: true,
        valueGetter(params) {
          return (params.data as Row).value;
        },
        valueSetter(params) {
          return true;
        },
        cellEditorParams: () => {
          return undefined;
        },
      },
    ],
    []
  );

  return (
    <div
      className="ag-theme-alpine"
      style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}
    >
      <div>
        <button onClick={moveRow}>Move Row</button>
      </div>
      <div className="ag-theme-alpine" style={{ flex: 1 }}>
        <AgGridReact immutableData={true} getRowNodeId={(row: Row) => row.id} columnDefs={colDefs} rowData={rowData} />
      </div>
    </div>
  );
};
