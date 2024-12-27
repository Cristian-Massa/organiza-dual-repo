import { useQuery } from "@tanstack/react-query";

export const useMyProfile = () => {
    const getMyProfile = async () => {
        const profile = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/users/getMyProfile`,
            {
                method: "get",
                credentials: "include",
                headers: {
                    "content-type": "application/json",
                },
            },
        );
        const data = await profile.json();
        return data;
    };
    return useQuery({
        queryKey: ["myProfile"],
        queryFn: () => getMyProfile(),
    });
};
