import styles from './index.less';
import Card from '@/common/components/Card';
import { useState } from 'react';
import { isFunction } from '@/common/utils';
import classNames from 'classnames';

export default function InvertColorsCard(props: any) {
  const {
    leftOriginContent,
    leftCoverContent,
    rightOriginContent,
    rightCoverContent,
    className,
    ...restProps
  } = props;
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
            {isFunction(leftOriginContent)
              ? leftOriginContent()
              : leftOriginContent}
          </div>
          <div>
            {isFunction(rightOriginContent)
              ? rightOriginContent()
              : rightOriginContent}
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
      style={{
        opacity: hover ? 1 : 0,
        background: props.background || undefined,
      }}
    >
      <h4 className={styles.white}>{props.title}</h4>
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          {isFunction(leftCoverContent) ? leftCoverContent() : leftCoverContent}
        </div>
        <div>
          {isFunction(rightCoverContent)
            ? rightCoverContent()
            : rightCoverContent}
        </div>
      </div>
    </Card>
  );

  return (
    <div {...restProps} className={classNames(styles.container, className)}>
      {card}
      {shadowCard}
    </div>
  );
}
