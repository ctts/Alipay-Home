import styles from './index.less';

export default function ImageBox(props: any) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: props.background }}
    >
      <div className={styles.textContent}>
        <div>{props.title}</div>
        <div>{props.content}</div>
      </div>
    </div>
  );
}
