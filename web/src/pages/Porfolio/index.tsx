import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useContentStore, { Post } from "@/store/contentStore";
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
    <DialogContent className="max-w-[90vw] max-h-[90vh] w-auto h-auto">
      <DialogHeader>
        <DialogTitle>{postData.title}</DialogTitle>
      </DialogHeader>
      <div className="overflow-auto max-h-[70vh]">
        <LightGallery
          speed={500}
          download={false}
          plugins={[]}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {postData.images.map((image, index) => (
            <a
              key={index}
              href={image}
              className="block rounded overflow-hidden"
            >
              <img
                src={image}
                alt={`Imagem ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </a>
          ))}
        </LightGallery>
      </div>
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
