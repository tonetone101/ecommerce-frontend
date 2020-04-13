import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./user/PrivateRoute";
import UserDashBoard from "./user/Dashboard";
import AdminDashBoard from "./admin/AdminDashBoard";
import AdminRoute from "./admin/AdminRoute";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./core/Shop";
import Product from "./core/Product";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />

        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/product/:productId" exact component={Product} />

        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />

        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
