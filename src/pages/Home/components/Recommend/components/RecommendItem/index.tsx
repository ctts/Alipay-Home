import { RecommendDataItem } from '../../ts-config';
import styles from './index.less';

export default function RecommendItem(props: RecommendDataItem) {
  return (
    <div className={styles.container}>
      <img className={styles.iconLogo} src={props.url}></img>
      <h4>{props.title}</h4>
      <h5>{props.content}</h5>
    </div>
  );
}
