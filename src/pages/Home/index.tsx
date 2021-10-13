import styles from './index.less';
import Navbar from './components/Navbar';
import Footer from './components/Foot';
import Money from './components/Money';
import DataBoard from './components/DataBoard';
import Usual from './components/Usual';

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
            <Usual />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
