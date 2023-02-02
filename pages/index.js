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
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Menu Icon */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>

        <link href="https://fonts.googleapis.com/css2?family=Sassy+Frass&display=swap" rel="stylesheet"/>
        
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap" rel="stylesheet"/>

      </Head>

      <Menu/>

      <main className={styles.main}>

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
                    <a href="https://github.com/LZCT"><img src="/github.svg" className={styles.techIcon}/></a>
                  </div>
                </div>
                <div className={styles.flipBox}>
                  <div className={styles.flipBoxElement}>
                    <a href="https://www.linkedin.com/in/leocastabelli/"><img src="/linkedin.svg" className={styles.techIcon}/></a>
                  </div>
                </div>
              </div>

            </div>

            <Arrow scrollTo={"#technologies"}/>
          </div>
          
        </div>
        
        
        
        <div className={styles.technologies} id="technologies">
          <div>
            <div>
              <p className={styles.title}>Resumé</p>
              <p></p>
            </div>
            

                {technologies.map((technology) => {
                  const tech = config.technologies[technology];
                  return(
                      <img src={tech.logo} alt={tech.name} title={tech.name}  className={styles.techIcon} /> 
                  )
                })}
          </div>
        </div>        

        

        <div className={styles.grid} id="projects">
          <p className={styles.title}>
            Projetos
          </p>
          {config.projects.map((project) => {
            return(
              <Project img={project.thumb} name={project.name} desc={project.desc} buildWith={project.buildWith} url={project.url}/>
            )
          })}
        </div>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/LZCT/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span className={styles.logo}>
            <Image src="/LZCT.png" alt="LZCT Logo" width={40} height={40} />
          </span>
        </a>
      </footer>
    </>
  )
}
