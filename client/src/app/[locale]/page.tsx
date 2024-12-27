import * as jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import Image from "next/image";

import { CountryName } from "@/src/app/shared/components/CountryName";
import { RedirectionButton } from "@/src/app/shared/components/buttons/RedirectionButton";
import { Container } from "@/src/app/shared/components/containers/Container";
import { Divider } from "@/src/app/shared/components/divider/Divider";

export default async function Home() {
    const session = (await cookies()).get("session");
    const userData = jwt.decode(session?.value ?? "") as jwt.JwtPayload;
    const parsedUserData = userData && userData;

    return (
        <>
            <header className="flex flex-col p-4 md:p-40 justify-evenly gap-10 h-screen bg-landingBG bg-cover shadow-xl">
                <h1 className="text-center md:text-start">OrgAniza</h1>
                <div className="flex flex-col gap-5">
                    <p className="md:max-w-[500px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia nulla minus numquam cupiditate nihil esse est
                        deserunt officiis non accusantium commodi voluptatibus
                        libero dolores, ullam totam iusto error ab similique
                        incidunt blanditiis pariatur animi quibusdam odit
                        nesciunt? Esse, est fugiat! Exercitationem laborum
                        maxime dicta earum.
                    </p>
                    <div>
                        <RedirectionButton path="/login">
                            Lorem Ipsum
                        </RedirectionButton>
                    </div>
                </div>
            </header>
            <main className="min-h-screen p-10">
                <section className="flex flex-col py-10 gap-10 text-center">
                    <article className="grid grid-cols-1 md:grid-cols-6 gap-10 h-[400px]">
                        <Container className="md:col-span-3 relative">
                            <Image
                                className="object-cover"
                                src="https://placehold.co/600x400"
                                fill
                                alt="placeholder"
                            />
                        </Container>
                        <Container className="md:col-span-1 relative">
                            <Image
                                className="object-cover"
                                src="https://placehold.co/600x400"
                                fill
                                alt="placeholder"
                            />
                        </Container>
                        <Container className="md:col-span-2 relative">
                            <Image
                                className="object-cover"
                                src="https://placehold.co/600x400"
                                fill
                                alt="placeholder"
                            />
                        </Container>
                        <Container className="md:col-span-2 relative">
                            <Image
                                className="object-cover"
                                src="https://placehold.co/600x400"
                                fill
                                alt="placeholder"
                            />
                        </Container>
                        <Container className="md:col-span-3 relative">
                            <Image
                                className="object-cover"
                                src="https://placehold.co/600x400"
                                fill
                                alt="placeholder"
                            />
                        </Container>
                        <Container className="col-span-1 relative">
                            <Image
                                className="object-cover"
                                src="https://placehold.co/600x400"
                                fill
                                alt="placeholder"
                            />
                        </Container>
                    </article>
                </section>
                <section className="flex flex-col md:flex-row justify-center items-center text-center gap-10 py-20">
                    <div className="max-w-[600px]">
                        <h2>
                            Contrata el serivcio de agendaciones mas comodo de
                            todo Uruguay
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto quia quaerat obcaecati culpa
                            aliquam quis in saepe asperiores labore magni itaque
                            sapiente aspernatur, dignissimos ex nesciunt
                            corporis voluptatem praesentium mollitia distinctio
                            consectetur. Fugit dolor qui blanditiis tenetur ea
                            vitae aspernatur nihil velit dolores tempora iste,
                            at officia laudantium? Fuga, tenetur?
                        </p>
                    </div>
                    <Container className="relative h-[300px] w-[300px] md:h-[400px] md:w-[600px]">
                        <Image
                            className="object-cover"
                            src="https://placehold.co/600x400"
                            fill
                            alt="professional"
                        />
                    </Container>
                </section>
                <section className="flex flex-col-reverse md:flex-row justify-center items-center text-center gap-10 py-20">
                    <Container className="relative md:flex-col h-[300px] w-[300px] md:h-[400px] md:w-[600px]">
                        <Image
                            className="object-cover"
                            src="https://placehold.co/600x400"
                            fill
                            alt="professional"
                        />
                    </Container>
                    <div className="max-w-[600px]">
                        <h2>
                            Contrata el serivcio de agendaciones mas comodo de
                            todo <CountryName />
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto quia quaerat obcaecati culpa
                            aliquam quis in saepe asperiores labore magni itaque
                            sapiente aspernatur, dignissimos ex nesciunt
                            corporis voluptatem praesentium mollitia distinctio
                            consectetur. Fugit dolor qui blanditiis tenetur ea
                            vitae aspernatur nihil velit dolores tempora iste,
                            at officia laudantium? Fuga, tenetur?
                        </p>
                    </div>
                </section>
                <Divider color={"light"} />
                <section className="flex flex-col md:flex-row justify-center items-center text-center gap-10 py-20 min-h-screen">
                    {!session ? (
                        <div className="max-w-[600px]">
                            <h2>Inicia sesion</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Laboriosam soluta tempore
                                quasi obcaecati nemo dolorum facere sit?
                                Possimus, eligendi tempora.
                            </p>
                            <div className="flex gap-10 place-content-center py-10">
                                <RedirectionButton path="/login">
                                    Iniciar sesion
                                </RedirectionButton>
                                <RedirectionButton path="/register">
                                    Registrarse
                                </RedirectionButton>
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-[600px]">
                            <h2>Bienvenido {parsedUserData?.username ?? ""}</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Laboriosam soluta tempore
                                quasi obcaecati nemo dolorum facere sit?
                                Possimus, eligendi tempora.
                            </p>
                            <div className="flex gap-10 place-content-center py-10">
                                <RedirectionButton path="/login">
                                    Panel de control
                                </RedirectionButton>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
