import styles from './index.less';

export default function Card(props: any) {
  return <div className={styles.card}>{props.content}</div>;
}
