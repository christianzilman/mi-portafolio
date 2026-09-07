import { Outlet } from "react-router";
import { Footer } from "../Footer";
import { Nav } from "../Nav";

export function PortfolioLayout() {
  return (
    <div className="min-h-dvh">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
