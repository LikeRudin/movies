import styles from './Movie.module.css';

interface MovieProps {
    name: string;
    thumbnail: {
        path: string,
        extension: string
      }
}

const Movie = ({ name, thumbnail}: MovieProps) =>{
    const {path, extension} = thumbnail; 
    return (
        <div className={styles.container}   > 
            <div className={styles.imagebox}>
                <img src={`${path}.${extension}`}/>
            </div>
            <h1>{name}</h1>
        </div>
    )
};

export default Movie;