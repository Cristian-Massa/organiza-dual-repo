import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IFormInputs } from "@/src/app/[locale]/auth/components/Form/types/form";

export function usePostUser(formActive: string) {
    const router = useRouter();
    const queryClient = useQueryClient();
    const post = useMutation({
        mutationKey: ["user"],
        onSuccess: (data) => {
            toast(data.message, {
                type: "success",
            });
            queryClient.setQueryData(["myProfile"], data.data);
            router.push("/");
        },
        onError: (data) =>
            toast(data.message, {
                type: "error",
            }),

        mutationFn: async (data: IFormInputs) => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/users/auth/${formActive}`,
                {
                    method: "post",
                    credentials: "include",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                },
            );
            return await response.json();
        },
    });
    return post;
}
