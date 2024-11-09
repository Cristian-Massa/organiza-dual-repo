"use client";

import { useState } from "react";
import Link from "next/link";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/src/app/shared/components/buttons/Button";
export function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    // Cambiar los textos por traducciones
    <nav className=" md:fixed md:z-50 right-0 left-0 top-6 grid place-content-center">
      <div className="flex justify-between px-10 pt-10 items-center w-screen md:hidden">
        <h1 className="text-black">Organiza</h1>
        <Button
          className="items-center"
          onClick={() => setOpen(!open)}
          buttonType="close"
        >
          <FontAwesomeIcon color="black" fontSize={"36px"} icon={faBars} />
        </Button>
      </div>
      <div
        className={`
                md:shadow-lg
                overflow-x-hidden
                ${open ? "translate-x-0" : "translate-x-full"}
                fixed right-0 left-0 bottom-0 top-0 
                md:static md:translate-x-0 
                flex gap-20 bg-white shadow-sm md:rounded-full p-6 
                items-center justify-center
                flex-col md:flex-row text-center
                transition-all
              `}
      >
        <div className="md:hidden absolute top-10 right-10">
          <Button onClick={() => setOpen(!open)}>
            <FontAwesomeIcon color="black" icon={faXmark} />
          </Button>
        </div>
        <ul className="md:flex gap-10">
          <li>
            <Link href={"/"}>Inicio</Link>
          </li>
          <li>
            <Link href={"/companies"}>Negocios</Link>
          </li>
          <li>
            <Link href={"/about-us"}>Acerca de nosotros</Link>
          </li>
        </ul>
        <ul className="md:flex gap-10">
          <li>
            <Link href={"/login"}>Iniciar Secion</Link>
          </li>
          <li>
            <Link href={"/register"}>Registrarse</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
