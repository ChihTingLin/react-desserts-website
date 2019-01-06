import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout/Layout";
import ProdPage from "./components/ProdPage/ProdPage";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <ProdPage />
      </Layout>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
