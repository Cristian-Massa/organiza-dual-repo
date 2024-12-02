"use client";
import React, { useState } from "react";
import Link from "next/link";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { DEFAULTBUTTON } from "@/src/app/shared/constants/gradients";
import { Button } from "@/src/app/shared/components/buttons/Button";
export function Nav() {
    const [open, setOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const locale = useLocale();

    return (
        <nav className=" md:fixed md:z-50 right-0 left-0 top-6 grid place-content-center">
            <div className="flex justify-between px-10 pt-10 items-center w-screen md:hidden">
                <h1 className="text-black">Organiza</h1>
                <Button
                    className="items-center"
                    onClick={() => setOpen(!open)}
                    buttonType="close"
                >
                    <FontAwesomeIcon
                        color="black"
                        fontSize={"36px"}
                        icon={faBars}
                    />
                </Button>
            </div>
            <div
                className={`
                md:shadow-lg
                overflow-x-hidden
                ${open ? "translate-x-0" : "translate-x-full"}
                fixed right-0 left-0 bottom-0 top-0 
                md:static md:translate-x-0 
                flex gap-20 bg-white shadow-sm md:rounded-full
                items-center justify-center
                flex-col md:flex-row text-center
                transition-all
                h-16 px-6
              `}
            >
                <div className="md:hidden absolute top-10 right-10">
                    <Button onClick={() => setOpen(!open)}>
                        <FontAwesomeIcon color="black" icon={faXmark} />
                    </Button>
                </div>
                <ul className="md:flex gap-10 h-10 ">
                    <li
                        className={`${pathname === "/" ? `${DEFAULTBUTTON} *:text-white` : ""} hover:${DEFAULTBUTTON} rounded-xl flex items-center px-2`}
                    >
                        <Link id="home" href={"/"}>
                            Inicio
                        </Link>
                    </li>
                    <li
                        className={`${pathname.includes("/companies") ? `${DEFAULTBUTTON} *:text-white` : ""} hover:${DEFAULTBUTTON} rounded-xl flex items-center px-2`}
                    >
                        <Link
                            id="companies"
                            href={`/${locale}/companies`}
                            locale="en"
                        >
                            Negocios
                        </Link>
                    </li>
                    <li
                        className={`${pathname.includes("/pricing") ? `${DEFAULTBUTTON} *:text-white` : ""} hover:${DEFAULTBUTTON} rounded-xl flex items-center px-2`}
                    >
                        <Link
                            id="pricing"
                            href={`/${locale}/pricing`}
                            locale="en"
                        >
                            Precios
                        </Link>
                    </li>
                    <li
                        className={`${pathname.includes("/about-us") ? `${DEFAULTBUTTON} *:text-white` : ""} hover:${DEFAULTBUTTON} rounded-xl flex items-center px-2`}
                    >
                        <Link id="about" href={`/${locale}/about-us`}>
                            Acerca de nosotros
                        </Link>
                    </li>
                </ul>
                <ul className="md:flex gap-10 h-10 ">
                    <li
                        className={`${pathname.includes("/auth") ? `${DEFAULTBUTTON} *:text-white` : ""} hover:${DEFAULTBUTTON} rounded-xl flex items-center px-2`}
                    >
                        <Link id="login" href={`/${locale}/auth`}>
                            Autenticar
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
