import { useTranslations } from "next-intl";
import Image from "next/image";
import { RedirectionButton } from "@/src/app/shared/components/buttons/RedirectionButton";
import { Container } from "@/src/app/shared/components/containers/Container";
import { Divider } from "@/src/app/shared/components/divider/Divider";
import { CountryName } from "@/src/app/shared/components/CountryName";

export default function Home() {
    const tHome = useTranslations("home");

    return (
        <main className="flex flex-col p-4 md:p-40 justify-evenly gap-10 h-screen shadow-xl"></main>
    );
}
