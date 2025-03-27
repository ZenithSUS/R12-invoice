import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <h1>Layout Navigation</h1>
      <Outlet />
    </div>
  );
}
