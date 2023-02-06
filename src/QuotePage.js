import { Quote } from "./Quote";
import { Container } from "./Container";
import { CatFact } from "./CatFact";

export function QuotePage({ children }) {
  return (
    <Container>
      <CatFact />
      <Quote />
      {children}
    </Container>
  );
}
