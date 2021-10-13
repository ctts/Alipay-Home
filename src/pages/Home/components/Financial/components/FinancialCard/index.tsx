import InvertColorsCard from '@/common/components/InvertColorsCard';
import styles from './index.less';
import { Button } from 'antd';

export default function FinancialCard() {
  const leftContent = (
    <div className={styles.leftContent}>
      <div>月年化收益率参考</div>
      <div className={styles.number}>2.2440</div>
      <Button className={styles.mt10} type="primary">
        免费转入
      </Button>
    </div>
  );

  const rightOriginContent = (
    <ul>
      <li className={styles.iconWrapper}>
        <img
          className={styles.icon}
          src="https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*2cxzQaWlmGsAAAAAAAAAAAAAARQnAQ"
          alt="企业商家专享"
        />
        <div>企业商家专享</div>
      </li>
      <li className={styles.iconWrapper}>
        <img
          className={styles.icon}
          src="https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*E5kDS5ceMQIAAAAAAAAAAAAAARQnAQ"
          alt="随存随取"
        />
        <div>随存随取</div>
      </li>
    </ul>
  );

  const rightCoverContent = (
    <ul className={styles.verticalBar}>
      <li>· 网商银行代销，资金更安全</li>
      <li>· 无限额，大额实时转入转出</li>
      <li>· 低门槛，1分钱起购</li>
      <li>· 自动理财更省心</li>
    </ul>
  );

  const card = (
    <InvertColorsCard
      title="余利宝"
      style={{ width: '450px', height: '200px' }}
      leftContent={leftContent}
      rightOriginContent={rightOriginContent}
      rightCoverContent={rightCoverContent}
    ></InvertColorsCard>
  );

  return <div className={styles.container}>{card}</div>;
}
