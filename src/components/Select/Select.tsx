import React, { ChangeEvent } from 'react';

import style from './Select.module.scss';
import { SelectPropsType } from './types';

export const Select: React.FC<SelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  title,
  ...restProps
}) => {
  const mappedOptions = options
    ? options.map((o, i) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))
    : [];
  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (onChange) {
      onChange(e);
    }
    if (onChangeOption) {
      onChangeOption(e.currentTarget.value);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        {title}
        {'\u00A0'}
      </div>
      <select
        title={title}
        onChange={onChangeCallback}
        {...restProps}
        className={style.select}
      >
        {mappedOptions}
      </select>
    </div>
  );
};
