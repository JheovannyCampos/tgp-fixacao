import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Autoplay from "embla-carousel-autoplay";
import { useLayout } from "@/Providers/LauyoutProvider";

const IntroductionSection = () => {
  const { siteData, contactRef, loading } = useLayout();

  return (
    <div className="w-full  flex flex-col gap-2 lg:flex-row lg:h-[620px]">
      <div className="w-full h-full pl-[60px] flex flex-col gap-3 justify-center lg:w-[50%]">
        <h1 className="font-bold text-5xl">
          {!loading ? siteData.principal?.title : <Skeleton />}
        </h1>
        <span className="max-w-[600px] text-muted-foreground md:text-xl">
          {!loading ? siteData.principal?.subTitle : <Skeleton />}
        </span>
        <div className="flex gap-4">
          <Button
            className="bg-blue-500 w-[120px] hover:bg-blue-600"
            onClick={() => (window.location.href = "/about")}
          >
            Saiba mais
          </Button>
          <Button
            variant={"outline"}
            className="w-[120px]"
            onClick={() => {
              contactRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
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
              {!loading && siteData.principal.image1 ? (
                <img
                  src={siteData.principal.image1}
                  alt="a"
                  className="object-cover rounded-lg"
                />
              ) : (
                <Skeleton className="h-full w-[900px]" />
              )}
            </CarouselItem>
            <CarouselItem>
              {!loading && siteData.principal.image2 ? (
                <img
                  src={siteData.principal.image2}
                  alt="a"
                  className="object-cover rounded-lg"
                />
              ) : (
                <Skeleton className="h-full w-[900px]" />
              )}
            </CarouselItem>
            <CarouselItem>
              {!loading && siteData.principal.image3 ? (
                <img
                  src={siteData.principal.image3}
                  alt="a"
                  className="object-cover rounded-lg"
                />
              ) : (
                <Skeleton className="h-full w-[900px]" />
              )}
            </CarouselItem>
            <CarouselItem>
              {!loading && siteData.principal.image4 ? (
                <img
                  src={siteData.principal.image4}
                  alt="a"
                  className="object-cover rounded-lg"
                />
              ) : (
                <Skeleton className="h-full w-[900px]" />
              )}
            </CarouselItem>
            <CarouselItem>
              {!loading && siteData.principal.image5 ? (
                <img
                  src={siteData.principal.image5}
                  alt="a"
                  className="object-cover rounded-lg"
                />
              ) : (
                <Skeleton className="h-full w-[900px]" />
              )}
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default IntroductionSection;
