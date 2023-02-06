import "./button.scss";
export function Button({ children, number, onClick, color, className }) {
  const classes = `button button__${color} ${className}`;

  return (
    <button onClick={onClick} className={classes}>
      {children} {number}
    </button>
  );
}
