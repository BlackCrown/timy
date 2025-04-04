import React from "react";

interface iInputProps {
  label: string;
  inputType: string;
  value?: string;
}

export default function TodoInput(props: iInputProps){
return (
  <div>
    <label className="font-bold text-lg text-center" htmlFor={props.label}>{props.label}</label>
    <input className="block p-.5 text-center rounded-md border-2 border-blue-900" id={props.label} type={props.inputType} value={props.value} />
  </div>
)
}
