import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is AcademiaX free to use?",
    answer: "Yes, AcademiaX is completely free for all users.",
    value: "item-1",
  },
  {
    question: "What programming languages are taught on AcademiaX?",
    answer:
      "AcademiaX offers courses in a variety of programming languages, including HTML, CSS, JavaScript, Python, and more.",
    value: "item-2",
  },
  {
    question: "How do I enroll in a course on AcademiaX?",
    answer:
      "To enroll in a course on AcademiaX, simply sign up for an account, browse our course catalog, and click 'Enroll' on the course you're interested in.",
    value: "item-3",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Most courses on AcademiaX do not have prerequisites, but some advanced courses may require prior knowledge.",
    value: "item-4",
  },
  {
    question: "Can I access AcademiaX on my mobile device?",
    answer:
      "Yes, AcademiaX is fully responsive and can be accessed on any device, including smartphones and tablets.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
