import { ReactNode, useState } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import useContentStore, { Post } from "@/store/contentStore";

const DialogContent = ({
  children,
  isOpen,
  onClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-[90vw] max-h-[90vh] overflow-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};
const DialogHeader = ({ children }: { children: ReactNode }) => (
  <div className="mb-4">{children}</div>
);
const DialogTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold">{children}</h2>
);

const Card = ({
  postData,
  onClick,
}: {
  postData: Post;
  onClick: () => void;
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={postData.images[0]}
        alt={postData.title}
        className="object-cover w-full h-64"
        style={{ aspectRatio: "500/400", objectFit: "cover" }}
      />
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold text-gray-900">{postData.title}</h3>
        <p className="text-sm text-gray-600">{postData.description}</p>
      </div>
    </div>
  );
};

const CardModal = ({
  postData,
  isOpen,
  onClose,
}: {
  postData: Post;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <DialogContent isOpen={isOpen} onClose={onClose}>
      <DialogHeader>
        <DialogTitle>{postData.title}</DialogTitle>
      </DialogHeader>
      <div className="w-full max-w-4xl">
        <LightGallery
          speed={500}
          download={false}
          plugins={[lgThumbnail, lgZoom, lgFullscreen]}
          mode="lg-slide"
          controls={true}
          mobileSettings={{
            controls: true,
            showCloseIcon: true,
            download: false,
          }}
          thumbnail={true}
          thumbWidth={60}
          thumbHeight={"45"}
          thumbMargin={5}
          zoom={true}
          scale={1}
          closable={true}
          loop={true}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          swipeThreshold={50}
          slideShowAutoplay={false}
        >
          {postData.images.map((image, index) => (
            <a
              key={index}
              href={image}
              className="block rounded overflow-hidden"
              data-lg-size="800-600"
            >
              <img
                src={image}
                alt={`${postData.title} - Imagem ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg hover:opacity-80 transition-opacity"
                loading="lazy"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </DialogContent>
  );
};

export const Portfolio = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { siteData } = useContentStore();

  const handleCardClick = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
            Portfólio
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-4">
            {siteData.portfolio.title}
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {siteData.portfolio.subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.portfolio.posts.map((post, idx) => (
            <Card
              key={idx}
              postData={post}
              onClick={() => handleCardClick(post)}
            />
          ))}
        </div>

        {selectedPost && (
          <CardModal
            postData={selectedPost}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
};
