import { useLocation,Link } from "react-router-dom";
import { MovieData, TabKind } from "../type";
import {useState} from "react";
import ProfileImage from "../components/ProfileImage";
import Tab from "../components/Tab";
import TabPreview from "../components/TabPreview";
import styles from "./Preview.module.css";

const Preview = () => {
    const location = useLocation();
    const { id, name, thumbnail, comics, series, description, urls} = location.state.movie as MovieData;
  
    const [activeTab, setActiveTab] = useState<TabKind>("description");
  
    const handleTabChange = (tabName:TabKind) => {
      setActiveTab(tabName);
    };
    console.log(location.state.movie);
    return (
        <><div className={styles.container}>
            <div className={styles.Movie}>
              <ProfileImage name={name} thumbnail={thumbnail}/>
            </div>
            <div className={styles.info}>
              <ul className={styles.nav}>
                <Tab tabName="description" activeTab={activeTab} handleTabChange={handleTabChange} />
                <Tab tabName="comics" activeTab={activeTab} handleTabChange={handleTabChange} />
                <Tab tabName="series" activeTab={activeTab} handleTabChange={handleTabChange} />
                <Tab tabName="urls" activeTab={activeTab} handleTabChange={handleTabChange} />
              </ul>
              <div className={styles.table}>
                <TabPreview
                  activeTab={activeTab}
                  description={description}
                  comics={comics}
                  series={series}
                  urls={urls}
                />
              </div>
            </div>
          </div>
          <div className={styles.routeButton}>
            <Link to={`/character/${id}`} state={{thumbnail,name}}> Meet {name} </Link>
          </div>
        </>
      );
    };
  
  export default Preview;