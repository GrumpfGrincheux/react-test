import { Quote } from "./Quote";
import { Container } from "./Container";
import { CatFact } from "./CatFact";
import { QuoteContainer } from "./QuoteContainer";

export function QuotePage() {
  return (
    <main>
      <Container>
        <QuoteContainer>
          <CatFact />
        </QuoteContainer>
        <QuoteContainer>
          <Quote />
        </QuoteContainer>
      </Container>
    </main>
  );
}
