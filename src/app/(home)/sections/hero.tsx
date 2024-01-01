import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";

export function Hero() {
    return (
        <section className="flex container mt-8 mb-14">
            <div className="flex flex-col-reverse items-center gap-y-10 md:flex-row md:gap-x-10">
                <div className="flex flex-col gap-y-6 md:w-1/2">
                    <h1 className="text-2xl font-bold leading-7 sm:text-3xl md:text-4xl lg:text-5xl">
                        Are you looking for a{" "}
                        <span className="text-primary">remote job</span> at a
                        great US tech company?
                    </h1>
                    <p className="leading-6 md:text-lg">
                        We&apos;re launching the Eureka talent network to match
                        tech talent in Uzbekistan with remote jobs at great US
                        and UK tech companies.
                    </p>
                    <Link href="https://t.me/eurekatalent_bot" target="_blank">
                        <Button className="max-w-[178px]">Join us</Button>
                    </Link>
                </div>
                <div className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 md:w-1/2">
                    <div className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8">
                        <Image
                            src="/hero/img-1.png"
                            width={276}
                            height={190}
                            alt="hero img"
                            className="rounded-lg overflow-hidden"
                        />
                        <Image
                            src="/hero/img-2.jpg"
                            width={276}
                            height={290}
                            alt="hero img"
                            className="rounded-lg object-cover aspect-square overflow-hidden"
                        />
                    </div>
                    <div className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8">
                        <Image
                            src="/hero/img-3.png"
                            width={276}
                            height={290}
                            alt="hero img"
                            className="rounded-lg object-cover aspect-square overflow-hidden"
                        />
                        <Image
                            src="/hero/img-4.png"
                            width={276}
                            height={190}
                            alt="hero img"
                            className="rounded-lg overflow-hidden"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
