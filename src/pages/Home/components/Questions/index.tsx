import { useEffect, useState } from 'react';
import styles from './index.less';

export default function Questions() {
  const [onTop, setOnTop] = useState(false);
  const [open, setOpen] = useState(true);

  const handleScroll = () => {
    const scrollTop =
      window.pageYOffset ||
      document.body.scrollTop ||
      document.documentElement.scrollTop ||
      0;

    scrollTop > 0 ? setOnTop(true) : setOnTop(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, true);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [onTop]);

  const backToTopHandle = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  return open ? (
    <div className={styles.questionContainer}>
      <span
        onClick={() => setOpen(false)}
        title="关闭"
        className={styles.close}
      >
        ×
      </span>
      <img
        className={styles.logo}
        src="https://gw.alipayobjects.com/mdn/pa_custser/afts/img/A*Dz0bSIh3_UvP-aBHs6jUCQBjARQnAQ"
      />
      <div className={styles.questionWrapper}>
        <div className={styles.title}>猜你想问：</div>
        <div className={styles.item}>服务费发票如何申请开具</div>
        <div className={styles.item}>商家交易记录在哪查询</div>
        <div className={styles.item}>企业支付宝账户如何转账到银行卡</div>
        <div className={styles.item}>如何下载对账单</div>
      </div>
      <div className={styles.operationWrapper}>
        <div className={styles.operation}>
          <img src="https://gw.alipayobjects.com/mdn/pa_custsrv/afts/img/A*ymBVTZxh_hAAAAAAAAAAAABjARQnAQ" />
          <span>我的客服</span>
        </div>
        <div className={styles.operation}>
          <img src="https://gw.alipayobjects.com/mdn/pa_custsrv/afts/img/A*DLG0TaTnvzEAAAAAAAAAAABjAQAAAQ/original" />
          <span>帮助中心</span>
        </div>
        {onTop && (
          <div onClick={backToTopHandle} className={styles.operation}>
            <img src="https://gw.alipayobjects.com/mdn/pa_custsrv/afts/img/A*1xbFQ7BDUIgAAAAAAAAAAABjAQAAAQ/original" />
            <span>回到顶部</span>
          </div>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
}
