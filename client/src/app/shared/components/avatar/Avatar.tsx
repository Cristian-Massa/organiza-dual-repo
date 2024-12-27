import Image from "next/image";

interface IAvatar {
    src: string;
    alt: string;
}
export function Avatar({ src, alt }: IAvatar) {
    return (
        <div className="relative aspect-square h-40 w-40 rounded-full overflow-hidden shadow-md">
            <Image className="object-cover" fill src={src} alt={alt} />
        </div>
    );
}
