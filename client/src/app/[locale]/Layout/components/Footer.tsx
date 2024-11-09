import Link from "next/link";
import { Divider } from "@/src/app/shared/components/divider/Divider";

export function Footer() {
    return (
        <footer className="bg-gray-800 min-h-[200px] text-white grid grid-cols-3  pt-10">
            <div className="flex justify-center items-center">
                <Link href={"/"}>
                    <h1 className="text-white">Organiza</h1>
                </Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href={"#"}>Sobre nosotros</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Avisos Legales</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Trabajo aca</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Contactenos</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href={"#"}>Instagram</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Linkedin</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Whatsapp - proximamente</Link>
                    </li>
                </ul>
            </div>
            <div className="col-span-3 h-[20px] text-center">
                <Divider color="light" />
                <p> Organiza copyright 2024</p>
            </div>
        </footer>
    );
}
