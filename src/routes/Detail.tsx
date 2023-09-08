import { useLocation } from "react-router-dom";
import { MovieData } from "../type";
import {useState} from "react";
import Movie from "../components/Movie";
import Tab from "../components/Tab";
import TabContent from "../components/TabContent";
import { TabKind } from "../type";

const Detail = () => {
    const location = useLocation();
    const { name, thumbnail, comics, series, description } = location.state.movie as MovieData;
  
    const [activeTab, setActiveTab] = useState<TabKind>("description");
  
    const handleTabChange = (tabName:TabKind) => {
      setActiveTab(tabName);
    };
    return (
        <>
          <Movie name={name} thumbnail={thumbnail}/>
          <div>
            <ul>
              <Tab tabName="description" activeTab={activeTab} handleTabChange={handleTabChange} />
              <Tab tabName="comics" activeTab={activeTab} handleTabChange={handleTabChange} />
              <Tab tabName="series" activeTab={activeTab} handleTabChange={handleTabChange} />
            </ul>
            <TabContent
              activeTab={activeTab}
              description={description}
              comics={comics}
              series={series}
            />
          </div>
        </>
      );
    };
  
  export default Detail;