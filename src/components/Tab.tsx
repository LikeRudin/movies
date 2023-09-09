import { DetailTabKind, TabKind } from "../type";
import Styles from "./Tab.module.css";

type AllTabKinds = TabKind | DetailTabKind;
interface TabProps {
    tabName: AllTabKinds;
    activeTab: AllTabKinds;
    handleTabChange: (tabName: TabKind | DetailTabKind) => void;
}

const Tab = ({ tabName, activeTab, handleTabChange }: TabProps) => {
    return (
      <li
        className={activeTab === tabName ? "active" : ""}
        onClick={() => handleTabChange(tabName)}
      >
        <div className={activeTab === tabName ? Styles.active: Styles.inactive}>{tabName}</div>
      </li>
    );
  };

export default Tab;