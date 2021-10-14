import styles from './index.less';
import classnames from 'classnames';

export default function Card(props: any) {
  return (
    <div {...props} className={classnames(styles.card, props.className)}>
      {props.children}
    </div>
  );
}
