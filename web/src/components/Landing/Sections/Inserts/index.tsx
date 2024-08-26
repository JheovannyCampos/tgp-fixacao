import { Card } from "@/components/ui/card";
import { useLayout } from "@/Providers/LauyoutProvider";
import Skeleton from "react-loading-skeleton";

const Inserts = () => {
  const { siteData, loading } = useLayout();
  return (
    <div className="w-full bg-[#f1f5f9] flex flex-col lg:flex-row">
      <div className="lg:w-[50%] py-12 flex flex-col justify-center pl-12">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          {!loading ? siteData.inserts?.title : <Skeleton />}
        </h2>
        <p className="lgmax-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {!loading ? siteData.inserts?.subTitle : <Skeleton />}
        </p>
      </div>
      <div className="lg:w-[50%] h-full flex flex-col gap-6 justify-end py-3 lg:py-12 lg:pr-12 px-4">
        <Card className="p-4 bg-muted rounded-lg">
          <div className="flex items-start gap-4">
            {!loading ? (
              <img
                src={siteData.inserts?.insertImage1}
                width="84"
                height="84"
                alt="Insert 1"
                className="rounded-md"
              />
            ) : (
              <Skeleton />
            )}
            <div>
              <p className="font-medium">
                {!loading ? siteData.inserts?.insertTitle1 : <Skeleton />}
              </p>
              <p className="text-muted-foreground text-sm">
                {!loading ? siteData.inserts?.insertSubTitle1 : <Skeleton />}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-muted rounded-lg">
          <div className="flex items-start gap-4">
            {!loading ? (
              <img
                src={siteData.inserts.insertImage2}
                width="84"
                height="84"
                alt="Insert 2"
                className="rounded-md"
              />
            ) : (
              <Skeleton />
            )}
            <div>
              <p className="font-medium">
                {!loading ? siteData.inserts?.insertTitle2 : <Skeleton />}
              </p>
              <p className="text-muted-foreground text-sm">
                {!loading ? siteData.inserts?.insertSubTitle2 : <Skeleton />}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-muted rounded-lg">
          <div className="flex items-start gap-4">
            {!loading ? (
              <img
                src={siteData.inserts.insertImagem3}
                width="84"
                height="84"
                alt="Insert 3"
                className="rounded-md"
              />
            ) : (
              <Skeleton />
            )}
            <div>
              <p className="font-medium">
                {!loading ? siteData.inserts?.insertTitle3 : <Skeleton />}
              </p>
              <p className="text-muted-foreground text-sm">
                {!loading ? siteData.inserts?.insertSubTitle3 : <Skeleton />}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Inserts;
