import styles from './index.less';
import { Row, Col, Statistic, Popover, Button, Carousel } from 'antd';
import { useState } from 'react';
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

export default function Money() {
  let [showDetail, setShowDetail] = useState(false);
  function showStateChange() {
    setShowDetail(!showDetail);
  }
  const HideItem = <div className={styles.hideItem}>******</div>;
  const question = (
    <div className={styles.flex}>
      <div className={styles.moneyTitle}>不可用余额（元）</div>
      <Popover
        placement="top"
        content="不可用余额是指用户本人账户中暂时不能使用的那部分资金"
        trigger="hover"
      >
        <QuestionCircleOutlined className={styles.moneyTitle} />
      </Popover>
    </div>
  );
  return (
    <div>
      <div className={styles.money}>
        <div className={styles.flexBetween}>
          <div className={styles.title}>
            <div className={styles.myMoney}>我的余额</div>
            {showDetail ? (
              <EyeOutlined onClick={showStateChange} />
            ) : (
              <EyeInvisibleOutlined onClick={showStateChange} />
            )}
          </div>
          <div className={styles.rightArrow}>资金管理</div>
        </div>
        <div className={styles.divider}></div>
        <div>
          <Row gutter={16}>
            <Col span={8}>
              <div className={styles.moneyTitle}>账户可用余额（元）</div>
              {showDetail ? <Statistic value={112893} /> : HideItem}
            </Col>
            <Col span={7}></Col>
            <Col span={8}>
              {question}
              {showDetail ? <Statistic value={112893} /> : HideItem}
            </Col>
          </Row>
          <div className={styles.mt38}>
            <Button className={styles.mr6}>充值</Button>
            <Button className={styles.mr6}>转账</Button>
            <Button className={styles.mr6}>提现</Button>
            <Button>批量付款</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
