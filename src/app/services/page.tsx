import Container from "@/components/Container";
import Credits from "@/components/Credits";
import ExplainText from "@/components/ExplainText";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <Container className="!p-0">
      <Navbar />
      <main className="flex">
        <Credits margin={false} />
        <div className="px-[2.81vw] max-mdl:px-[6vw] py-10 mx-auto mt-[15vh] max-mdl:mt-[7.5vh]">
          <h2 className="text-lg font-space-grotesk font-bold leading-7 tracking-[0.32rem] text-primary-200 text-center uppercase to-top">
            Tudo o que for necessário, nós trazemos para a mesa
          </h2>
          <h1 className="mt-3 font-bold tracking-widest font-space-grotesk text-[2rem] max-xl:text-2xl text-support-100 uppercase text-center max-w-[791px] mx-auto to-top">
            vamos{" "}
            <ExplainText
              text="Tecer"
              explain={
                <>
                  <span className="font-bold">Tecer</span> é unir fios com intenção. Na web, é
                  conectar ideias, códigos e visões até formar algo bonito, funcional e cheio de
                  propósito.
                </>
              }
            />{" "}
            a conexão e abrir o seu espaço na internet
          </h1>
          <p className="mt-3 text-lg tracking-[0.1rem] font-normal text-support-400 text-center max-w-[791px] mx-auto mb-16">
            Nós oferecemos todos os serviços necessários para criar o design, o código e deixar o
            seu site no ar, pronto para uso.
          </p>
          <Image
            src="/icons/pt-services.svg"
            width={532}
            height={400}
            alt=""
            className="block mx-auto max-w-[532px] w-full mb-20 to-bottom"
          />
        </div>
      </main>
    </Container>
  );
}
