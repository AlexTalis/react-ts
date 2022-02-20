import { Box } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import { AgGridRowDragEventNodesAlwaysUndefined } from './ag-grid/AgGridRowDragEventNodesAlwaysUndefined';
import './index.scss';
import { store } from './redux/store';

export const App: React.FC = () => (
  <Provider store={store}>
    <Box m={2} className="abs-pos">
      <AgGridRowDragEventNodesAlwaysUndefined />
    </Box>
  </Provider>
);

export default App;
