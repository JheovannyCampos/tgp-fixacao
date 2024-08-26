import { Portfolio } from "../Porfolio";
import Skeleton from "react-loading-skeleton";
import { useLayout, UseSiteDataProps } from "@/Providers/LauyoutProvider";

const Card = ({
  siteData,
  loading,
}: {
  siteData: UseSiteDataProps["siteData"];
  loading: UseSiteDataProps["loading"];
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-3">
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          {!loading ? (
            <h3 className="text-xl font-bold">{siteData.about.cardTitle1}</h3>
          ) : (
            <Skeleton />
          )}
          {!loading ? (
            <p className="text-sm text-muted-foreground">
              {siteData.about.cardDescription1}
            </p>
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          {!loading ? (
            <h3 className="text-xl font-bold">{siteData.about.cardTitle2}</h3>
          ) : (
            <Skeleton />
          )}
          {!loading ? (
            <p className="text-sm text-muted-foreground">
              {siteData.about.cardDescription2}
            </p>
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          {!loading ? (
            <h3 className="text-xl font-bold">{siteData.about.cardTitle3}</h3>
          ) : (
            <Skeleton />
          )}
          {!loading ? (
            <p className="text-sm text-muted-foreground">
              {siteData.about.cardDescription3}
            </p>
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { siteData, loading } = useLayout();
  return (
    <section className="w-full py-12">
      <div className="container">
        <div>
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Sobre
          </div>
          {!loading ? (
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {siteData.about.title}
            </h2>
          ) : (
            <Skeleton />
          )}
          {!loading ? (
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {siteData.about.subTitle}
            </p>
          ) : (
            <Skeleton />
          )}
        </div>
        <Card siteData={siteData} loading={loading} />
      </div>
      <Portfolio />
    </section>
  );
};

export default About;
