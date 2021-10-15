import style from './index.less';
import Card from '@/common/components/Card';
import CardHeader from '@/common/components/CardHeader';
import RecommendItem from './components/RecommendItem';
import { RecommendDataItem } from './ts-config';

export default function Recommend() {
  const data: RecommendDataItem[] = [
    {
      id: 1,
      url: 'https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*zafYSrNyju4AAAAAAAAAAAAAARQnAQ',
      title: '花呗分期',
      content: '先消费，后按月分期还款的服务，有效减轻资金压力',
    },
    {
      id: 2,
      url: 'https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*ZTYiSYzt2-YAAAAAAAAAAAAAARQnAQ',
      title: '商家分账',
      content: '灵活分配，高效分润',
    },
    {
      id: 3,
      url: 'https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*3jrbT6qfXCEAAAAAAAAAAAAAARQnAQ',
      title: '周期扣款',
      content: '周期内自动收款，省心省力，安全方便',
    },
    {
      id: 4,
      url: 'https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*GjNxRp2IlgwAAAAAAAAAAAAAARQnAQ',
      title: '芝麻GO',
      content: '芝麻信用x花呗，会员先享权益后付费',
    },
    {
      id: 5,
      url: 'https://gw.alipayobjects.com/mdn/rms_50301b/afts/img/A*XLoRRaSGwgEAAAAAAAAAAAAAARQnAQ',
      title: '刷脸付',
      content: '无需携带手机，凭借刷脸完成支付',
    },
  ];

  return (
    <div>
      <CardHeader left="为您推荐" right="查看更多" />
      <Card className={style.container}>
        {data.map((props: RecommendDataItem) => (
          <RecommendItem key={props.id} {...props} />
        ))}
      </Card>
    </div>
  );
}
