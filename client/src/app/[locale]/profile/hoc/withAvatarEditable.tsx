import { ComponentType, ReactNode, useEffect, useRef, useState } from "react";

import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Avatar } from "@/src/app/shared/components/avatar/Avatar";

interface IwithAvatarEditable {
    src: string;
    alt: string;
}

function withAvatarEditable<T extends object>(Component: ComponentType<T>) {
    return (props: T) => {
        const [newImage, setNewImage] = useState<string | null>(null);
        const { src } = props as IwithAvatarEditable;
        const fileInputRef = useRef<HTMLInputElement>(null);

        function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
            if (e.target.files && e.target.files[0]) {
                setNewImage(URL.createObjectURL(e.target.files[0]));
            }
            toast("Imagen cargada", {
                type: "success",
            });
        }

        function handleInputClick() {
            if (fileInputRef.current) {
                fileInputRef.current.click();
            }
        }
        return (
            <span className="relative">
                <ToastContainer />
                <Component {...props} src={newImage ?? src} />
                <div
                    onClick={handleInputClick}
                    className="transition-opacity duration-100 absolute inset-0 opacity-0 hover:opacity-85 rounded-full bg-black flex items-center justify-center"
                >
                    <input
                        onChange={handleFileChange}
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                    />
                    <FontAwesomeIcon
                        icon={faPencil}
                        className="text-gray-500"
                    />
                </div>
            </span>
        );
    };
}

export const EditableAvatar = withAvatarEditable(Avatar);
