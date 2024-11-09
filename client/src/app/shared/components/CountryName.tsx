import { headers } from "next/headers";

export async function CountryName() {
    const header = await headers();
    const ip = header.get("True-Client-IP") ?? "127.0.0.1";
    const fetchCountry = async () => {
        try {
            const countryResponse = await fetch(
                `http://www.geoplugin.net/json.gp?ip=${ip}`,
            );
            const countryData = await countryResponse.json();
            if (countryData.geoplugin_status !== 200) return "el pais";

            return countryData.geoplugin_countryName;
        } catch (error) {
            console.log(error);
            return "el pais";
        }
    };
    return <>{fetchCountry()}</>;
}
