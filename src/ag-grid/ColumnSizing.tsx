import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';

export interface Row {
  value1: string;
}

const initialRowData = [{ value1: 'test' }];

export const colDefs: ColDef<Row>[] = [
  {
    headerName: 'narrow',
    // minWidth: 40,
    flex: 0,
  },
  {
    headerName: 'medium',
    // minWidth: 80,
    flex: 2,
  },
  {
    headerName: 'wide',
    // minWidth: 40,
    flex: 4,
  },
];

export const ColumnSizing: React.FC = () => {
  const [rowData] = useState(initialRowData);

  const [defaultGridCol] = useState({
    field: 'value1',
    width: 20,
  });

  const vars: any = {
    '--ag-header-column-separator-display': 'block',
    '--ag-cell-horizontal-border': 'solid black',
  };

  return (
    <div
      className="ag-theme-material"
      style={{
        ...vars,
        position: 'absolute',
        inset: 10,
        border: '2px solid red',
      }}
    >
      <AgGridReact<Row>
        defaultColDef={defaultGridCol}
        columnDefs={colDefs}
        rowData={rowData}
        // onGridReady={onGridReady}
      />
    </div>
  );
};
