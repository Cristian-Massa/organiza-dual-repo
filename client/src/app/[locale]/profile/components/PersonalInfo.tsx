"use client";

import { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Company } from "@/src/app/[locale]/profile/components/Company";
import { GraphsInfo } from "@/src/app/[locale]/profile/components/GraphsInfo";
import { PersonalDataInputs } from "@/src/app/[locale]/profile/components/personal-info/PersonalDataInputs";
import { EditableAvatar } from "@/src/app/[locale]/profile/hoc/withAvatarEditable";
import { useMyProfile } from "@/src/app/hooks/queries/useProfileData";
import { useWindowSize } from "@/src/app/hooks/useWindowSize";
import { Container } from "@/src/app/shared/components/containers/Container";
import { Tab } from "@/src/app/shared/components/tabs/Tab";
import { Tabs } from "@/src/app/shared/components/tabs/Tabs";
import { IUserData } from "@/src/types/userData";

export function PersonalInfo() {
    const data = useMyProfile();
    const profileData: IUserData = data.data;
    const [activeTab, setActiveTab] = useState(1);
    const windowSize = useWindowSize();
    console.log(windowSize);
    useEffect(() => {
        if (windowSize.width > 766) {
            setActiveTab(1);
        }
    }, [windowSize]);
    return (
        <aside className="col-span-full h-[90dvh] md:h-full md:col-span-3 row-span-3">
            <ToastContainer />
            <Container className="h-[90dvh] md:h-full flex flex-col items-center">
                <div className="w-full md:pb-6 flex justify-between items-center flex-col pt-6 gap-2 shadow-lg ">
                    <EditableAvatar
                        src="https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw"
                        alt="profile picture"
                    />
                    <div className="md:hidden">
                        <Tabs activeTab={activeTab}>
                            <Tab
                                setActiveTab={setActiveTab}
                                id={1}
                                label="Personal"
                            />
                            <Tab
                                setActiveTab={setActiveTab}
                                id={2}
                                label="Company"
                            />
                            <Tab
                                setActiveTab={setActiveTab}
                                id={3}
                                label="Graphs"
                            />
                        </Tabs>
                    </div>
                </div>
                <div className="w-full h-full overflow-y-auto">
                    {activeTab === 1 && <PersonalDataInputs />}{" "}
                    {activeTab === 2 && <Company />}{" "}
                    {activeTab === 3 && <GraphsInfo />}
                </div>
                <div className="p-6 shadow-xl w-full text-center">
                    <p>Organiza 2024</p>
                </div>
            </Container>
        </aside>
    );
}
