import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const IntroductionSection = () => {
  return (
    <div className="w-full h-[620px] flex">
      <div className="w-[50%] h-full pl-[60px] flex flex-col gap-3 justify-center">
        <h1 className="font-bold text-5xl">
          Fachadas de Porcelanato <br></br>em Belo Horizonte
        </h1>
        <span className="max-w-[600px] text-muted-foreground md:text-xl">
          Transforme a aparência do seu prédio com a nossa expertise em fixação
          de fachadas de porcelanato.
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
      <div className="w-[50%] h-full">
        <Carousel
          className="h-full w-[82%]"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <img
                src="https://static.wikia.nocookie.net/c9dde1fd-8d96-4288-97ea-6dca45a39891/scale-to-width/755"
                alt="a"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://static.wikia.nocookie.net/0b1c376c-8479-4742-9744-597f7b1ec5e5/scale-to-width/755"
                alt="b"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center =">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQZqnDpXms239q3z3mn1FJdAdyjOGmAA--w&s"
                alt="c"
              />
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
