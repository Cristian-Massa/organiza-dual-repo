"use client";

import { useState } from "react";

import { OwnerAndEmployeePanel } from "@/src/app/[locale]/profile/components/company/OwnerAndEmployeePanel";
import { EditableAvatar } from "@/src/app/[locale]/profile/hoc/withAvatarEditable";
import { useMyProfile } from "@/src/app/hooks/queries/useProfileData";
import { Avatar } from "@/src/app/shared/components/avatar/Avatar";
import { Tab } from "@/src/app/shared/components/tabs/Tab";
import { Tabs } from "@/src/app/shared/components/tabs/Tabs";

export function Company() {
    const data = useMyProfile();
    const profileData = data.data;
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="h-full flex flex-col bg-white">
            <div className="shadow-lg">
                {!profileData?.ownerOf && !profileData?.employeeOf && (
                    <Tabs activeTab={activeTab}>
                        <Tab
                            id={1}
                            setActiveTab={setActiveTab}
                            label="Create Company"
                        />
                    </Tabs>
                )}
                {profileData?.ownerOf && (
                    <Tabs activeTab={activeTab}>
                        <Tab
                            id={1}
                            setActiveTab={setActiveTab}
                            label="Company"
                        />
                        <Tab
                            id={2}
                            setActiveTab={setActiveTab}
                            label="Employees"
                        />
                        <Tab
                            id={3}
                            setActiveTab={setActiveTab}
                            label="Upgrade"
                        />
                    </Tabs>
                )}
            </div>
            {/* !profileData?.employeeOf && !profileData?.ownerOf ? replace when is ready */}
            {false ? (
                <div className="flex justify-center py-4">
                    <Avatar
                        alt="Company Logo"
                        src="https://img.freepik.com/premium-vector/minimalist-type-creative-business-logo-template_1283348-23026.jpg?semt=ais_hybrid"
                    />
                </div>
            ) : (
                <OwnerAndEmployeePanel />
            )}
        </div>
    );
}
