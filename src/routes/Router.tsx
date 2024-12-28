import AppLayout from "@/core/layout/AppLayout";
import Dashboard from "@/pages/Dashboard";
import MyTasks from "@/pages/MyTasks";
import { BrowserRouter, Route, Routes } from "react-router";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<Dashboard />} index />
          <Route element={<MyTasks />} path="/my-tasks" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
