import Btn from "../components/Btn";
import { PageHero } from "../components/Blocks";

export default function NotFound() {
  return (
    <PageHero title={[["Page not found"]]} sub="The link may be old or mistyped.">
      <Btn to="/">Back to home</Btn>
      <Btn to="/support" variant="outline">Support</Btn>
    </PageHero>
  );
}
