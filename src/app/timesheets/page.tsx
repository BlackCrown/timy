'use client';

import CalendarComponent from "@/components/calendarComponent";
import InputFild from "@/utils/input";
import {useState} from "react";

export default function Timesheets() {
  interface iCalendarDate {
    id: number;
    name: string;
    start: number;
    end: number;
    repeat: 'daily' | 'weekly' | 'monthly';
  }

  const [formData, setFormData] = useState<iCalendarDate[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };
  
  return(
    <div>
      <CalendarComponent />
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <InputFild onChange={handleChange} label="Task Name" inputType="text" name='name' value={formData.find()}/>
        <InputFild onChange={handleChange} label="Initial" inputType="range" name='start' value={formData.start}/>
        <InputFild onChange={handleChange} label="End" inputType="range" name='end' value={formData.end}/>
        <InputFild onChange={handleChange} label="Repeat" inputType="radio" name='repeat' value={formData.repeat}/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}