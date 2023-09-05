import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import dora from "../../../public/doranegra.jpg";
import Image from "next/image";

function About() {
  return (
    <section className="text-white w-full flex flex-col justify-center items-center h-[90%]">

      <h1 className="text-8xl mt-52 mb-32">
        Fullstack <span className="text-[#D0BFFF]">Developer</span>...|
      </h1>
      <div className="w-[65%] h-[90%] flex justify-center items-center">
        <article className="w-[70%] h-[90%] flex bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#D0BFFF]/[0.20]">
          <div className="w-[50%] flex flex-col gap-3 justify-center items-center">
            <Image
              src={dora}
              alt=""
              className="w-[55%] h-[60%] rounded-full"
              objectFit="cover"
            />
            <span>Stiven Delgado Gutierrez</span>
          </div>
          <div className="w-[50%] flex flex-col justify-center items-center gap-4 px-5">
            <p>
              Mi perfil se caracteriza por ser una persona que trabaja en
              equipo, <span className="text-[#D0BFFF]">adaptabilidad</span> en
              los retos que se presenten, aprendizaje continuo y{" "}
              <span className="text-[#D0BFFF]">comunicación efectiva</span>.
              Demuestro un sólido desempeño en el campo de la programación,
              manteniéndome constantemente{" "}
              <span className="text-[#D0BFFF]">abierto a aprender</span>,{" "}
              <span className="text-[#D0BFFF]">colaborar en equipo</span> y
              cumplir con precisión las tareas asignadas para abordar desafíos
              mediante la programación de soluciones efectivas.
            </p>

            <div className="flex justify-around items-center text-3xl w-[50%] h-10">
              <a
                href="https://www.linkedin.com/in/stiven-delgado-b8b2b0272/"
                className="hover:text-[#D0BFFF] hover:text-4xl transition-all ease-in duration-200 pt-2"
               target="_blank" 
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/StivenDelgado"
                className="hover:text-[#D0BFFF] hover:text-4xl transition-all ease-in duration-200 pt-2"
               target="_blank" 
              >
                <AiFillGithub />
              </a>
              <a
                href="delgadostiven@gmail.com"
                className="hover:text-[#D0BFFF] hover:text-4xl transition-all ease-in duration-200 pt-2"
               target="_blank"                
               >
                <AiFillMail />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
