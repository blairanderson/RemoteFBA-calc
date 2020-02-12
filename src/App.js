import React from "react";
import "./styles.css";

const Field = props => {
  const setter  = props["set" + props.name]
  const onChange = evt => {
    console.log(evt.value)
    setter(parseFloat(evt.value))
  };
  return (
    <label style={{ marginBottom: "4px", display: "block" }}>
      {props.name}:
      <br />
      <input
        onChange={onChange}
        type="number"
        name={props.name}
        value={props[props.name]}
        step="0.01"
      />
    </label>
  );
};

export default function App() {
  const [PriceUS, setPriceUS] = React.useState(35.25);
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

  return (
    <div>
      <header className="App">
        <h1>Remote Fulfillment with FBA Calculator</h1>
        <p>
          In the US you have a price of $10 USD, and the currency exchange rate
          is $1 USD = $1.30 CAD. The FBA fulfillment fee in the US is $1 USD,
          and the FBA fulfillment fee for Remote Fulfillment is $2 CAD.
        </p>
      </header>

      <Field name="PriceUS" {...props} {...setters} />
      <br />
      <Field name="FBAUS" {...props} {...setters} />
      <br />
      <Field name="FBACA" {...props} {...setters} />
      <br />
      <Field name="FBAMX" {...props} {...setters} />

      <div>
        <h3>
          Calculation $(PRICE in US minus US FBA) X Currency + country FBA ($
          {PriceUS} - ${FBAUS}) x {CurrencyCA} + ${FBACA} ={" "}
          {(PriceUS - FBAUS) * CurrencyCA * 2 + FBACA}
        </h3>
      </div>
    </div>
  );
}
