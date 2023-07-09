import { useState } from "react";
import "./App.css";

/* for jqx import */
import * as React from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import JqxBarGauge, {
  IBarGaugeProps,
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge";
import Grid from "./components/Grid";

function App() {
  // const [max, setMax] = useState(200);
  // const [values, setValue] = useState([102, 115, 130, 137]);

  return (
    <>
      {/* <JqxBarGauge
        className="myCustomClass myCustomClassTwo"
        style={{ marginTop: 100, marginLeft: 100 }}
        width={600}
        height={600}
        max={max}
        values={values}
      /> */}

      <hr />
      <Grid />
    </>
  );
}

export default App;
