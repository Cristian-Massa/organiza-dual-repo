import { useTranslations } from "next-intl";
export default function AboutUs() {
    const tHome = useTranslations("home");

    return (
        <main className="flex flex-col p-4 md:p-40 justify-evenly gap-10 h-screen shadow-xl"></main>
    );
}
