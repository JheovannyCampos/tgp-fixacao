import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { useLayout } from "@/Providers/LauyoutProvider";
import Autoplay from "embla-carousel-autoplay";

const IntroductionSection = () => {
  const { siteData } = useLayout();

  return (
    <div className="w-full  flex flex-col gap-2 lg:flex-row lg:h-[620px]">
      <div className="w-full h-full pl-[60px] flex flex-col gap-3 justify-center lg:w-[50%]">
        <h1 className="font-bold text-5xl">{siteData[0]?.title}</h1>
        <span className="max-w-[600px] text-muted-foreground md:text-xl">
          {siteData[0]?.subTitle}
        </span>
        <div className="flex gap-4">
          <Button
            className="bg-blue-500 w-[120px] hover:bg-blue-600"
            onClick={() => (window.location.href = "/about")}
          >
            Saiba mais
          </Button>
          <Button variant={"outline"} className="w-[120px]">
            Contato
          </Button>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center lg:w-[50%]">
        <Carousel
          className="lg:w-[38.5vw] items-center flex"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="h-[620px]">
            <CarouselItem>
              <img
                src={siteData[0]?.image1}
                alt="a"
                className="object-cover rounded-lg"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={siteData[0]?.image2}
                alt="b"
                className="object-cover rounded-lg"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={siteData[0]?.image3}
                alt="c"
                className="object-cover rounded-lg"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={siteData[0]?.image4}
                alt="c"
                className="object-cover rounded-lg"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={siteData[0]?.image5}
                alt="c"
                className="object-cover rounded-lg"
              />
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default IntroductionSection;
