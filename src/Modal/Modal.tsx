import { ReactNode } from "react";
import { ModalStyle } from "./ModalStyle";
import React from "react";

export interface ModalProps {
    children: ReactNode
}

export function Modal({children}: ModalProps) {
   return (
    <ModalStyle>
        <h1>Olás</h1>
    </ModalStyle>
   )
}