import { useTranslations } from "next-intl";
import { Form } from "@/src/app/[locale]/register/components/Form";

export default function Register() {
    const tHome = useTranslations("home");

    return (
        <main className="flex justify-center items-center h-screen bg-landingBG bg-cover">
            <Form />
        </main>
    );
}
