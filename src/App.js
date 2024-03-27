import "./App.css";
import SignUpComponent from "./Pages/SignUpComponent/SignUp.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignInComponent/SignIn.js";
import UsersComponent from "./Pages/Admin/UsersComponent/Users.js";
import DashboardComponent from "./Pages/Admin/DashboardComponent/Dashboard.js";
import PromotionComponent from "./Pages/Admin/Promotions/Promotions.js";
import LoginComponent from "./Pages/Admin/LoginComponent/Login.js";
import OrderComponent from "./Pages/Admin/OrderComponent/Order.js";
import ChatbotComponent from "./Pages/Chatbot/Chatbot.js";
import PaymentComponent from "./Pages/PaymentComponent/Payment.js";
import MainPage from "./Pages/MainPage/MainPage.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<MainPage></MainPage>} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUpComponent />} />
        <Route path="/admin/dashboard" element={<DashboardComponent />} />
        <Route path="/admin/users" element={<UsersComponent />} />
        <Route path="/admin/promotions" element={<PromotionComponent />} />
        <Route path="/admin" element={<LoginComponent />} />
        <Route path="/admin/orders" element={<OrderComponent />} />
        <Route path="/chatbot" element={<ChatbotComponent />} />
        <Route path="/payment" element={<PaymentComponent />} />
      </Routes>
    </Router>
  );
}
export default App;
