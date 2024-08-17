import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLayout } from "@/Providers/LauyoutProvider";
import Autoplay from "embla-carousel-autoplay";

const Card = () => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
      <div className="absolute inset-0 z-10 cursor-pointer">
        <span className="sr-only">View Project</span>
      </div>
      <img
        src="assets/montma.JPG"
        width={500}
        height={400}
        className="object-cover w-full h-64"
        style={{ aspectRatio: "500/400", objectFit: "cover" }}
      />
      <div className="p-4 bg-background">
        <h3 className="text-xl font-bold">titulo</h3>
        <p className="text-sm text-muted-foreground">descrição</p>
      </div>
    </div>
  );
};

const CardModal = () => {
  const { siteData } = useLayout();

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Titulo</DialogTitle>
      </DialogHeader>
      <DialogContent>
        <Carousel
          className="items-center flex"
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </DialogContent>
  );
};

export const Portfolio = () => {
  return (
    <section className="w-full py-12">
      <div className="container">
        <div>
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Portfólio
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Nossos Projetos
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Conheça alguns dos nossos principais projetos de fachadas de
            porcelanato.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-3">
          {/* {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2"
                >
                  <button onClick={() => handleImageClick(index)} className="absolute inset-0 z-10 cursor-pointer">
                    <span className="sr-only">View Project</span>
                  </button>
                  <img
                    src="/placeholder.svg"
                    alt={project.title}
                    width={500}
                    height={400}
                    className="object-cover w-full h-64"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }}
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              ))} */}
          <Dialog>
            <DialogTrigger>
              <Card />
            </DialogTrigger>
            <CardModal />
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <Card />
            </DialogTrigger>
            <CardModal />
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <Card />
            </DialogTrigger>
            <CardModal />
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <Card />
            </DialogTrigger>
            <CardModal />
          </Dialog>
        </div>
      </div>
    </section>
  );
};
