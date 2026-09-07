import { RouterProvider } from "react-router";
import { appRouter } from "./router/appRouter";

export default function App() {
  return <RouterProvider router={appRouter} />;
}
