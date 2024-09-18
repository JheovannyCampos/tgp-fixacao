import { Button } from "@/components/ui/button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLayout } from "@/Providers/LauyoutProvider";

const IntroductionSection = () => {
  const { siteData, contactRef, loading } = useLayout();

  return (
    <div className="w-full flex flex-col gap-2 lg:flex-row lg:h-[620px]">
      <div className="w-full h-full pl-[60px] flex flex-col gap-14 justify-start lg:w-[50%]">
        <h1 className="font-bold text-5xl">
          {!loading ? siteData.principal?.title : <Skeleton />}
        </h1>
        <div className="flex flex-col gap-4">
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
      </div>
      <div className="w-full h-full flex justify-center items-center lg:w-[50%]">
        <div className="relative w-full h-full max-w-[900px] max-h-[600px] rounded-lg">
          {!loading && siteData.principal.image ? (
            <img
              src={siteData.principal.image}
              className="object-contain w-full h-full "
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
