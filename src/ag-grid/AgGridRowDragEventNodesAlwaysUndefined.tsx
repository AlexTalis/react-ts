import { ColDef, RowDragEvent } from 'ag-grid-community';
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

const rowData = ['1', '2', '3'].map(makeRow);

const colDefs: ColDef[] = [
  {
    headerName: 'Value',
    field: 'value',
    checkboxSelection: true,
    rowDrag: true,
  },
];

export const AgGridRowDragEventNodesAlwaysUndefined: React.FC = () => {
  const onRowDragEnter = (event: RowDragEvent) => {
    console.log(event.nodes);
  };

  const onRowDragMove = (event: RowDragEvent) => {
    console.log(event.nodes);
  };

  const onRowDragLeave = (event: RowDragEvent) => {
    console.log(event.nodes);
  };

  const onRowDragEnd = (event: RowDragEvent) => {
    console.log(event.nodes);
  };

  return (
    <div className="ag-theme-alpine" style={{ position: 'absolute', inset: 0 }}>
      <AgGridReact
        immutableData={true}
        getRowNodeId={(row: Row) => row.id}
        columnDefs={colDefs}
        rowData={rowData}
        rowSelection="multiple"
        onRowDragEnter={onRowDragEnter}
        onRowDragMove={onRowDragMove}
        onRowDragLeave={onRowDragLeave}
        onRowDragEnd={onRowDragEnd}
      />
    </div>
  );
};
