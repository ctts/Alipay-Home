import styles from './index.less';
import Navbar from './components/Navbar';
import Footer from './components/Foot';
import Money from './components/Money';
import DataBoard from './components/DataBoard';
import Financial from './components/Financial';
import Solution from './components/Solution';
import Recommend from './components/Recommend';
import Usual from './components/Usual';
import Questions from './components/Questions';

export default function Home() {
  return (
    <div className={styles.container}>
      <Questions />
      <div>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.leftPanel}>
            <DataBoard />
            <Financial />
            <Solution />
            <Recommend />
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
