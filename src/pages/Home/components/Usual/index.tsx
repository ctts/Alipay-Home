import styles from './index.less';
import CardHeader from '@/common/components/CardHeader';
import Card from '@/common/components/Card';
import { Select, Divider, List } from 'antd';
const { Option } = Select;

export default function IndexPage() {
  const announcement = [
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
  const todo = [
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
  return (
    <div className={styles.mt20}>
      <Card
        content={
          <>
            <CardHeader left="常用功能" right="管理" />
            <Select className={styles.select} placeholder="请输入功能名称查找">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Divider dashed />
            <CardHeader left="平台公告" right="更多公告" />
            <List split={false}>
              {todo.map((val, index) => (
                <List.Item key={index}>
                  <div>{val.content}</div>
                  <div>{val.time}</div>
                </List.Item>
              ))}
            </List>
            <div className={styles.mt20}>
              <CardHeader left="待办通知" right="更多待办" />
            </div>
            <List split={false}>
              {announcement.map((val, index) => (
                <List.Item key={index}>
                  <div>{val.content}</div>
                  <div>{val.time}</div>
                </List.Item>
              ))}
            </List>
          </>
        }
      ></Card>
    </div>
  );
}
