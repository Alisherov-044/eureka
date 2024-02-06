import Link from "next/link";
import { Button, Logo } from "@/components";

export function Header() {
    return (
        <header className="w-full flex items-center justify-between gap-x-4 py-6 container">
            <Link href="/">
                <Logo />
            </Link>
            <Link href="https://t.me/eurekatalent_bot" target="_blank">
                <Button>Join us</Button>
            </Link>
        </header>
    );
}
