import React from "react";
import styleAlert from "./styleAlert.module.css";

function Alert() {
  return (
    <div className={styleAlert.alert}>
      <h1 className={styleAlert.error}> Contacts already exists! </h1>
    </div>
  );
}

export default Alert;
