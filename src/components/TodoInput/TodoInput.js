import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * Input과 버튼이 함께 있는 컴포넌트
 * value: input value
 * onChange: input change event
 * onInsert: Add button click event
 */
const TodoInput = ({value, onChange, onInsert}) => {

  // 엔터를 누르면 onInsert실행
  const handleKetPress = (e) => {
    if(e.key === 'Enter') {
      onInsert()
    }
  }

  return (
    <div className={cx('todo-input')}>
      <input onChange={onChange} value={value} onKeyPress={handleKetPress} />
      <div className={cx('add-button')} onclick={onInsert}>추가</div>
    </div>
  )
}

export default TodoInput