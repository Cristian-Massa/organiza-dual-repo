import { useTranslations } from "next-intl";
import Image from "next/image";
import { RedirectionButton } from "@/src/app/shared/components/buttons/RedirectionButton";
import { Container } from "@/src/app/shared/components/containers/Container";
import { Divider } from "@/src/app/shared/components/divider/Divider";
import { CountryName } from "@/src/app/shared/components/CountryName";

export default function Home() {
    const tHome = useTranslations("home");

    return (
        <>
            <header className="flex flex-col md:flex-row p-2 justify-center gap-10 items-center h-screen bg-gradient-to-t from-gray-100 shadow-sm">
                <div className="flex flex-col gap-5">
                    <p className="md:max-w-[400px]">
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
                <div className=" aspect-square w-[300px] flex justify-center items-center bg-secondaryBG rounded-full shadow-[5px_5px_24px_#bcbcbc,-5px_-5px_24px_#ffffff] ">
                    <h1>OrgAniza</h1>
                </div>
            </header>
            <main className="min-h-screen p-10">
                <section className="flex flex-col py-10 gap-10 text-center">
                    <article className="grid grid-cols-1 md:grid-cols-6 gap-10 h-[400px]">
                        <Container sx="md:col-span-3 relative">
                            <Image
                                className="object-cover"
                                src="https://placehold.co/600x400"
                                fill
                                alt="placeholder"
                            />
                        </Container>
                        <Container sx="md:col-span-1 relative">
                            <Image
                                className="object-cover"
                                src="https://placehold.co/600x400"
                                fill
                                alt="placeholder"
                            />
                        </Container>
                        <Container sx="md:col-span-2 relative">
                            <Image
                                className="object-cover"
                                src="https://placehold.co/600x400"
                                fill
                                alt="placeholder"
                            />
                        </Container>
                        <Container sx="md:col-span-2 relative">
                            <Image
                                className="object-cover"
                                src="https://placehold.co/600x400"
                                fill
                                alt="placeholder"
                            />
                        </Container>
                        <Container sx="md:col-span-3 relative">
                            <Image
                                className="object-cover"
                                src="https://placehold.co/600x400"
                                fill
                                alt="placeholder"
                            />
                        </Container>
                        <Container sx="col-span-1 relative">
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
                    <Container sx="relative h-[300px] w-[300px] md:h-[400px] md:w-[600px]">
                        <Image
                            className="object-cover"
                            
                            src="https://placehold.co/600x400"
                            fill
                            alt="professional"
                        />
                    </Container>
                </section>
                <section className="flex flex-col md:flex-row justify-center items-center text-center gap-10 py-20">
                    <Container sx="relative h-[300px] w-[300px] md:h-[400px] md:w-[600px]">
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
                            todo el pais
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
                    <div className="max-w-[600px]">
                        <h2>inicia sesion</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Laboriosam soluta tempore quasi obcaecati nemo
                            dolorum facere sit? Possimus, eligendi tempora.
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
                </section>
            </main>
        </>
    );
}
