import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Dashboard from "./pages/Dashboard/Dashboard";
import Repair from "./pages/Repair/Repair";
import Customer from "./pages/Customer/Customer";
import Inventory from "./pages/KhoHang/Inventory";
import DoanhThu from "./pages/ThongKe/DoanhThu";
import SuaChua from "./pages/ThongKe/SuaChua";
import Accessory from "./pages/KhoHang/Accessory";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Dashboard />} />
            <Route index path="/dashboard" element={<Dashboard />} />

          {/* Quản lý sửa chữa  */}
           <Route index path="/repairs" element={<Repair />} />

          {/* Quản lý khách hàng  */}
           <Route index path="/customers" element={<Customer/>} />

          {/* Quản lý kho linh kiện  */}
           <Route index path="/inventory" element={<Inventory/>} />
           <Route index path="/accessory" element={<Accessory/>} />


          {/* Doanh thu  */}
           <Route index path="/stats/revenue" element={<DoanhThu/>} />
           <Route index path="/stats/repairs" element={<SuaChua/>} />


            {/* Others Page */}
            {/* <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} /> */}

            {/* Forms */}
            {/* <Route path="/form-elements" element={<FormElements />} /> */}

            {/* Tables */}
            {/* <Route path="/basic-tables" element={<BasicTables />} /> */}

            {/* Ui Elements */}
            {/* <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} /> */}

            {/* Charts */}
            {/* <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} /> */}
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
