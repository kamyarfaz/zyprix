import { Route, Routes } from "react-router-dom";
import HomePage from "./_root/HomePage";
import SingleProduct from "./_root/SingleProduct";
import AboutUs from "./_root/AboutUs";
import CardSetting from "./_auth/dashboard/pages/CardSetting";
import Home from "./_auth/dashboard/pages/Home";
import Profile from "./_auth/dashboard/pages/Profile";
import Transactions from "./_auth/dashboard/pages/Transactions";
import Location from "./_auth/dashboard/pages/Location";
import DashboardLayout from "./_auth/dashboard/DashboardLayout";

function App() {
  return (
    <main className="h-screen bg-[#0F0F0F] overflow-x-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route index element={<Home />} />
          <Route path="card-setting" element={<CardSetting />} />
          <Route path="my-profile" element={<Profile/>}/>
          <Route path="transactions" element={<Transactions/>}/>
          <Route path="location" element={<Location/>}/>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
