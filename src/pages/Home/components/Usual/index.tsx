import styles from './index.less';
import CardHeader from '@/common/components/CardHeader';
import Card from '@/common/components/Card';
import { Select, Divider, List, Carousel, Button } from 'antd';
import { CarouseItem, NoticeItem } from './ts-config';
const { Option } = Select;

export default function Usual() {
  const announcement: NoticeItem[] = [
    {
      content: '支付宝关于进一步降低小微商户支付手续费的实施细则',
      time: '08.01',
    },
    {
      content: '杭州公司主体不再提供增值税纸质普通发票的通知',
      time: '02.09',
    },
    {
      content: '春节期间暂停发票服务、2月发票延期寄送的通知',
      time: '02.09',
    },
    {
      content: '【重要】花呗分期服务转签通知',
      time: '01.21',
    },
    {
      content: '关于停止个人用户资金管家服务的通知',
      time: '01.19',
    },
  ];
  const todo: NoticeItem[] = [
    {
      content: '中国工商银行|尾号2116|金额：24.00元',
      time: '10.06',
    },
    {
      content: '中国工商银行|尾号2116|金额：13.00元',
      time: '10.06',
    },
    {
      content: '招商银行|尾号2201|金额：1860.00元',
      time: '09.28',
    },
    {
      content: '招商银行|尾号2201|金额：190.00元',
      time: '08.06',
    },
    {
      content: '中国工商银行|尾号2116|金额：0.67元',
      time: '07.09',
    },
  ];
  const carouselData: CarouseItem[] = [
    {
      url: 'https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*oqM0SZkIPQkAAAAAAAAAAAAAARQnAQ',
      title: '超级五六七',
      content: '活动火热招商中',
      button: '活动火热招商中',
    },
    {
      url: 'https://gw.alipayobjects.com/mdn/rms_fecc3a/afts/img/A*YFcdQarUt4UAAAAAAAAAAAAAARQnAQ',
      title: '批量付款免费开通中',
      content: 'excel一键导入3000笔</br>安全校验 秒到账 免手续费',
      button: '免费开通',
    },
    {
      url: 'https://img.alicdn.com/imgextra/i3/O1CN01CfbjKO1ufooC8Ak3u_!!6000000006065-2-tps-890-340.png',
      title: '亲，麻烦来填个问卷',
      content: '说说您的使用感受 </br> 便于支付宝更好地为您服务',
      button: '立即吐槽',
    },
  ];

  const options = [
    {
      value: '资金总览',
    },
    {
      value: '批量付款',
    },
    {
      value: '自动调拨',
    },
    {
      value: '充值',
    },
    {
      value: '转账',
    },
  ];

  return (
    <div className={styles.usualContainer}>
      <Card>
        <CardHeader left="常用功能" right="管理" />
        <Select className={styles.select} placeholder="请输入功能名称查找">
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.value}
            </Option>
          ))}
        </Select>
        <Divider dashed />
        <CardHeader left="平台公告" right="更多公告" />
        <List className={styles.usualList} split={false}>
          {todo.map((val: NoticeItem, index) => (
            <List.Item key={index}>
              <div className={styles.usualItem}>{val.content}</div>
              <div>{val.time}</div>
            </List.Item>
          ))}
        </List>
        <div className={styles.mt20}>
          <CardHeader left="待办通知" right="更多待办" />
        </div>
        <List className={styles.usualList} split={false}>
          {announcement.map((val: NoticeItem, index) => (
            <List.Item key={index}>
              <div className={styles.usualItem}>{val.content}</div>
              <div>{val.time}</div>
            </List.Item>
          ))}
        </List>
        <div className={styles.carouselWrapper}>
          <Carousel autoplay>
            {carouselData.map((data: CarouseItem, index) => (
              <div key={index}>
                <div
                  style={{
                    backgroundImage: `url(${data.url})`,
                  }}
                  className={styles.carouselItem}
                >
                  <p className={styles.title}>{data.title}</p>
                  <p
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  ></p>
                  <Button shape="round">{data.button}</Button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Card>
    </div>
  );
}
