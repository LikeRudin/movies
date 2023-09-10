import { ContentBoxElements, DetailTabKind} from "../type";
import ContentBox from "./ContentBox";
import styles from "./ContentBoxList.module.css";

interface ContentBoxListProps {
  activeTab: DetailTabKind;
  details: ContentBoxElements;
}

const ContentBoxList = ({ activeTab, details }: ContentBoxListProps) => {
    const innerContents = details[activeTab];
    return (
        <><ul className={styles.container}>
            {innerContents.map(item => {
                const {title, description, thumbnail, urls} = item;
                return (
                <ContentBox title={title} description={description} thumbnail={thumbnail} urls={urls}/> 
                )
            })
            }
            </ul>
        </>
)};

export default ContentBoxList;