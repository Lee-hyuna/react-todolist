import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
console.log('style ===', cx);

/**
 * 페이지 템플릿을 위한 컴포넌트 (컴포넌트 틀)
 * 그리고 타이틀, 콘텐츠 등 속성이 설정되어있음
 */
const PageTemplate = ({children}) => {
  return (
    <div className={cx('page-template')}>
      <h1>일정관리</h1>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  )
}

export default PageTemplate