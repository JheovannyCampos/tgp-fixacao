import { useLayout } from "@/Providers/LauyoutProvider";
import Skeleton from "react-loading-skeleton";

const Services = () => {
  const { siteData, loading } = useLayout();

  return (
    <div className="bg-[#f1f5f9]">
      <div className="flex flex-col items-center p-6 gap-3">
        <p>Nossos Serviços</p>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {!loading ? siteData.services?.title : <Skeleton />}
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
          {!loading ? siteData.services?.subTitle : <Skeleton />}
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-3 lg:gap-0">
        <div className="lg:w-[50%] w-full">
          <ul className="gap-6 lg:pl-[200px] px-2 flex flex-col h-full justify-center">
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  {!loading ? siteData.services?.info1 : <Skeleton />}
                </h3>
                <p className="text-muted-foreground">
                  {!loading ? siteData.services?.description1 : <Skeleton />}
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  {!loading ? siteData.services?.info2 : <Skeleton />}
                </h3>
                <p className="text-muted-foreground">
                  {!loading ? siteData.services?.info2 : <Skeleton />}
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  {!loading ? siteData.services?.info3 : <Skeleton />}
                </h3>
                <p className="text-muted-foreground">
                  {!loading ? siteData.services?.description3 : <Skeleton />}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:w-[50%] w-full h-full flex justify-center">
          {!loading ? (
            <img
              src={siteData.services?.image}
              alt="d"
              className="rounded-lg"
            />
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
