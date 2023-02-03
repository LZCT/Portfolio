import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Project from '../src/components/Project/Project';
import Arrow from '../src/components/Arrow/Arrow';
import Menu from '../src/components/Menu/Menu'
import config from '../config.json';

export default function Home() {
  const technologies = Object.keys(config.technologies);


  return (
    <>
      <Head>
        <title>Portfolio | Leonardo Castabelli</title>
      </Head>

      <Menu />

      <main className={styles.main}>

        {/*---------------------------------- Intro ----------------------------------*/}
        <div className={styles.intro} id="home">

          <div>
            <div className={styles.flipBox}>
              <div className={styles.flipBoxElement}>
                <img className={styles.profileImage} src={`https://github.com/${config.github}.png`} />
              </div>
            </div>

            <div className={styles.profileName}>
              <h1>Leonardo Castabelli</h1>

              <div className={styles.social}>
                <div className={styles.flipBox}>
                  <div className={styles.flipBoxElement}>
                    <a href="https://github.com/LZCT"><img src="/github.svg" className={styles.techIcon} /></a>
                  </div>
                </div>
                <div className={styles.flipBox}>
                  <div className={styles.flipBoxElement}>
                    <a href="https://www.linkedin.com/in/leocastabelli/"><img src="/linkedin.svg" className={styles.techIcon} /></a>
                  </div>
                </div>
              </div>

            </div>

            <Arrow scrollTo={"#technologies"} />
          </div>

        </div>


        {/*---------------------------------- About Me ----------------------------------*/}
        <div className={styles.technologies} id="technologies">
          <div>
            <p className={styles.title}>Sobre Mim</p>

            <div className={styles.profile}>



              <div className={styles.profileElement}>
                <h2>Prazer, Leonardo Castabelli!</h2>
                <p>
                  Apaixonado por tecnologia, desde pequeno sempre tive curiosidade de entender como as coisas funcionavam e é essa curiosidade que até hoje me motiva no estudo das diversas área do desenvolvimento de software.
                </p>
                <p>
                No meu tempo livre, gosto de conhecer novos lugares e assistir à todos os tipos de esportes, mas meu carinho maior é pelo futebol.
                </p>
                <p>
                No restante desse site, você pode conferir alguns dos meus trabalhos e as tecnologias que eu normalmente uso. 
                Se você acha que devemos criar algo juntos, sinta-se à vontade para entrar em contato comigo através do meu <a href="https://www.linkedin.com/in/leocastabelli/">LinkedIn</a>!
                </p>

                <h2>Conhecimentos</h2>
                {technologies.map((technology) => {
                  const tech = config.technologies[technology];
                  return (
                    <img src={tech.logo} alt={tech.name} title={tech.name} className={styles.techIcon} key={tech.name} />
                  )
                })}
              </div>

            </div>
          </div>
        </div>


        {/*---------------------------------- Projects ----------------------------------*/}

        <div className={styles.grid} id="projects">
          <p className={styles.title}>
            Projetos
          </p>
          {config.projects.map((project) => {
            return (
              <Project img={project.thumb} name={project.name} desc={project.desc} buildWith={project.buildWith} url={project.url} code={project.code} key={project.code} />
            )
          })}
        </div>


      </main>
      {/*---------------------------------- Footer ----------------------------------*/}
      <footer className={styles.footer}>
        <a href="https://github.com/LZCT/" target="_blank">
          <Image src="/LZCT_White.png" alt="LZCT Logo" width={40} height={40} />
        </a>
      </footer>
    </>
  )
}
