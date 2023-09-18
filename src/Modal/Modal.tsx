import { ReactNode, useEffect, useState, } from "react";
import { ModalStyle } from "./ModalStyle";
import React from "react";

export interface ModalProps {
    children: ReactNode,
    isOpen: boolean
    onClose?: (...params: any[]) => any
}

export function Modal({children, isOpen}: ModalProps) {
 
    useEffect(() => {
        setModalState(isOpen);
    }, [isOpen])

    const [modalState, setModalState] = useState(isOpen);

    function handleClickCloseModal() {
        isOpen = false;
        setModalState(false)
    }

    return (
        <>
            {
                modalState && (
                    <ModalStyle className="modal">
                       <div className="modal-content">
                            <button onClick={handleClickCloseModal}>x</button>
                            {children}
                       </div>
                    </ModalStyle>
                )
            }
        </>
    )
}