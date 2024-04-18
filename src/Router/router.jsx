import ProductsCategory from "../Components/Home/ProductsCategory";
import Footer from "../Components/Layout/Footer/Footer";
import Shop from "../Components/Shop/Shopping/Shop";
import Checkout from "../Components/Shop/Checkout/Checkout";
import Cart from "../Components/Shop/Cart/Cart";
import Contact from "../Components/Introduction/Contact/Contact";
import About from "../Components/Introduction/About/About";
import Dashboard from "../Components/Dashboard/Dashboard";
import ProfileDetails from "../Components/Dashboard/ProfileDetails";
import NotFound from "../Components/Error/404";
import Form from "../Components/Authentication/Form";
import FAQ from "../Components/Introduction/FAQ/FAQ";
import Address from "../Components/Dashboard/Address";
import Order from "../Components/Dashboard/Order";
import TrendyProduct from "../Components/Home/TrendyProduct";
import HeroSlider from "../Components/Slider/HeroSlider";
import {createBrowserRouter } from "react-router-dom";
import NavigationBar from "../Components/Layout/NavBar/NavigationBar";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Form page="login" />,
    },
    {
      path: "/sign-up",
      element: <Form page="register" />,
    },
    {
      path: "/forgot-password",
      element: <Form page="forgot" />,
    },
    {
      path: "/home",
      element: (
        <>
          <NavigationBar />
          <HeroSlider />
          <ProductsCategory />
          <TrendyProduct />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <>
          <NavigationBar />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/about-us",
      element: (
        <>
          <NavigationBar />
          <About/>
          <Footer />
        </>
      ),
    },
    {
      path: "/faq",
      element: (
        <>
          <NavigationBar />
          <FAQ/>
          <Footer />
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <NavigationBar />
          <Shop/>
          <Footer />
        </>
      ),
    },
    {
      path: "/checkout",
      element: (
        <>
          <NavigationBar />
          <Checkout/>
          <Footer />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <NavigationBar />
          <Cart/>
          <Footer />
        </>
      ),
    },
    {
      path: "/my-profile",
      element: (
        <>
          <NavigationBar />
          <Dashboard/>
          <Footer />
        </>
      ),
    },
    {
      path: "/my-orders",
      element: (
        <>
          <NavigationBar />
          <Order/>
          <Footer />
        </>
      ),
    },
    {
      path: "/my-address",
      element: (
        <>
          <NavigationBar />
          <Address/>
          <Footer />
        </>
      ),
    },
    {
      path: "/profile-info",
      element: (
        <>
          <NavigationBar />
          <ProfileDetails/>
          <Footer />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <NotFound/>
      ),
    },
  ]);

export default router