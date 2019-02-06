import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./auth-context";
import Main from "./Main";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Main />
      </AuthProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
