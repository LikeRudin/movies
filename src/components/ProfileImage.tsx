import styles from './ProfileImage.module.css';

interface ProfileImageProps {
    name: string;
    thumbnail: {
        path: string,
        extension: string
      }
}

const ProfileImage = ({ name, thumbnail}: ProfileImageProps) =>{
    const {path, extension} = thumbnail; 
    return (
        <div className={styles.container}   > 
            <div className={styles.imagebox}>
                <img src={`${path}.${extension}`}/>
                <h1>{name}</h1>
            </div>

        </div>
    )
};

export default ProfileImage;