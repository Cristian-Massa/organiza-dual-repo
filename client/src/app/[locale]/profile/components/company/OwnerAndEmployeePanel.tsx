import { useState } from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import { InputSection } from "@/src/app/[locale]/profile/components/common/InputSection";
import { EditableAvatar } from "@/src/app/[locale]/profile/hoc/withAvatarEditable";
import { useMyProfile } from "@/src/app/hooks/queries/useProfileData";
import { Avatar } from "@/src/app/shared/components/avatar/Avatar";
import { ChipContainer } from "@/src/app/shared/components/chips/ChipContainer";

export function OwnerAndEmployeePanel() {
    const data = useMyProfile();
    const profileData = data.data;
    const [activeInputEditing, setActiveInputEditing] = useState("");
    const [services, setServices] = useState<string[]>([]);
    const [currentService, setCurrentService] = useState("");
    return (
        <div className="flex flex-col lg:flex-row h-full gap-10 py-4">
            <div className="px-14 flex justify-center items-center">
                {/* profileData?.ownerOf replace for true */}
                {true && (
                    <EditableAvatar
                        alt="Company Logo"
                        src="https://img.freepik.com/premium-vector/minimalist-type-creative-business-logo-template_1283348-23026.jpg?semt=ais_hybrid"
                    />
                )}
                {profileData?.employeeOf && (
                    <Avatar
                        alt="Company Logo"
                        src="https://img.freepik.com/premium-vector/minimalist-type-creative-business-logo-template_1283348-23026.jpg?semt=ais_hybrid"
                    />
                )}
            </div>
            <div className="flex flex-col items-center w-full">
                <h2>Company Name</h2>
                <InputSection
                    icon={faPencil}
                    title="Company Name"
                    defaultValue={profileData?.companyName}
                    isDisabled={true}
                    onClick={() => setActiveInputEditing("companyName")}
                />
                <InputSection
                    icon={faPencil}
                    title="Sessions"
                    defaultValue={profileData?.companyName}
                    isDisabled={true}
                    onClick={() => setActiveInputEditing("companyName")}
                />
                <InputSection
                    icon={faPlus}
                    title="Services"
                    defaultValue={profileData?.companyName}
                    setValue={setCurrentService}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        setServices([...services, currentService]);
                        setCurrentService("");
                    }}
                />
                <ChipContainer services={services} />
            </div>
        </div>
    );
}
