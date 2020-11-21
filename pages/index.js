import Head from "next/head";
import { BsChatFill } from "react-icons/bs";
import { DiCode } from "react-icons/di";
import { FaFlagCheckered, FaGraduationCap, FaTools } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { RiUserVoiceFill } from "react-icons/ri";
import { CoverText } from "../components/CoverText";
import { ExperienceBox } from "../components/ExperienceBox";
import { Header } from "../components/Header";
import Layout from "../components/Layout";
import { LeftColumn } from "../components/LeftColumn";
import { RightColumn } from "../components/RightColumn";
import { SkillsItem } from "../components/SkillsItem";
import { SkillsList } from "../components/SkillsList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ada Lovelace - Portfolio</title>
        <link rel="icon" href="/favicon-96x96.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <LeftColumn>
          <Header
            name="Testing by Pedro Sanchez"
            position="Software Architect and Philosopher"
            profilePicture="/img/profile-pic.jpg"
          />
          <CoverText>
            Welcome to my resume. I'm in love with God's creation and all 
            its wonderful components made for humans to enjoy peacefully.
            In particular, I love challemges and sorting out problems in 
            using logic and rationale thinking which is a gift we receive
            from God. A logical application of this is software architecture
            and project development which is my main interest area.
          </CoverText>
          <ExperienceBox
            date="Diciembre 1843"
            position="Matemática"
            place="Londres, Reino Unido"
          >
            Escritura del primer algoritmo de computación
          </ExperienceBox>
          <ExperienceBox
            date="Enero 1842"
            position="Matemática"
            place="Universidad de Londres, Reino Unido"
          >
            Traducción y mejora del articulo de la máquina analítica de Babbage
          </ExperienceBox>
        </LeftColumn>
        <RightColumn>
          <SkillsList name="Educación" icon={FaGraduationCap}>
            <SkillsItem date="Junio 1835" institution="Universidad de Londres">
              Matemática
            </SkillsItem>
            <SkillsItem date="Enero 1830">Escritora</SkillsItem>
          </SkillsList>
          <SkillsList name="Contacto" icon={GrContactInfo}>
            <SkillsItem>123-456-789</SkillsItem>
            <SkillsItem>
              <a
                href="mailto:ada@ada-school.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                ada@ada-school.org
              </a>
            </SkillsItem>
            <SkillsItem>
              <a
                href="https://ada-school.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                ada-school.org
              </a>
            </SkillsItem>
            <SkillsItem>
              Urban Rd, Nottingham NG17 8AH, United Kingdom
            </SkillsItem>
          </SkillsList>
          <SkillsList name="Lenguajes y Frameworks" icon={DiCode}>
            <SkillsItem>React</SkillsItem>
            <SkillsItem>Node.js</SkillsItem>
            <SkillsItem>JavaScript</SkillsItem>
            <SkillsItem>MongoDB</SkillsItem>
            <SkillsItem>PWA</SkillsItem>
            <SkillsItem>Typescript</SkillsItem>
          </SkillsList>
          <SkillsList name="Habilidades técnicas" icon={FaTools}>
            <SkillsItem>TDD</SkillsItem>
            <SkillsItem>Continuous Deployment</SkillsItem>
            <SkillsItem>SCRUM</SkillsItem>
          </SkillsList>
          <SkillsList name="Habilidades Blandas" icon={RiUserVoiceFill}>
            <SkillsItem>Comunicación efectiva</SkillsItem>
            <SkillsItem>Touch typing</SkillsItem>
            <SkillsItem>Trabajo en equipo</SkillsItem>
          </SkillsList>
          <SkillsList name="Intereses" icon={FaFlagCheckered}>
            <SkillsItem>Inteligencia artificial</SkillsItem>
            <SkillsItem>Patrones de UI / UX</SkillsItem>
            <SkillsItem>AR / VR</SkillsItem>
          </SkillsList>
          <SkillsList name="Idiomas" icon={BsChatFill}>
            <SkillsItem>Inglés</SkillsItem>
            <SkillsItem>Francés</SkillsItem>
            <SkillsItem>Español</SkillsItem>
          </SkillsList>
        </RightColumn>
      </Layout>
    </>
  );
}
