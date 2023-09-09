import { DetailElement } from "../type";
import styles from "./ContentBox.module.css";
 

const ContentBox = ({title, urls, description, thumbnail}: DetailElement) => {

    return (<>
        <div className={styles.container}>
            <div className={styles.imageBox}>
                <img src={`${thumbnail?.path}.${thumbnail?.extension}`}/>
            </div>
            <div className={styles.descriptionBox}>
                <div className={styles.description}>
                <div className={styles.title}> {`${title}`}</div>
                <br/>
                    <h3>Description</h3>
                        <br/>
                    {description?
                    (`${description}`) :
                    ("some villain took description !")
                    }       
                </div>
            </div>
            <div className={styles.urlBox}>
                <h3>Portals to contact</h3>
                <br />
                {urls? (
                <ul> {urls.map(item=> {
                    const {type, url} = item;
                    return (<li>
                                <div className={styles.linkList}>
                                    <a href={`${url}`} target="_blank">{`${type}`}</a>
                                </div>
                            </li>)
                    })
                    }
                </ul>)
                : (<p>This must be remained as a secret.</p>)
                }
            </div>
        </div>
        </>
        )

}

export default ContentBox;