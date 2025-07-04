import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./Demo";
import ReducerExanple from "./useReducer";
import UseReducerFetchData from "./useReducerFetchData";
import CustomHook1 from "./CustomHooks/customHook1";
import CustomHook2 from "./CustomHooks/customHook2";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <Demo /> */}
      {/* <ReducerExanple /> */}
      {/* <UseReducerFetchData /> */}
      <div>
        <CustomHook1 />
        <CustomHook2 />
      </div>
    </StyledEngineProvider>
  </React.StrictMode>
);
