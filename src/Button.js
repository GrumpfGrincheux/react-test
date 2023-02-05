import "./button.scss";
export function Button({ children, number, onClick }) {
	return (
		<button onClick={onClick} className="button">
			{children} {number}
		</button>
	);
}
