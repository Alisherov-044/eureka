import { About } from "./sections/about";
import { FAQ } from "./sections/faq";
import { Hero } from "./sections/hero";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <FAQ />
        </main>
    );
}
