import styles from './index.less';

export default function Switch(props: any) {
  return (
    <div className={styles.switchContainer}>
      <div
        onClick={() => props.onChange('trading')}
        className={
          props.switchState === 'trading'
            ? styles.switchPaneActive
            : styles.switchPane
        }
      >
        昨日交易
      </div>
      <div
        onClick={() => props.onChange('balancePayments')}
        className={
          props.switchState === 'balancePayments'
            ? styles.switchPaneActive
            : styles.switchPane
        }
      >
        昨日收支
      </div>
    </div>
  );
}
