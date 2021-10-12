import styles from './Navbar.less';
import {
  SoundOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';

export default function IndexPage() {
  return (
    <div className={styles.navbar}>
      <img
        className={styles.logo}
        src="https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*xx7OR4Uc9HsAAAAAAAAAAAAAARQnAQ"
        alt="支付宝"
      />
      <div className={styles.brand}>商家中心</div>
      <nav>
        <a href="/">首页</a>
        <a href="/">资金管理</a>
        <a href="/">对账中心</a>
        <a href="/">产品中心</a>
        <a href="/">运营中心</a>
        <a href="/">数据中心</a>
        <a href="/">账号中心</a>
      </nav>
      <div>
        <SoundOutlined />
        <QuestionCircleOutlined />
      </div>
    </div>
  );
}
