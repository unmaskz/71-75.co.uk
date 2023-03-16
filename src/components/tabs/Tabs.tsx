import { Tab, Tabs as ReactTabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Props } from './Tabs.interface';
import styles from './Tabs.module.scss';

interface Tab {
    slug: string;
    name: string;
}

const Tabs = ({ tabs, children }: Props): JSX.Element => {
    return (
        <div className={styles.tabs}>
            <ReactTabs className={styles.tabs__tabs} selectedTabClassName={styles.tabs__tab___selected}>
                <TabList className={`react-tabs__tab-list ${styles.tabs__list}`}>
                    {tabs.map(({ slug, name }: Tab) => (
                        <Tab key={slug} className={`react-tabs__tab ${styles.tabs__tab}`}>
                            {name}
                        </Tab>
                    ))}
                </TabList>
                {children}
            </ReactTabs>
        </div>
    );
};

export default Tabs;
