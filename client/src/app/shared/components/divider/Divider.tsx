enum Colors {
    "light" = "border-gray-400",
    "dark" = "border-gray-800",
}

interface IDivider {
    color: "light" | "dark";
}

export function Divider({ color }: IDivider) {
    return (
        <hr
            className={`${Colors[color]} text-center m-auto border-gray-400 max-w-[600px]`}
        />
    );
}
