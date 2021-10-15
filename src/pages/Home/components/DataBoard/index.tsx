import styles from './index.less';
import ECharts from '@/pages/Home/components/DataBoard/components/ECharts';
import Switch from './components/Switch';
import { useState } from 'react';
import {
  BalancePaymentData,
  ClinchData,
  DataBoardItem,
  SwitchCase,
} from './ts-config';

const tradingData: DataBoardItem = {
  x: ['09.14', '09.15', '09.16', '09.17', '09.18', '09.19', '09.20'],
  y: [
    {
      data: [123, 232, 401, 934, 673, 243, 111],
      name: '成交金额',
    },
    {
      data: [820, 562, 601, 854, 129, 43, 323],
      name: '成交笔数',
    },
    {
      data: [234, 932, 323, 754, 190, 345, 530],
      name: '退款金额',
    },
  ],
};

const balancePaymentsData: DataBoardItem = {
  x: ['09.14', '09.15', '09.16', '09.17', '09.18', '09.19', '09.20'],
  y: [
    {
      data: [123, 232, 401, 934, 673, 243, 111],
      name: '收入金额',
    },
    {
      data: [820, 562, 601, 854, 129, 43, 323],
      name: '支出笔数',
    },
  ],
};

const clinchData: ClinchData = {
  deal: '0.00',
  tickCount: 0,
  refund: '0.00',
};

const balancePaymentData: BalancePaymentData = {
  balance: '0.00',
  payment: '0.00',
};

export default function dataBoard() {
  const [switchState, setSwitchState] = useState(SwitchCase.Trading);

  function handleChange(state: SwitchCase) {
    setSwitchState(state);
  }

  const trading = (
    <>
      <div className={styles.clinchWrapper}>
        <div className={styles.clinchTitle}>成交金额（元）</div>
        <div className={styles.clinchDeal}>{clinchData.deal}</div>
      </div>
      <div className={styles.moneyList}>
        <div>
          <div>成交笔数（笔）</div>
          <div className={styles.moneyNumber}>{clinchData.deal}</div>
        </div>
        <div>
          <div>退款金额（元）</div>
          <div className={styles.moneyNumber}>{clinchData.refund}</div>
        </div>
        <div>
          <div>退款笔数（笔）</div>
          <div className={styles.moneyNumber}>{clinchData.tickCount}</div>
        </div>
      </div>
    </>
  );

  const balancePayments = (
    <>
      <div className={styles.clinchWrapper}>
        <div className={styles.clinchTitle}>收入（元）</div>
        <div className={styles.clinchDeal}>{balancePaymentData.balance}</div>
      </div>
      <div className={styles.moneyList}>
        <div>
          <div>支出（元）</div>
          <div className={styles.moneyNumber}>{balancePaymentData.payment}</div>
        </div>
      </div>
    </>
  );

  const echartsInstants = (
    <ECharts
      data={switchState === 'trading' ? tradingData : balancePaymentsData}
      style={{ width: '515px', height: '200px', zIndex: '100' }}
    />
  );

  return (
    <div className={styles.dataBoard}>
      <div className={styles.boardHeader}>
        <Switch onChange={handleChange} switchState={switchState} />
        <div className={styles.more}>更多交易</div>
      </div>
      <div className={styles.content}>
        <div className={styles.leftPanel}>
          {switchState === 'trading' && trading}
          {switchState === 'balancePayments' && balancePayments}
        </div>
        {echartsInstants}
      </div>
    </div>
  );
}
