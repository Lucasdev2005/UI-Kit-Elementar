import React from "react";
import { FormGroup } from "./InputStyle";

export interface InputProps {
    type: "text" | "number" | "email" | "password",
    placeHolder: string,
    setModel: (event: any) => any,
    disabled?: boolean,
    hexadecimal: string,
    classname?: string
}

export function Input({type, placeHolder , setModel, disabled, hexadecimal, classname}: InputProps) {
    return (
        <FormGroup color={'#'+ hexadecimal} className={classname}>
            <input onChange={event => setModel(event.target.value)} type={type} className="form__field" placeholder={placeHolder} disabled={disabled} />
            <label htmlFor={placeHolder} className="form__label">{placeHolder}</label>
        </FormGroup>
    );
}