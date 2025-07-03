import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./Demo";
import ReducerExanple from "./useReducer";
import UseReducerFetchData from "./useReducerFetchData";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <Demo /> */}
      {/* <ReducerExanple /> */}
      <UseReducerFetchData />
    </StyledEngineProvider>
  </React.StrictMode>
);
