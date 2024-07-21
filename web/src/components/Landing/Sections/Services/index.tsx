const Services = () => {
  return (
    <div className="bg-[#f1f5f9]">
      <div className="flex flex-col items-center p-6 gap-3">
        <p>Nossos Serviços</p>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Transforme a Fachada do seu Prédio
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
          Oferecemos soluções completas para a fixação de fachadas de
          porcelanato, desde o projeto até a instalação, garantindo resultados
          de alta qualidade.
        </p>
      </div>
      <div className="w-full flex">
        <div className="max-w-[50%]">
          <ul className="gap-6 pl-[200px] flex flex-col h-full justify-center">
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Projeto Personalizado</h3>
                <p className="text-muted-foreground">
                  Desenvolvemos um projeto exclusivo para a sua fachada, levando
                  em conta as características do seu prédio.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Instalação Profissional</h3>
                <p className="text-muted-foreground">
                  Nossa equipe de especialistas realiza a instalação com
                  precisão e cuidado, garantindo a durabilidade da sua fachada.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Garantia de Qualidade</h3>
                <p className="text-muted-foreground">
                  Oferecemos garantia de qualidade em todos os nossos serviços,
                  para que você tenha total tranquilidade.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="max-w-[50%0] h-full">
          <img
            className="max-w-[560px] p-[60px] pt-0"
            src="https://i.pinimg.com/736x/12/82/1a/12821aef23d6a0615e08d056bf5018e1.jpg"
            alt="d"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
