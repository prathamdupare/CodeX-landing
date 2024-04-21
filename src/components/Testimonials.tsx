import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://example.com/avatar1.png",
    name: "Emma Smith",
    userName: "@emma_smith",
    comment:
      "This coding platform is amazing! I've learned so much and improved my skills immensely.",
  },
  {
    image: "https://example.com/avatar2.png",
    name: "Michael Johnson",
    userName: "@michael_johnson",
    comment:
      "I can't believe how much I've grown as a developer since joining AcademiaX. Highly recommended for anyone serious about coding!",
  },
  {
    image: "https://example.com/avatar3.png",
    name: "Sophia Lee",
    userName: "@sophia_lee",
    comment:
      "The instructors at AcademiaX are top-notch. Their teaching style is engaging and easy to follow, making learning enjoyable.",
  },
  {
    image: "https://example.com/avatar4.png",
    name: "Daniel Brown",
    userName: "@daniel_brown",
    comment:
      "I've tried other coding platforms before, but AcademiaX stands out for its quality content and supportive community. 5 stars!",
  },
  {
    image: "https://example.com/avatar5.png",
    name: "Olivia Miller",
    userName: "@olivia_miller",
    comment:
      "AcademiaX has been a game-changer for me. The hands-on projects and real-world examples have helped me gain practical skills that I can apply right away.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32 ">
      <h2 className="text-3xl md:text-4xl font-bold pb-8">
        Discover Why
        <span> People Love </span>
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          AcademiaX
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          ),
        )}
      </div>
    </section>
  );
};
