import { faq } from "@/data";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    return (
        <section className="flex flex-col items-center gap-y-5 container-sm mt-14">
            <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">FAQ</h1>
            <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col gap-y-3 md:flex-row md:gap-x-5"
            >
                <div className="w-full md:w-1/2 flex flex-col gap-y-3">
                    {faq
                        .slice(0, faq.length / 2 + 1)
                        .map(({ id, question, answer }) => (
                            <AccordionItem
                                key={id}
                                value={`${id}`}
                                className="w-full border border-white/15 rounded-xl px-4"
                            >
                                <AccordionTrigger className="text-start">
                                    {question}
                                </AccordionTrigger>
                                <AccordionContent>{answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                </div>
                <div className="w-full md:w-1/2 flex flex-col shrink-0 gap-x-6 gap-y-3">
                    {faq
                        .slice(faq.length / 2 + 1)
                        .map(({ id, question, answer }) => (
                            <AccordionItem
                                key={id}
                                value={`${id}`}
                                className="w-full border border-white/15 rounded-xl px-4"
                            >
                                <AccordionTrigger className="text-start">
                                    {question}
                                </AccordionTrigger>
                                <AccordionContent>{answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                </div>
            </Accordion>
        </section>
    );
}
