import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "reactstrap";

function App() {
  return (
    <div className="spinner">
      <Spinner
        className="loading"
        type="grow"
        color="dark"
        children={false}
      />
    </div>
  );
}

export default App;
