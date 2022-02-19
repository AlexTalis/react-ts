import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const App: React.FC = () => (
  <Provider store={store}>
    <div style={{ margin: 24 }} />
  </Provider>
);

export default App;
