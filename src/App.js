import React from "react";
import LoginProvider from "./context/AuthProvider";
import MainNavigation from "./navigation/MainNavigation";

function App() {
  return (
    <LoginProvider>
      <MainNavigation />
    </LoginProvider>
  );
}

export default App;
