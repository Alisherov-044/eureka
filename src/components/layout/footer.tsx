import Link from "next/link";
import { Button, Logo } from "@/components";
import { footerLinks } from "@/data";

export function Footer() {
    return (
        <footer className="w-full flex justify-between gap-x-4 container py-14 lg:py-20">
            <div className="w-full flex flex-col gap-y-10 sm:flex-row sm:items-center sm:justify-between sm:gap-x-5">
                <div className="flex flex-col gap-y-4">
                    <Logo />
                </div>
                <Link href="https://t.me/eurekatalent" target="_blank">
                    <Button className="max-w-[178px]">Join us</Button>
                </Link>
            </div>
        </footer>
    );
}
