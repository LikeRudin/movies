import { TabKind } from "../type";
import { ItemsWithName } from "../type";
interface TabContentProps {
  activeTab: TabKind;
  description: string;
  comics: {
    items?: ItemsWithName[] | undefined;
  };
  series: {
    items?: ItemsWithName[] | undefined;
  };
}

const TabContent = ({ activeTab, description, comics, series }: TabContentProps) => {
    if (activeTab === "description") {
      return (
        <div>
          <h2>Description</h2>
          {description ? <p>{description}</p> : <p>some villain took description!</p>}
        </div>
      );
    } else if (activeTab === "comics") {
      return (
        <div>
          <h2>Comics</h2>
          <ul>
            {comics?.items?.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    } else if (activeTab === "series") {
      return (
        <div>
          <h2>Series</h2>
          <ul>
            {series?.items?.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

export default TabContent;