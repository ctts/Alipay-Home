import ImageBox from './components/ImageBox';

export default function solution() {
  const obj = {
    background:
      'https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*KWwrSbrCJKIAAAAAAAAAAAAAARQnAQ',
    title: '数字商超',
    content: '帮助商家持续精细化运营',
  };
  return (
    <>
      <div>行业解决方案</div>
      <ImageBox {...obj} />
    </>
  );
}
