import styles from './index.less';
import Navbar from './components/Navbar'

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Navbar/>
    </div>
  );
}
