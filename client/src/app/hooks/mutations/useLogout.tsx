import {
    QueryClient,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ILogoutResponse {
    message: string;
}

export function useLogout() {
    const queryClient = useQueryClient();
    const logout = useMutation({
        mutationKey: ["myProfile"],
        onSuccess: (data: ILogoutResponse) => {
            toast(data.message, {
                type: "success",
            });
            queryClient.setQueryData(["myProfile"], null);
        },
        mutationFn: async () => {
            console.log("hi");
            const logout = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/users/auth/logout`,
                {
                    method: "post",
                    credentials: "include",
                    headers: {
                        "content-type": "application/json",
                    },
                },
            );
            return await logout.json();
        },
    });
    return logout;
}
