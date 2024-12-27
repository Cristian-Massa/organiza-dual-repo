"use client";

import { ReactNode, useState } from "react";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/src/app/shared/components/buttons/Button";

interface ICustomList {
    children: ReactNode;
}

export function CustomList({ children }: ICustomList) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className=" md:fixed md:z-50 top-6 md:right-[50%] md:translate-x-[50%]">
            <div className=" px-10 md:hidden flex items-center justify-between">
                <h1>Organiza</h1>
                <Button
                    className="p-0 m-0"
                    onClick={() => setIsOpen((prev) => !prev)}
                    buttonType="text"
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        className="w-[40px] h-[40px]"
                    />
                </Button>
            </div>
            <div
                className={`fixed top-0 right-0 bottom-0 left-0 md:static flex justify-center items-center bg-white z-10 md:p-6 md:rounded-full shadow-xl ${isOpen ? "translate-x-[0]" : "translate-x-[100vw]"} md:translate-x-0 transition-transform duration-75`}
            >
                <Button
                    className="md:hidden fixed top-10 right-10"
                    onClick={() => setIsOpen((prev) => !prev)}
                    buttonType="text"
                >
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="w-[40px] h-[40px]"
                    />
                </Button>

                <ul className=" flex flex-col md:flex-row items-center gap-10 ">
                    {children}
                </ul>
            </div>
        </nav>
    );
}
