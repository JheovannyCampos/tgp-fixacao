const Header = () => {
  return (
    <div className="w-full h-[72px] bg-[#2563eb] flex justify-between items-center text-white">
      <div className="pl-[20px]">Logo</div>
      <nav className="flex gap-4 pr-[20px]">
        <p>Serviços</p>
        <p>Portifólio</p>
        <p>Contato</p>
      </nav>
    </div>
  );
};

export default Header;
