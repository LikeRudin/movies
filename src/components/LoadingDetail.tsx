import styles from "./LoadingDetail.module.css";

interface LoadingDetailProps{
    thumbnail: {
        extension: string;
        path: string;
    };
    name:string; 
}

const LoadingDetail = ({thumbnail, name}: LoadingDetailProps) => {
    return (
    <div className={styles.container}>
        <img src={`${thumbnail?.path}.${thumbnail?.extension}`} /> 
        <h1> Go to meet {`${name}`}</h1>
    </div>
    )
}

export default LoadingDetail