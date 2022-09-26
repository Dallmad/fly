import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: number[];
  onChangeOption?: (option: string) => void;
};

export const Select: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions = options
    ? options.map((o, i) => (
        <option key={`${o}`} value={o}>
          {o}
        </option>
      ))
    : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>): any => {
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(e);
    // eslint-disable-next-line no-unused-expressions
    onChangeOption && onChangeOption(e.currentTarget.value);

    // onChange, onChangeOption
  };

  return (
    <select onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
};
