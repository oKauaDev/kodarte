import Container from "@/components/Container";
import Credits from "@/components/Credits";
import ExplainText from "@/components/ExplainText";
import Navbar from "@/components/Navbar";
import Svg from "@/components/Svg";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container className="!p-0 overflow-hidden">
      <Navbar />
      <Image
        src="/images/world.png"
        alt=""
        width={500}
        height={300}
        className="hidden max-lg:block fixed bottom-0 h-[20vh] object-cover object-top opacity-50"
      />
      <main className="flex">
        <Credits margin={false} />
        <div className="w-screeen h-screen flex items-center overflow-hidden max-mdl:h-auto max-mdl:mt-10">
          <Image
            src="/images/world.png"
            alt=""
            width={2000}
            height={2000}
            className="w-[40.31vw] select-none h-[120vh] object-cover object-right max-lg:w-[30.31vw] max-lg:hidden"
          />
          <div className="px-[2.81vw] max-mdl:px-[6vw] py-10 flex items-center gap-28">
            <Image
              src="/icons/pt-intro-web.svg"
              alt=""
              width={44}
              height={400}
              className="max-lg:hidden"
            />
            <span className="hidden max-lg:block max-mdl:!hidden"></span>
            <div>
              <h2 className="text-lg font-space-grotesk font-bold leading-7 tracking-[0.32rem] text-primary-200 max-lg:text-center">
                QUALIDADE NA VANGUARDA
              </h2>
              <h1 className="mt-3 font-bold tracking-widest font-space-grotesk text-[2rem] max-xl:text-2xl text-support-100 uppercase max-lg:text-center">
                Codificamos com{" "}
                <ExplainText
                  text="lirismo"
                  explain={
                    <>
                      <span className="font-bold">Lirismo</span> é quando a emoção vira palavras,
                      como se o coração escrevesse direto, com beleza, sentimento e um toque de alma
                      poética.
                    </>
                  }
                />
                , entregamos com exatidão.
              </h1>
              <p className="mt-3 text-xl max-xl:text-lg leading-7 tracking-[0.1rem] font-normal text-support-400 max-lg:text-center">
                Somos uma agência de desenvolvimento web, unindo tecnologia, design e estratégia
                para criar soluções inovadoras e entregar resultados excepcionais.
              </p>
              <p className="mt-8 font-light italic text-support-500 leading-7 mb-11 max-lg:text-center">
                {"“"}Acreditamos que boas soluções nascem da simplicidade bem aplicada.{"”"}
              </p>

              <Link
                href="https://wa.me/5532998566823"
                className="flex items-center gap-3 text-support-100 uppercase font-space-grotesk text-xl leading-5 font-bold py-2 px-5 bg-primary-300 rounded-lg w-max relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:w-1/2 before:h-full before:bg-gradient-to-r before:from-white/10 before:via-white/40 before:to-white/10 before:-translate-x-full before:skew-x-[-30deg] before:transition-all before:duration-500 hover:before:translate-x-[250%] max-lg:mx-auto"
              >
                quero contratar
                <Svg src="/icons/sparkles.svg" className="relative z-10" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}
