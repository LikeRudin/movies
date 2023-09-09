import { DetailElements, DetailTabKind} from "../type";
import DetailBox from "./DetailBox";
import styles from "./TabDetail.module.css";

interface TabDetailProps {
  activeTab: DetailTabKind;
  details: DetailElements;
}

const TabDetail = ({ activeTab, details }: TabDetailProps) => {
    const innerContents = details[activeTab];
    return (
        <><ul className={styles.container}>
        {innerContents.map(item => {
            const {title, description, thumbnail, urls} = item;
            return (
                <DetailBox title={title} description={description} thumbnail={thumbnail} urls={urls}/> 
                )
            })
            }
            </ul>
        </>
)};

export default TabDetail;