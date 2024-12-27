import AppLayout from "@/core/layout/AppLayout";
import Dashboard from "@/pages/Dashboard";
import MyTasks from "@/pages/MyTasks";
import { BrowserRouter, Route, Routes } from "react-router";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/my-tasks" element={<MyTasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
