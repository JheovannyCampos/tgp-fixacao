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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useContentStore, { Post } from "@/store/contentStore";
import Autoplay from "embla-carousel-autoplay";
import Skeleton from "react-loading-skeleton";

const Card = ({ postData }: { postData: Post }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
      <div className="absolute inset-0 z-10 cursor-pointer">
        <span className="sr-only">View Project</span>
      </div>
      <img
        src={postData.images[0]}
        width={500}
        height={400}
        className="object-cover w-full h-64"
        style={{ aspectRatio: "500/400", objectFit: "cover" }}
      />
      <div className="p-4 bg-background">
        <h3 className="text-xl font-bold">{postData.title}</h3>
        <p className="text-sm text-muted-foreground">{postData.description}</p>
      </div>
    </div>
  );
};

const CardModal = ({ postData }: { postData: Post }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{postData.title}</DialogTitle>
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
            {postData.images.map((image: string) => (
              <CarouselItem>
                <img
                  src={image}
                  alt="a"
                  className="object-cover rounded-lg size-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </DialogContent>
  );
};

export const Portfolio = () => {
  const { siteData, loading } = useContentStore();
  return (
    <section className="w-full py-12">
      <div className="container">
        <div>
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Portfólio
          </div>
          {!loading ? (
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {siteData.portfolio.title}
            </h2>
          ) : (
            <Skeleton />
          )}
          {!loading ? (
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {siteData.portfolio.subTitle}
            </p>
          ) : (
            <Skeleton />
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-3">
          {!loading ? (
            siteData.portfolio.posts.map((post) => (
              <Dialog>
                <DialogTrigger>
                  <Card postData={post} />
                </DialogTrigger>
                <CardModal postData={post} />
              </Dialog>
            ))
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
    </section>
  );
};
