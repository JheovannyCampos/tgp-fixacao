import { useLayout } from "@/Providers/LauyoutProvider";
import useContentStore from "@/store/contentStore";
import Skeleton from "react-loading-skeleton";

const Header = () => {
  const { contactRef } = useLayout();
  const { siteData, loading } = useContentStore();

  return (
    <div className="w-full h-[72px] bg-[#979595] flex justify-between items-center text-white">
      <div className="pl-[20px]">
        <a href="/">
          {!loading ? (
            <img
              src={siteData.principal?.logo}
              className="w-full h-[48px] object-fit"
            ></img>
          ) : (
            <Skeleton className="w-full h-[48px]" />
          )}
        </a>
      </div>
      <nav className="flex gap-4 pr-[20px]">
        <a href="/about">Sobre</a>
        <a href="/inserts">Inserts</a>
        <a href="/portfolio">Portifólio</a>
        <a
          onClick={() => {
            console.log(window.location.pathname);
            if (
              window.location.pathname !== "/" &&
              window.location.pathname !== "/about"
            ) {
              window.location.href = "/contact";
            }

            contactRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="cursor-pointer"
        >
          Contato
        </a>
      </nav>
    </div>
  );
};

export default Header;
