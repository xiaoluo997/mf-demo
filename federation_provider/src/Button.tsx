import { Button } from 'antd';
import type { ButtonProps } from 'antd';

export default function IButton(props: ButtonProps) {
  const { children, ...otherProps } = props;
  return <Button {...otherProps}>{children}</Button>;
}
