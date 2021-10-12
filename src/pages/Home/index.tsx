import styles from './index.less';
import Navbar from './components/Navbar';
import Footer from './components/Foot';
import Money from './components/Money';
import DataBoard from './components/DataBoard';
import { Layout } from 'antd';

const { Sider, Content } = Layout;

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <div>
        <Navbar />
        <div className={styles.main}>
          <div>
            <DataBoard />
          </div>
          <div className={styles.rightPanel}>
            <Money />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
