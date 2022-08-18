import { Box } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import { AgGridNotFlashingSelectedRows } from './ag-grid/AgGridNotFlashingSelectedRows';
import './index.scss';
import './ag-grid/ag-grid.scss';
import { store } from './redux/store';

export const App: React.FC = () => (
  <Provider store={store}>
    <Box m={2} className="abs-pos">
      <AgGridNotFlashingSelectedRows />
    </Box>
  </Provider>
);

export default App;
