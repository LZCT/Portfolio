import styles from './Project.module.css';
import config from '/config.json';

const Project = (props) => {
    const icons = config.technologies;
    

    return(
        
          <a href={props.url} className={styles.card} key={props.name}>
            
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <br/>

            <div className={styles.imageContainer}>
                <img src={props.img} alt="" className={styles.image} />
            </div>

            <p><b>Principais Tecnologias Usadas</b></p>

            <div className={styles.usedTechnologies}>
                {props.buildWith.map((technology) => {
                    return(
                        <img src={icons[technology].logo} alt={icons[technology].name} title={icons[technology].name}  className='techIcon' /> 
                    )
                })}
            </div>

          </a>
    )
}

export default Project;