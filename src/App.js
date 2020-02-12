import React from "react";
import "./styles.css";

const Field = props => {
  const setter = props["set" + props.name];

  const onChange = evt => {
    console.log(evt.target.value);
    setter(parseFloat(evt.target.value));
  };

  return (
    <label style={{ marginBottom: "8px", display: "block" }}>
      {props.name}:
      <br />
      <input
        onChange={onChange}
        type="number"
        name={props.name}
        value={props[props.name].toFixed(2)}
        step="0.01"
      />
    </label>
  );
};

export default function App() {
  const [PriceUS, setPriceUS] = React.useState(35.45);
  const [FBAUS, setFBAUS] = React.useState(3.28);
  const [FBACA, setFBACA] = React.useState(6.97);
  const [FBAMX, setFBAMX] = React.useState(97.64);
  const [CurrencyCA, setCurrencyCA] = React.useState(1.3);

  const props = {
    PriceUS,
    FBAUS,
    FBACA,
    FBAMX,
    CurrencyCA
  };

  const setters = {
    setPriceUS,
    setFBAUS,
    setFBACA,
    setFBAMX,
    setCurrencyCA
  };

  const calculation = ((PriceUS - FBAUS) * CurrencyCA + FBACA).toFixed(2);
  return (
    <div>
      <header className="App">
        <a
          style={{ color: "black", textDecoration: "none" }}
          href="https://36mwc.csb.app/"
        >
          <h1>Remote Fulfillment with FBA Calculator</h1>
        </a>
        <p>
          In the US you have a price of $10 USD, and the currency exchange rate
          is $1 USD = $1.30 CAD. The FBA fulfillment fee in the US is $1 USD,
          and the FBA fulfillment fee for Remote Fulfillment is $2 CAD.
        </p>
      </header>

      <div className="container">
        <Field name="PriceUS" {...props} {...setters} />
        <Field name="FBAUS" {...props} {...setters} />
        <Field name="FBACA" {...props} {...setters} />
        <Field name="FBAMX" {...props} {...setters} />

        <div>
          <h3>
            Calculation $(PRICE in US minus US FBA) X Currency + country FBA ($
            {PriceUS} - ${FBAUS}) x {CurrencyCA} + ${FBACA} = {calculation}
          </h3>
        </div>
      </div>
    </div>
  );
}
