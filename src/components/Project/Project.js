import styles from './Project.module.css';
import config from '/config.json';

const Project = (props) => {
    const icons = config.technologies;
    
    return(
          
           <div className={styles.card} key={props.name}>
            {/* Project Info */}
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <br/>

            {/* Project Screenshot */}
            <div className={styles.imageContainer}>
                <img src={props.img} alt="" className={styles.image} />
            </div>

            {/* Used Technologies */}
            <p><b>Principais Tecnologias Usadas</b></p>

            <div className={styles.usedTechnologies}>
                {props.buildWith.map((technology) => {
                    return(
                        <img src={icons[technology].logo} alt={icons[technology].name} title={icons[technology].name} key={icons[technology].name} className='techIcon' /> 
                    )
                })}
            </div>

            <br/>
            {/* Code and Preview links */}
            {props.code ? (<a href={props.code}  key={props.code}> <button className={styles.btn}>Repositório</button></a>) : false}
            {props.url ? (<a href={props.url} key={props.name}> <button className={styles.btn}>Preview</button></a>) : false}

            </div> 
            

          
    )
}

export default Project;