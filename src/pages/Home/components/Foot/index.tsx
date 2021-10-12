import styles from './index.less';

import { Layout } from 'antd';

const { Footer } = Layout;

export default function Foot() {
  return (
    <Footer className={styles.footer}>
      经营许可证编号：合字B2-20190046 网站备案：沪ICP备 15027489号
    </Footer>
  );
}
