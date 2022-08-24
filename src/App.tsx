import { Box } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import { AgGridOnCellEditRequestTiming } from './ag-grid/AgGridOnCellEditRequestTiming';
import './index.scss';
import './ag-grid/ag-grid.scss';
import { store } from './redux/store';

export const App: React.FC = () => (
  <Provider store={store}>
    <Box m={2} className="abs-pos">
      <AgGridOnCellEditRequestTiming />
    </Box>
  </Provider>
);

export default App;
