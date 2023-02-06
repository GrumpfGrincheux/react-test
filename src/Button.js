import "./button.scss";
export function Button({ children, onClick }) {
	const classes = `button`;
	return (
		<button onClick={onClick} className={classes}>
			{children}
		</button>
	);
}
