import React from "react";
import { Media, MediaContextProvider } from "./media/breakpoints";
import { MobileComponent } from "./components/MobileComponent";
import { DesktopComponent } from "./components/DesktopComponent";

export const App = () => {
  return (
    <MediaContextProvider>
      <Media at="sm">
        <MobileComponent />
      </Media>
      <Media greaterThan="sm">
        <DesktopComponent />
      </Media>
    </MediaContextProvider>
  );
};