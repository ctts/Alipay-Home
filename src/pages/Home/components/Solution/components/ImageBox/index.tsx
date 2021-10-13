import styles from './index.less';

export default function ImageBox(props: any) {
  return (
    <div
      className={styles.boxContainer}
      style={{
        backgroundImage: `url(${props.background})`,
        color: props.color,
      }}
    >
      <div className={styles.textContent}>
        <div className={styles.title}>{props.title}</div>
        <div>{props.content}</div>
      </div>
    </div>
  );
}
