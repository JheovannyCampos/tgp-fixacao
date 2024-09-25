import { useLayout } from "@/Providers/LauyoutProvider";
import useContentStore from "@/store/contentStore";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { contactRef } = useLayout();
  const { siteData, loading } = useContentStore();
  const navigate = useNavigate();

  return (
    <div className="w-full h-[72px] bg-[#979595] flex justify-between items-center text-white">
      <div className="pl-[20px]">
        <p onClick={() => navigate("/")} className="cursor-pointer">
          {!loading ? (
            <img
              src={siteData.principal?.logo}
              className="w-full h-[48px] object-fit"
            ></img>
          ) : (
            <Skeleton className="w-full h-[48px]" />
          )}
        </p>
      </div>
      <nav className="flex gap-4 pr-[20px]">
        <p onClick={() => navigate("/about")} className="cursor-pointer">
          Sobre
        </p>
        <p onClick={() => navigate("/inserts")} className="cursor-pointer">
          Inserts
        </p>
        <p onClick={() => navigate("/portfolio")} className="cursor-pointer">
          Portifólio
        </p>
        <p
          onClick={() => {
            if (
              window.location.pathname !== "/" &&
              window.location.pathname !== "/about"
            ) {
              navigate("/contact");
            }

            contactRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="cursor-pointer"
        >
          Contato
        </p>
      </nav>
    </div>
  );
};

export default Header;
