const Footer = () => {
  const actualYear = new Date().getFullYear();

  return (
    <div className="w-full h-[72px] flex items-center text-[#737d8a] border-t-2 border-gray-100">
      <p className="text-xs font-semibold pl-[20px]">
        © {actualYear} TGP. Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
