import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";
import api from "@/services/api";
import Skeleton from "react-loading-skeleton";
import { useLayout } from "@/Providers/LauyoutProvider";
import { useEffect, useState } from "react";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { siteData, contactRef, loading } = useLayout();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [isAboutPage, setIsAboutPage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/about") {
      setIsAboutPage(true);
    }
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await api.post("/send-email", {
        name: data.name,
        email: data.email,
        message: data.message,
      });

      toast.success("Mensagem enviada!");
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível enviar a mensagem");
    }
  };

  return (
    <section
      className={`w-full py-12 md:py-24 lg:py-32 bg-white ${
        !isAboutPage ? "border-t" : ""
      }`}
      ref={contactRef}
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            {!loading ? siteData.contact?.title : <Skeleton />}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {!loading ? siteData.contact?.subTitle : <Skeleton />}
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              type="text"
              placeholder="Nome"
              className="max-w-lg flex-1"
              required
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500">Nome é obrigatório</span>
            )}
            <Input
              type="email"
              placeholder="E-mail"
              className="max-w-lg flex-1"
              required
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500">E-mail é obrigatório</span>
            )}
            <Textarea
              placeholder="Mensagem"
              rows={4}
              className="max-w-lg flex-1"
              required
              {...register("message")}
            />
            {errors.message && (
              <span className="text-red-500">Mensagem é obrigatório</span>
            )}
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
