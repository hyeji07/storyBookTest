export interface ButtonProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  backgroundColor?: string;
  color?: string;
  handleClick?: () => void;
}

export default function Button({
  label,
  backgroundColor,
  size,
  color,
  handleClick,
}: ButtonProps) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none',
    color,
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}
