import { Box } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import './ag-grid/ag-grid.scss';
import { ColumnSizing } from './ag-grid/ColumnSizing';
import './index.scss';
import { store } from './redux/store';

export const App: React.FC = () => (
  <Provider store={store}>
    <Box m={2} className="abs-pos">
      <ColumnSizing />
    </Box>
  </Provider>
);

export default App;
