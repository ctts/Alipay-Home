import InvertColorsCard from '@/common/components/InvertColorsCard';
import styles from './index.less';
import { Button } from 'antd';

export default function FinancialCard() {
  const leftOriginContent = () => (
    <div className={styles.leftContent}>
      <div>最高可借贷</div>
      <div className={styles.number}>150万</div>
      <Button className={styles.mt10}>查看我的额度</Button>
    </div>
  );
  const leftCoverContent = () => (
    <div className={styles.leftContent}>
      <div>最高可借贷</div>
      <div className={styles.number}>150万</div>
      <Button className={styles.mt10} type="primary">
        查看我的额度
      </Button>
    </div>
  );

  const rightOriginContent = () => (
    <ul>
      <li className={styles.iconWrapper}>
        <img
          className={styles.icon}
          src="https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*yeK0Qa2zg0IAAAAAAAAAAAAAARQnAQ"
          alt="企业商家专享"
        />
        <div>无抵押要求</div>
      </li>
      <li className={styles.iconWrapper}>
        <img
          className={styles.icon}
          src="https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*p0OtQ4qiGosAAAAAAAAAAAAAARQnAQ"
          alt="千元日利率仅0.3元"
        />
        <div>随存随取</div>
      </li>
    </ul>
  );

  const rightCoverContent = () => (
    <ul className={styles.verticalBar}>
      <li>· 资金周转不再难，千万用户正在用</li>
      <li>· 极速放款，按日计息</li>
      <li>· 随借随还，提前还款0手续费</li>
      <li>· 最高300万额度</li>
    </ul>
  );

  const card = (
    <InvertColorsCard
      style={{ width: '450px', height: '200px' }}
      title="网商贷"
      leftOriginContent={leftOriginContent}
      leftCoverContent={leftCoverContent}
      rightOriginContent={rightOriginContent}
      rightCoverContent={rightCoverContent}
    ></InvertColorsCard>
  );

  return <div className={styles.container}>{card}</div>;
}
