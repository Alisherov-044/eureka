import Link from "next/link";
import { Button, Logo } from "@/components";
import { footerLinks } from "@/data";

export function Footer() {
    return (
        <footer className="w-full flex justify-between gap-x-4 container py-14 lg:py-20">
            <div className="w-full flex flex-col gap-y-10 md:flex-row md:justify-between md:gap-x-5">
                <div className="flex flex-col gap-y-4">
                    <Logo />
                    <p className="text-sm max-w-[320px]">
                        Helping early stage startups get to Product-Market Fit
                        for less.
                    </p>
                </div>
                <ul className="relative flex flex-wrap gap-y-2 gap-x-4 md:max-w-[420px] md:gap-x-0">
                    {footerLinks.map(({ id, title, url }) => (
                        <Link key={id} href={url} className="md:w-1/2">
                            {title}
                        </Link>
                    ))}
                </ul>
                <Link href="https://t.me/eurekatalent" target="_blank">
                    <Button className="max-w-[178px]">Join us</Button>
                </Link>
            </div>
        </footer>
    );
}
