import AppLayout from "@/layout/AppLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import UserProfileLayout from "@/layout/UserProfileLayout";
import Dashboard from "@/pages/Dashboard";
import MyTasks from "@/pages/MyTasks";
import NotFound from "@/pages/NotFound";
import UserProfile from "@/pages/UserProfile";
import { BrowserRouter, Route, Routes } from "react-router";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<DashboardLayout />}>
            <Route element={<Dashboard />} index />
            <Route element={<MyTasks />} path="/my-tasks" />
          </Route>
          <Route element={<UserProfileLayout />}>
            <Route element={<UserProfile />} path="/profile" />
          </Route>
        </Route>

        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
