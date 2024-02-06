import { Icons } from "@/components";

export function Logo() {
    return (
        <span className="flex items-center gap-x-3">
            <Icons.logo className="w-16 sm:w-24 md:w-24" />
            <span className="font-semibold lg:text-lg">Eureka Talent</span>
        </span>
    );
}
