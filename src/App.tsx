import { Box } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import './index.scss';
import { store } from './redux/store';

export const App: React.FC = () => (
  <Provider store={store}>
    <Box m={2} className="abs-pos" />
  </Provider>
);

export default App;
