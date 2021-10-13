import styles from './index.less';
import Card from '@/common/components/Card';
import { useState } from 'react';
import { isFunction } from '@/common/utils';

export default function InvertColorsCard(props: any) {
  const [hover, setHover] = useState(false);
  function handleMouseEnter() {
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }

  const card = (
    <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h4>{props.title}</h4>
      <div>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            {isFunction(props.leftContent)
              ? props.leftContent()
              : props.leftContent}
          </div>
          <div>
            {isFunction(props.rightOriginContent)
              ? props.rightOriginContent()
              : props.rightOriginContent}
          </div>
        </div>
      </div>
    </Card>
  );

  const shadowCard = (
    <Card
      className={styles.shadowCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ opacity: hover ? 1 : 0 }}
    >
      <h4 className={styles.white}>{props.title}</h4>
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          {isFunction(props.leftContent)
            ? props.leftContent()
            : props.leftContent}
        </div>
        <div>
          {isFunction(props.rightCoverContent)
            ? props.rightCoverContent()
            : props.rightCoverContent}
        </div>
      </div>
    </Card>
  );

  return (
    <div {...props} className={styles.container}>
      {card}
      {shadowCard}
    </div>
  );
}
