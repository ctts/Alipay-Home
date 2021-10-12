import styles from './index.less';
import { SoundOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Header } = Layout;

const navList = [
  { name: '首页', href: '/' },
  { name: '资金管理', href: '/' },
  { name: '对账中心', href: '/' },
  { name: '产品中心', href: '/' },
  { name: '运营中心', href: '/' },
  { name: '数据中心', href: '/' },
  { name: '账号中心', href: '/' },
];

export default function Navbar() {
  return (
    <Header className={styles.navbar}>
      <div>
        <img
          className={styles.logo}
          src="https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*xx7OR4Uc9HsAAAAAAAAAAAAAARQnAQ"
          alt="支付宝"
        />
        <div className={styles.brand}>商家中心</div>
      </div>
      <nav className={styles.navs}>
        {navList.map((nav) => (
          <a className={styles.navItem} key={nav.name} href={nav.href}>
            {nav.name}
          </a>
        ))}
      </nav>
      <div className={styles.user}>
        <SoundOutlined />
        <QuestionCircleOutlined />
      </div>
    </Header>
  );
}
