import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import OrderProduct from "./pages/orderProductList/OrderProduct";
import Orders from "./pages/order/Orders";

function App() {
  // const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  // const currentUser = user && JSON.parse(user).currentUser;
  // const admin = currentUser?.isAdmin;
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={admin ?  <Home /> : <Login/> }></Route>
        <Route path="/" element={admin ?  <Home /> : <Login/> }>
        
        </Route>
        <Route path="/users" element={admin ?  <UserList /> : <Login/> }>
           
        </Route>
        <Route path="/user/:userId" element={admin ?  <User /> : <Login/> }>
        
        </Route>
        <Route path="/newUser" element={admin ?  <NewUser /> : <Login/> }>
        
        </Route>
        <Route path="/products" element={admin ?  <ProductList /> : <Login/> }>
        
        </Route>
        <Route path="/product/:productId" element={admin ?  <Product /> : <Login/> }>
        
        </Route>
        <Route path="/newproduct" element={admin ?  <NewProduct /> : <Login/> }>
        
        </Route>
        <Route path="/orders" element={admin ?  <Orders /> : <Login/> }>
        
        </Route>
        <Route path="/orderProduct/:userId" element={admin ?  <OrderProduct /> : <Login/> }>
        
        </Route>
       
      </Routes>
    </Router>
  );
}

export default App;
