import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "reactstrap";

export default function Loading() {
  return (
    <div className="spinner">
      <Spinner className="loading" type="grow" color="dark" children={false} />
    </div>
  );
}
