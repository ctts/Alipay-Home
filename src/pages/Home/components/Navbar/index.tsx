import styles from './index.less';
import { SoundOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { NavListItem, UserData } from './ts-config';

const navList: NavListItem[] = [
  { name: '首页', href: '/' },
  { name: '资金管理', href: '/' },
  { name: '对账中心', href: '/' },
  { name: '产品中心', href: '/' },
  { name: '运营中心', href: '/' },
  { name: '数据中心', href: '/' },
  { name: '账号中心', href: '/' },
];

const userData: UserData = {
  avatar:
    'https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*xx7OR4Uc9HsAAAAAAAAAAAAAARQnAQ',
  username: '陶家行',
  account: '17853558923',
  isMain: true,
};

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
        <img className={styles.logo} src={userData.avatar} alt="支付宝" />
        <div className={styles.brand}>商家中心</div>
      </div>
      <nav className={styles.navs}>
        {navList.map((nav: NavListItem) => (
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
              alt="avatar"
              className={styles.avatar}
            ></img>
            <div className={styles.user}>
              <div className={styles.name}>{userData.username}</div>
              <div className={styles.account}>
                {userData.account}
                {userData.isMain && <span>[主账号]</span>}
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
