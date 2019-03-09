import React, { useState } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import ProdPage from "./components/ProdPage";
import CheckoutPage from './pages/CheckoutPage'
import "./styles.css";

function App() {
  const [step, setStep] = useState('PROD_PAGE')

  return (
    <div className="App">
      <Layout>
        {step === 'PROD_PAGE' && <ProdPage onCheckoutClick={() => setStep('CHECKOUT_PAGE')} />}
        {step === 'CHECKOUT_PAGE' && <CheckoutPage />}
      </Layout>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
