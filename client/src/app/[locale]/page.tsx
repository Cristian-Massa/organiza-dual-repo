import { useTranslations } from "next-intl";
import { GlassContainer } from "@/src/app/shared/components/containers/GlassContainer";

export default function Home() {
  const tHome = useTranslations("home.header");
  return (
    <>
      <header className={`bg-header h-screen bg-cover`}>
        <GlassContainer ligthness={10}>
          <h1>{tHome("welcome")}</h1>
        </GlassContainer>
      </header>
    </>
  );
}
