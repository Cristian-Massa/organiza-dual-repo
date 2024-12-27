"use client";

import { useLocale } from "next-intl";
import Link from "next/link";

import { CustomList } from "@/src/app/[locale]/Layout/components/nav/CustomList";
import { useLogout } from "@/src/app/hooks/mutations/useLogout";
import { useMyProfile } from "@/src/app/hooks/queries/useProfileData";
import { Button } from "@/src/app/shared/components/buttons/Button";
import { IUserData } from "@/src/types/userData";

export function Nav() {
    const locale = useLocale();
    const get = useMyProfile();
    const { mutate: logout } = useLogout();
    const data: IUserData = get.data;
    return (
        <CustomList>
            <li>
                <Link href={`/${locale}`}>Inicio</Link>
            </li>
            <li>
                <Link href={`/${locale}/pricing`}>Precios</Link>
            </li>
            <li>
                <Link href={`/${locale}/about-us`}>Acerca de nosotros</Link>
            </li>
            {!data?.username ? (
                <li>
                    <Link href={`/${locale}/auth`}>Autenticar</Link>
                </li>
            ) : (
                <>
                    <li>
                        <Link href={`/${locale}/profile`}>Perfil</Link>
                    </li>
                    <li>
                        <Button onClick={() => logout()} buttonType="text">
                            Cerrar sesión
                        </Button>
                    </li>
                </>
            )}
        </CustomList>
    );
}
