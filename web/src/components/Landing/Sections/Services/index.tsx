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
      <div className="w-full flex flex-col md:flex-row gap-3 lg:gap-0">
        <div className="lg:w-[50%] w-full">
          <ul className="gap-6 lg:pl-[200px] px-2 flex flex-col h-full justify-center">
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
        <div className="lg:w-[50%] w-full h-full flex justify-center">
          <img src="assets/predio.png" alt="d" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Services;
