"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Divider } from "@/src/app/shared/components/divider/Divider";
export function Footer() {
    const url = usePathname();
    return (
        <footer
            className={` ${url ? url.includes("auth") && "hidden" : null} bg-gray-800 min-h-[200px] grid md:grid-cols-3 place-content-center text-center  pt-10`}
        >
            <div className="flex justify-center items-center">
                <Link href={"/"}>
                    <h1 className="text-white">Organiza</h1>
                </Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link className="text-white" href={"#"}>
                            Sobre nosotros
                        </Link>
                    </li>
                    <li>
                        <Link className="text-white" href={"#"}>
                            Avisos Legales
                        </Link>
                    </li>
                    <li>
                        <Link className="text-white" href={"#"}>
                            Trabajo aca
                        </Link>
                    </li>
                    <li>
                        <Link className="text-white" href={"#"}>
                            Contactenos
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link className="text-white" href={"#"}>
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link className="text-white" href={"#"}>
                            Linkedin
                        </Link>
                    </li>
                    <li>
                        <Link className="text-white" href={"#"}>
                            Whatsapp - proximamente
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="md:col-span-3 h-[30px] text-center">
                <Divider color="light" />
                <p className="text-white"> Organiza copyright 2024</p>
            </div>
        </footer>
    );
}
