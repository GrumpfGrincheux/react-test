import { useCatFact } from "./useCatFact";
import { Button } from "./Button";

export function CatFact() {
	const catFact = useCatFact();
	return (
		<div>
			<p>{catFact.catFact}</p>
			<Button onClick={() => catFact.getCatFact()}>New fact</Button>
		</div>
	);
}
