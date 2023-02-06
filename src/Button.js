import "./button.scss";
export function Button({ children, number, onClick, className }) {
  const classes = `button ${className}`;
  return (
    <button onClick={onClick} className={classes}>
      {children} {number}
    </button>
  );
}
