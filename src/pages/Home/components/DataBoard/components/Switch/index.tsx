import { useState } from 'react';
import styles from './index.less';

export default function Switch() {
  const [active, setActive] = useState(0);
  function handleChange(state: number) {
    console.log(state);
    setActive(state);
  }
  return (
    <div className={styles.switchContainer}>
      <div
        onClick={() => handleChange(0)}
        className={active === 0 ? styles.switchPaneActive : styles.switchPane}
      >
        昨日交易
      </div>
      <div
        onClick={() => handleChange(1)}
        className={active === 1 ? styles.switchPaneActive : styles.switchPane}
      >
        昨日收支
      </div>
    </div>
  );
}
