import { useState } from "react";

import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { InputSection } from "@/src/app/[locale]/profile/components/common/InputSection";
import { useMyProfile } from "@/src/app/hooks/queries/useProfileData";
import { Button } from "@/src/app/shared/components/buttons/Button";
import { IUserData } from "@/src/types/userData";

export function PersonalDataInputs() {
    const data = useMyProfile();
    const profileData: IUserData = data.data;
    const [dataFieldEditing, setDataFieldEditing] = useState("");

    function resetPassword() {
        toast("Se envio un correo a tu cuenta", {
            type: "success",
        });
    }
    return (
        <div className="pt-10 text-center flex items-center flex-col gap-4">
            <InputSection
                icon={faPencil}
                isDisabled={dataFieldEditing !== "username"}
                onClick={() => setDataFieldEditing("username")}
                defaultValue={profileData?.username}
                title="username"
            />
            <InputSection
                icon={faPencil}
                isDisabled={dataFieldEditing !== "email"}
                onClick={() => setDataFieldEditing("email")}
                defaultValue={profileData?.email}
                title="email"
            />
            <InputSection
                icon={faPencil}
                isDisabled={dataFieldEditing !== "phone"}
                onClick={() => setDataFieldEditing("phone")}
                defaultValue={profileData?.phone}
                title="phone"
            />
            <div>
                <h6>Change password</h6>
                <Button onClick={resetPassword} className="py-4 px-6">
                    Solicitar cambio de contrase;a
                </Button>
            </div>
        </div>
    );
}
