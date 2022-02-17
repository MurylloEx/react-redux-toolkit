import React from "react";
import { CoreProvider } from "./core/providers";

import { Todos } from "./pages";

export const App = () => (
  <CoreProvider>
    <Todos />
  </CoreProvider>
);
