import { useLayout } from "@/Providers/LauyoutProvider";
import Skeleton from "react-loading-skeleton";
// import { useNavigate } from "react-router-dom";

const Header = () => {
  const { siteData, loading, contactRef } = useLayout();

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
            if (window.location.href !== "/") {
              window.history.pushState(
                {
                  fromContact: true,
                },
                "",
                "/"
              );
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
