import { Quote } from "./Quote";
import { Container } from "./Container";
import { CatFact } from "./CatFact";

export function QuotePage() {
	return (
		<main>
			<Container>
				<CatFact />
				<Quote />
			</Container>
		</main>
	);
}
