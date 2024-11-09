export function CountryName() {
    const fetchCountry = async () => {
        try {
            const countryResponse = await fetch(
                `http://www.geoplugin.net/json.gp`,
            );
            const countryData = await countryResponse.json();
            return countryData.geoplugin_countryName;
        } catch (error) {
            console.log(error);
            return "el pais";
        }
    };
    return <>{fetchCountry()}</>;
}
