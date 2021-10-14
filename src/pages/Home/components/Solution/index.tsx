import ImageBox from './components/ImageBox';
import styles from './index.less';

export default function solution() {
  const arr = [
    {
      id: 1,
      background:
        'https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*KWwrSbrCJKIAAAAAAAAAAAAAARQnAQ',
      title: '数字商超',
      content: '帮助商家持续精细化运营',
      color: '#333',
    },
    {
      id: 2,
      background:
        'https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*hQUxQKMeOrYAAAAAAAAAAAAAARQnAQ',
      title: '连锁便利',
      content: '解锁连锁便利场景解决方案',
      color: '#fff',
    },
    {
      id: 3,
      background:
        'https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*ZukiQr3CIY4AAAAAAAAAAAAAARQnAQ',
      title: '数字餐厅',
      content: '助力商家提高门店效率',
      color: '#fff',
    },
  ];
  return (
    <>
      <h3>行业解决方案</h3>
      <div className={styles.imageBoxWrapper}>
        {arr.map((obj) => (
          <ImageBox key={obj.id} {...obj} />
        ))}
      </div>
    </>
  );
}
