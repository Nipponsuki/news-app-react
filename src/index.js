import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, history } from "_redux/store";

import App from "./routes";

import GlobalStyle from "theme/GlobalStyles";

import { theme } from "theme/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App history={history} />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
