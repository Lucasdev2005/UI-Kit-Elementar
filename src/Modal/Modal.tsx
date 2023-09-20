import { ReactNode, useEffect, useState, } from "react";
import { ModalStyle } from "./ModalStyle";
import React from "react";

export interface ModalProps {
    children: ReactNode,
    isOpen: boolean
    onClose?: (...params: any[]) => any,
    className?: string
}

export function Modal({children, isOpen, onClose, className}: ModalProps) {

    useEffect(() => {
        setModalState(isOpen);
    }, [isOpen])

    const [modalState, setModalState] = useState(isOpen);

    function handleClickCloseModal() {
        isOpen = false;
        setModalState(false)
        if (onClose) {
            onClose();
        }
    }

    function classConcat(): string {
        return `modal-content ${className}`;
    }

    return (
        <>
            {
                modalState && (
                    <ModalStyle className="modal">
                       <div className={classConcat()}>
                            <button onClick={handleClickCloseModal}>x</button>
                            <div className="modal-children">
                                {children}
                            </div>
                       </div>
                    </ModalStyle>
                )
            }
        </>
    )
}