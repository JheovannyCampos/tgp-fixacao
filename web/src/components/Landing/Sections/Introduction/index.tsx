import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLayout } from "@/Providers/LauyoutProvider";
import Autoplay from "embla-carousel-autoplay";

const IntroductionSection = () => {
  const { siteData } = useLayout();

  console.log("siteData", siteData);

  return (
    <div className="w-full h-[620px] flex">
      <div className="w-[50%] h-full pl-[60px] flex flex-col gap-3 justify-center">
        <h1 className="font-bold text-5xl">{siteData[0]?.Titulo}</h1>
        <span className="max-w-[600px] text-muted-foreground md:text-xl">
          {siteData[0]?.SubTitulo}
        </span>
        <div className="flex gap-4">
          <Button className="bg-blue-500 w-[120px] hover:bg-blue-600">
            Saiba mais
          </Button>
          <Button variant={"outline"} className="w-[120px]">
            Contato
          </Button>
        </div>
      </div>
      <div className="w-[50%] h-full flex justify-center">
        <Carousel
          className="w-[38.5vw]"
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
              <img src="assets/charles.JPG" alt="a" className="object-cover" />
            </CarouselItem>
            <CarouselItem>
              <img src="assets/chateau.jpg" alt="b" className="object-cover" />
            </CarouselItem>
            <CarouselItem>
              <img src="assets/itau.JPG" alt="c" className="object-cover" />
            </CarouselItem>
            <CarouselItem>
              <img src="assets/montma.JPG" alt="c" className="object-cover" />
            </CarouselItem>
            <CarouselItem>
              <img src="assets/unique.JPG" alt="c" className="object-cover" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default IntroductionSection;
