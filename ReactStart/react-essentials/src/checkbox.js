import React, { useReducer } from "react";

export function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <label htmlFor="checkbox">
        <p>{checked ? "Checked" : "Un-Checked"} </p> 
        {/* <small>{JSON.stringify(checked)}</small> */}
      </label>
      <input
        id="checkbox"
        type="checkbox"
        // defaultValue={checked ? "checked" : "unchecked"}
        defaultChecked={checked}
        onChange={toggle}
      />
    </>
  );
}
