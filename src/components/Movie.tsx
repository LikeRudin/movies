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
        <div className={styles.Movie}   > 
            <h3>{name}</h3>
            <div>
                <img src={`${path}.${extension}`}/>
            </div>
        </div>
    )
};

export default Movie;