import style from './index.less';
import ECharts from '@/common/components/ECharts';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
export default function Navbar() {
  return (
    <div className={style.dataBoard}>
      {/* <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1" style={{ height: 200 }}>
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div> */}
      <ECharts />
    </div>
  );
}
