import { TabKind, ItemsWithName, UrlElement } from "../type";
import Styles from "./PreviewContent.module.css";

interface PreviewContentProps {
  activeTab: TabKind;
  description: string;
  comics: {
    items?: ItemsWithName[] | undefined;
  };
  series: {
    items?: ItemsWithName[] | undefined;
  };
  urls: UrlElement[];
  
}

const PreviewContent = ({ activeTab, description, comics, series, urls }: PreviewContentProps) => {
    if (activeTab === "description") {
      return (
        <div className={Styles.container}>
          {description ? <p>{description}</p> : <p>some villain took description!</p>}
        </div>
      );
    } else if (activeTab === "comics") {
      return (
        <div className={Styles.container}>
          <ul>
            {comics?.items?.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    } else if (activeTab === "series") {
      return (
        <div className={Styles.container}>
          <ul>
            {series?.items?.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    } else if (activeTab === "urls") {
      return (<div className={Styles.container}>
        <ul className={Styles.linkList}>
          {urls?.map((item, index) => {
            const {type, url} = item; 
            return (<li key={index}>
                      <div className={Styles.outerLink}>
                        <a href={url} target="_blank">{type}</a>
                      </div>
                    </li>)
                  })
          }
        </ul>
      </div>)
    }
  };

export default PreviewContent;