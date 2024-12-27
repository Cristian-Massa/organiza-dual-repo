import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { Company } from "@/src/app/[locale]/profile/components/Company";
import { GraphsInfo } from "@/src/app/[locale]/profile/components/GraphsInfo";
import { PersonalInfo } from "@/src/app/[locale]/profile/components/PersonalInfo";
import { Container } from "@/src/app/shared/components/containers/Container";

export default async function Profile() {
    const session = (await cookies()).get("session");
    if (!session) redirect("auth");
    return (
        <main className="md:min-h-screen grid grid-cols-8 grid-rows-3 md:gap-4 p-6 md:pt-40">
            <PersonalInfo />
            <Container className="hidden md:block md:col-span-5 row-span-2">
                <Company />
            </Container>
            <Container className="hidden md:block md:col-span-5 row-span-1">
                <GraphsInfo />
            </Container>
        </main>
    );
}
