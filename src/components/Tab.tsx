import { TabKind } from "../type";

interface TabProps {
    tabName: TabKind;
    activeTab: TabKind;
    handleTabChange: (tabName: TabKind) => void;
}

const Tab = ({ tabName, activeTab, handleTabChange }: TabProps) => {
    return (
      <li
        className={activeTab === tabName ? "active" : ""}
        onClick={() => handleTabChange(tabName)}
      >
        {tabName}
      </li>
    );
  };

export default Tab;