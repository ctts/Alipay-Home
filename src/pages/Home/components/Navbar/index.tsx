import styles from './index.less';
import { SoundOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';

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
  const menu = (
    <Menu className={styles.userMenu}>
      <Menu.Item>返回个人版</Menu.Item>
      <Menu.Item>切换账号</Menu.Item>
      <Menu.Item>退出登录</Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.navbar}>
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
      <div className={styles.userWrapper}>
        <SoundOutlined className={styles.userIcon} />
        <QuestionCircleOutlined className={styles.userIcon} />
        <Dropdown overlay={menu} placement="bottomCenter" arrow={false}>
          <div className={styles.info}>
            <img
              src="https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*KspsSIavJjgAAAAAAAAAAAAAARQnAQ"
              alt="logo"
              className={styles.avatar}
            ></img>
            <div className={styles.user}>
              <div className={styles.name}>陶家行</div>
              <div className={styles.account}>178******23 [主账号]</div>
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
