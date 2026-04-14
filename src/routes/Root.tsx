import { Outlet } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

export default function Root() {
  return (
    <div className="portfolio-root area flex flex-col gap-12 justify-between">
      <HeaderSection />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
}
