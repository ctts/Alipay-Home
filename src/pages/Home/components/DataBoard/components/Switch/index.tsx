import { SwitchCase, SwitchProp } from '../../ts-config';
import styles from './index.less';

export default function Switch(props: SwitchProp) {
  return (
    <div className={styles.switchContainer}>
      <div
        onClick={() => props.onChange('trading')}
        className={
          props.switchState === SwitchCase.Trading
            ? styles.switchPaneActive
            : styles.switchPane
        }
      >
        昨日交易
      </div>
      <div
        onClick={() => props.onChange('balancePayments')}
        className={
          props.switchState === SwitchCase.BalancePayments
            ? styles.switchPaneActive
            : styles.switchPane
        }
      >
        昨日收支
      </div>
    </div>
  );
}
