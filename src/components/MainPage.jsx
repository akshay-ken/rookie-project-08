import { ContentSection } from "./ContentSection";
import { HeaderSection } from "./HeaderSection";

export function MainPage() {
  return (
    <main className="px-2 py-4 md:px-[8vw] md:py-[4vw]">
      <HeaderSection />
      <ContentSection />
    </main>
  );
}
