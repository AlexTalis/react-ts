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
  isEditorRow: boolean;
}

// All grid rows are read-only except for the last one. Last row allows
// user to type in a new value to add a new read only row with that value.

/**
 * Constant data for the editor (last) row.
 */
const editorRow: Row = Object.freeze({
  id: getNextId(),
  value: '',

  // Differentiates editor row.
  isEditorRow: true,
});

export const AgGridValueSetterCalledTwice: React.FC = () => {
  // Added read-only rows. Starts off empty. New ones
  // are added when user enters a value in the last row.
  const [addedRows, setAddedRows] = useState<Row[]>([]);

  // Adds a new row with the specified value.
  const addRow = useCallback(function (value: string) {
    setAddedRows((prevRows) => [...prevRows, { id: getNextId(), value, isEditorRow: false }]);
  }, []);

  const colDefs = useMemo(
    (): ColDef[] => [
      {
        headerName: 'Value',
        valueGetter: (params) => (params.data as Row).value,
        editable: (params) => (params.data as Row).isEditorRow,
        valueSetter: (params) => {
          console.log('valueSetter');
          addRow(params.newValue);
          return true;
        },
      },
    ],
    [addRow]
  );

  // Read-only added rows, plus editable editor row at the end.
  const rowData = useMemo(() => [...addedRows, editorRow], [addedRows]);

  return (
    <div className="ag-theme-alpine" style={{ position: 'absolute', inset: 0 }}>
      <AgGridReact immutableData={true} getRowNodeId={(row: Row) => row.id} columnDefs={colDefs} rowData={rowData} />
    </div>
  );
};
