import React from "react";

interface iInputProps {
  label: string;
  inputType: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  name?: string;
}

export default function InputFild(props: iInputProps){
return (
  <div>
    <label className="font-bold text-lg text-center" htmlFor={props.label}>{props.label}</label>
    <input className="block p-.5 text-center rounded-md border-2 border-blue-900" id={props.label} type={props.inputType} {...props}/>
  </div>
)
}
