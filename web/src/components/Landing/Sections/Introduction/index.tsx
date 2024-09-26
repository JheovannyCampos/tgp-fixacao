import { Button } from "@/components/ui/button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useContentStore from "@/store/contentStore";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const IntroductionSection = () => {
  const { siteData, loading } = useContentStore();
  const navigate = useNavigate();
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-full flex flex-col gap-2 lg:flex-row lg:h-[620px]">
      <div className="w-full h-full lg:pl-[60px] p-5 flex flex-col gap-14 justify-start lg:w-[50%]">
        <h1 className="font-bold text-5xl">
          {!loading ? siteData.principal?.title : <Skeleton />}
        </h1>
        <div className="flex flex-col gap-4">
          <span className="max-w-[600px] text-muted-foreground md:text-xl">
            {!loading ? siteData.principal?.subTitle : <Skeleton />}
          </span>
          <div className="flex gap-4 flex-col md:flex-row lg:flex-row">
            <Button
              className="bg-blue-500 lg:w-[120px] w-full hover:bg-blue-600"
              onClick={() => navigate("/about")}
            >
              Saiba mais
            </Button>
            <Button
              variant={"outline"}
              className="lg:w-[120px] w-full"
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
      </div>
      <div className="w-full h-full flex justify-center items-center lg:w-[50%]">
        <div className="relative w-full h-full p-5 lg:p-0">
          {!loading && siteData.principal.image ? (
            <img
              src={siteData.principal.image}
              className="object-contain size-full rounded-lg"
            />
          ) : (
            <Skeleton className="h-[600px] w-[900px] rounded-lg" />
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
