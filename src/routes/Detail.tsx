import { useEffect, useState } from "react";
import { getDetails } from "../apis/getDetails";
import { useParams, useLocation, Link} from "react-router-dom";
import { DetailElements, DetailTabKind, TabKind} from "../type";
import Tab from "../components/Tab";
import TabDetail from "../components/TabDetail";
import LoadingDetail from "../components/LoadingDetail";
import styles from "./Detail.module.css";
import Movie from "../components/Movie";
const Detail = () => {
    const { state:{ thumbnail, name} } = useLocation();
    const {characterId } = useParams();
    const [details, setDetails] = useState({} as DetailElements);
    const [activeTab, setActiveTab] = useState<DetailTabKind>("comics");

    const [isLoading, setIsLoading] = useState(true);
    const handleTabChange = (tabName:DetailTabKind | TabKind) => {
        setActiveTab(tabName as DetailTabKind);
      };
  

    useEffect(() => {
        (async() => {
            
            const characterData = await getDetails(characterId  as string);
            setDetails(characterData);
            setIsLoading(false);
            console.log(characterData);
        })();
    },[characterId ]);
    
    return(<>
        <div className={styles.screen}>
            {isLoading? (
            <LoadingDetail thumbnail={thumbnail} name={name}/>
            )
            :(<div className={styles.container}>
                <div className={styles.left}>
                                    <Link to={`/`} className={styles.homeButton}>
                        Back to Home
                    </Link>
                    <div className={styles.Movie}>
                        <Movie thumbnail={thumbnail} name={name}/>
                    </div>
                </div>
                <div className={styles.info}>
                    <ul className={styles.nav}>
                        <Tab tabName="comics" activeTab={activeTab} handleTabChange={handleTabChange} />
                        <Tab tabName="series" activeTab={activeTab} handleTabChange={handleTabChange} />
                        <Tab tabName="events" activeTab={activeTab} handleTabChange={handleTabChange} />
                    </ul>
                    <div className={styles.table}>
                        <TabDetail
                            activeTab={activeTab as DetailTabKind}
                            details={details}
                        />
                    </div>
                </div>
           </div>
           )
           }
        </div>
        </>
    )
}

export default Detail;