import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Booking from './Pages/Booking/Booking';
import ContactUs from './Pages/ContactUs/ContactUs';
import Blog from './Pages/Home/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import AddANewService from './Pages/Login/Login/AddANewService/AddANewService';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import ScrollToTop from './Pages/ScrollToTop';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import React, { useState, useEffect } from 'react';
import ClimbingBoxLoader from "react-spinners/RiseLoader";

function App() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])


  return (
    <>
      {

        loading
          ?
          <div className="not">
            <ClimbingBoxLoader color={"#ff00cc"} loading={loading} size={20} />
          </div>
          :
          <AuthProvider>
            <BrowserRouter>
              <ScrollToTop></ScrollToTop>
              <Header></Header>
              <Switch>
                <Route exact path='/'>
                  <Home></Home>
                </Route>
                <Route path='/home'>
                  <Home></Home>
                </Route>
                <Route path='/services'>
                  <Services></Services>
                </Route>
                <Route path='/blogs'>
                  <Blog></Blog>
                </Route>
                <Route path='/contactUs'>
                  <ContactUs></ContactUs>
                </Route>
                <PrivateRoute path='/myOrders'>
                  <MyOrders></MyOrders>
                </PrivateRoute>
                <PrivateRoute path='/addANewService'>
                  <AddANewService></AddANewService>
                </PrivateRoute>
                <PrivateRoute path='/manageAllOrders'>
                  <ManageAllOrders></ManageAllOrders>
                </PrivateRoute>
                <PrivateRoute path='/booking/:serviceId'>
                  <Booking></Booking>
                </PrivateRoute>
                <Route path='/login'>
                  <Login></Login>
                </Route>
                <Route exact path='*'>
                  <NotFound></NotFound>
                </Route>
              </Switch>
              <Footer></Footer>
            </BrowserRouter>
          </AuthProvider>
      }
    </>
  );
}

export default App;
