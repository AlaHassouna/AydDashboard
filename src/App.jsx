

import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/header/Header";
// import "bootstrap/dist/css/bootstrap.min.css";

// import './app.css'
import SideBar from "./components/sidebar/SideBar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/productDetails/ProductDetails";
import AddProduct from "./pages/products/addProduct/AddProduct";
import EditProduct from "./pages/products/editProduct/EditProduct";
import Categories from "./pages/categories/Categories";
import CategorieEdit from "./pages/categories/categorieEdit/CategorieEdit";
import AddCategorie from "./pages/categories/addCategorie/AddCategorie";
import Subcategories from "./pages/subcategories/subcategories";
import SubCategorieEdit from "./pages/subcategories/subCategorieEdit/SubCategorieEdit";
import AddSubCategorie from "./pages/subcategories/addSubCategorie/AddSubCategorie";
import Users from "./pages/users/Users";
import UsersEdit from "./pages/users/usersEdit/UsersEdit";
import Orders from "./pages/orders/Orders";
import EditOrder from "./pages/orders/editOrder/EditOrder";

const MyContext=createContext();



function App() {
  const [isToggleSidebar,setIsToggleSidebar]=useState(true);
  const [isLogin,setIsLogin]=useState(false);
  const [user,setUser]=useState({});
  const values={
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    user,
    setUser
  }
  useEffect(() => {
    // Vérifie si l'utilisateur est connecté en vérifiant le localStorage
    const storedIsLogin = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("user");
    if (storedIsLogin === "true") {
      setIsLogin(true);
      if (storedUser) {
        setUser(JSON.parse(storedUser));  // Récupérer l'utilisateur depuis localStorage
        console.log(storedUser)
      }
    }
  }, [isLogin]);
  useEffect(() => {
    const updateSidebarState = () => {
      const isSmallOrMediumScreen = window.matchMedia("(max-width: 768px)").matches; // Modifiez la taille selon vos besoins
      setIsToggleSidebar(!isSmallOrMediumScreen);
    };

    // Initial check
    updateSidebarState();

    // Écouteur pour les changements de taille d'écran
    window.addEventListener("resize", updateSidebarState);

    // Nettoyage
    return () => {
      window.removeEventListener("resize", updateSidebarState);
    };
  }, []);
  // useEffect(() => {
  //   // Simulation d'une action de connexion, mettez ici la logique réelle de votre application.
  //   // Exemple: Vérifier si l'utilisateur est connecté (par exemple, via un appel API ou vérification de session).
  //   if (localStorage.getItem("isLoggedIn") === "true") {
  //     setIsLogin(true);
  //   }
  // }, []);

// useEffect(()=>{
// alert(isToggleSidebar)
// },[isToggleSidebar])
  return (
    <Router>
      <MyContext.Provider value={values}>
      {
              isLogin==true && (
          <Header/>
      )}
          <div >
           
            
              <div
                className={"flex-1 transition-all duration-300 ease-in-out"}
              >
                <Routes>
                <Route
                      path="/"
                      element={<Navigate to={isLogin ? "/dashboard" : "/login"} replace />}
                    />
                                        {/* Redirection conditionnelle */}
                      <Route
                        path="/dashboard"
                        element={
                          isLogin ? <Dashboard /> : <Navigate to="/login" replace />
                        }
                      />
                      <Route
                        path="/login"
                        element={
                          !isLogin ? <Login /> : <Navigate to="/dashboard" replace />
                        }
                      />
                      <Route
                        path="/register"
                        element={
                          !isLogin ? <SignUp /> : <Navigate to="/dashboard" replace />
                        }
                      />
                      <Route
                          path="/dashboard/products/:id"
                          element={isLogin ? <ProductDetails /> : <Navigate to="/login" replace />}
                        />
                        <Route
                          path="/dashboard/products"
                          element={isLogin ? <Products /> : <Navigate to="/login" replace />}
                        />
                        <Route
                          path="/dashboard/products/add"
                          element={isLogin ? <AddProduct /> : <Navigate to="/login" replace />}
                        />
                        <Route
                          path="/dashboard/products/edit/:id"
                          element={isLogin ? <EditProduct /> : <Navigate to="/login" replace />}
                        />

                        <Route
                          path="/dashboard/categories"
                          element={isLogin ? <Categories /> : <Navigate to="/login" replace />}
                        />
                        <Route
                          path="/dashboard/categories/edit/:id"
                          element={isLogin ? <CategorieEdit /> : <Navigate to="/login" replace />}
                        />
                        <Route
                          path="/dashboard/categories/add"
                          element={isLogin ? <AddCategorie /> : <Navigate to="/login" replace />}
                        />

                        <Route
                          path="/dashboard/subcategories"
                          element={isLogin ? <Subcategories /> : <Navigate to="/login" replace />}
                        />
                        <Route
                          path="/dashboard/subcategories/edit/:id"
                          element={isLogin ? <SubCategorieEdit /> : <Navigate to="/login" replace />}
                        />
                        <Route
                          path="/dashboard/subcategories/add"
                          element={isLogin ? <AddSubCategorie /> : <Navigate to="/login" replace />}
                        />

                        <Route
                          path="/dashboard/users"
                          element={isLogin ? <Users /> : <Navigate to="/login" replace />}
                        />
                        <Route
                          path="/dashboard/users/edit/:id"
                          element={isLogin ? <UsersEdit /> : <Navigate to="/login" replace />}
                        />

                        <Route
                          path="/dashboard/orders"
                          element={isLogin ? <Orders /> : <Navigate to="/login" replace />}
                        />
                        <Route
                          path="/dashboard/orders/edit/:id"
                          element={isLogin ? <EditOrder /> : <Navigate to="/login" replace />}
                        />

                </Routes>
              </div>
              {
              isLogin==true && (
              // {/* Sidebar */}
                <div
                  className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transition-transform duration-300 ease-in-out ${
                    isToggleSidebar ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  <SideBar />
                </div>
              )
              }
          </div>
      </MyContext.Provider>
    </Router>
  )
}

export default App;
export {MyContext}
