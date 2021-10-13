import styles from './index.less';

export default function CardHeader(props: any) {
  return (
    <div className={styles.cardHeader}>
      <div className={styles.title}>{props.left}</div>
      <div className={styles.rightArrow}>{props.right}</div>
    </div>
  );
}
