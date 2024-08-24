import { useLayout } from "@/Providers/LauyoutProvider";
// import { useNavigate } from "react-router-dom";

const Header = () => {
  const { contactRef } = useLayout();
  // const navigator = useNavigate();

  return (
    <div className="w-full h-[72px] bg-[#353535] flex justify-between items-center text-white">
      <div className="pl-[20px]">
        <a href="/">Logo</a>
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
