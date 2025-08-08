import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";

interface Props {
  left: Parameters<typeof LeftPanel>[0];
  right: Parameters<typeof RightPanel>[0];
}

export const QuestionLayout = ({ left, right }: Props) => {
  return (
    <main className="container mx-auto py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <section aria-label="Question Panel">
        <LeftPanel {...left} />
      </section>
      <aside aria-label="Work Panel">
        <RightPanel {...right} />
      </aside>
    </main>
  );
};
