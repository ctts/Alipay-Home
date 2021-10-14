import styles from './index.less';
import ECharts from '@/common/components/ECharts';
import Switch from './components/Switch';
import { Divider } from 'antd';

export default function dataBoard() {
  return (
    <div className={styles.dataBoard}>
      <div className={styles.boardHeader}>
        <Switch />
        更多交易
      </div>
      <div className={styles.content}>
        <div className={styles.leftPanel}>
          <div className={styles.clinchWrapper}>
            <div className={styles.clinchTitle}>成交金额（元）</div>
            <div className={styles.clinchDeal}>0.00</div>
          </div>
          <div className={styles.moneyList}>
            <div>
              <div>成交笔数（笔）</div>
              <div className={styles.moneyNumber}>0</div>
            </div>
            <div>
              <div>退款金额（元）</div>
              <div className={styles.moneyNumber}>0.00</div>
            </div>
            <div>
              <div>退款笔数（笔）</div>
              <div className={styles.moneyNumber}>0</div>
            </div>
          </div>
        </div>
        <ECharts style={{ width: '515px', height: '200px' }} />
      </div>
    </div>
  );
}
