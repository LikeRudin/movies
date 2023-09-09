import styles from './ProfileImage.module.css';

interface ProfileImageProps {
    name: string;
    thumbnail: {
        path: string,
        extension: string
      }
}

const ProfileImage = ({ name, thumbnail}: ProfileImageProps) =>{
    
    return (
        <div className={styles.container}   > 
            <div className={styles.imagebox}>
                {thumbnail? <img src={`${thumbnail.path}.${thumbnail.extension}`}/>: null}
                <h1>{name}</h1>
            </div>
        </div>
    )
};

export default ProfileImage;