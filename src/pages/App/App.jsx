import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ShopPage from '../ShopAllPage/ShopAllPage'
import ShopAllPage from '../ShopPage/ShopPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import InquiriesPage from '../InquiriesPage/InquiriesPage'
import ShopBooksPage from '../ShopBooksPage/ShopBooksPage'
import ShopDecorPage from '../ShopDecorPage/ShopDecorPage'
import ShopGlasswarePage from '../ShopGlasswarePage/ShopGlasswarePage'
import ProductPage from '../ProductPage/ProductPage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../../components/NavBar/NavBar';
import { getProductById, getProductByName, getAll } from '../../utilities/products-api';
import * as categories from '../../utilities/categories-api'
import AuthPage from '../AuthPage/AuthPage';
import { logOut } from '../../utilities/users-service';


export default function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <main className="App">
      <NavBar 
      user={user} 
      setUser={setUser} 
      products={getProductByName, getProductById, getAll}
      categories={categories.getAllCategories}
       />
        <Routes>
          <Route path="/" element={<Navigate to="/shop" />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/all" element={<ShopAllPage />} />
          <Route path="/shop/books" element={<ShopBooksPage />} />
          <Route path="/shop/decor" element={<ShopDecorPage user={user} setUser={setUser} />} />
          <Route path="/shop/glassware" element={<ShopGlasswarePage user={user} setUser={setUser} />} />
          <Route path="shop/all/:category" element={<ShopAllPage/>} />
          <Route path="/product/:id" element={<ProductPage user={user} setUser={setUser} />} />
          <Route path="/login" element={<AuthPage user={user} setUser={setUser} />} />
         <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  );
}

// //
// <Route exact path="/item/:category/:id" element={<ItemDetailsPage cart={cart} setCart={setCart} user={user} setUser={setUser}/>} />
// <Route
//   path="/search"
//   element={<SearchResultsPage products={products} />} />

// </Routes>
// {businessUser ? (
// <>

// {businessUser ? (
//             <>
//               <Routes>
//                 <Route
//                   path="/edit/:id"
//                   element={<EditItemPage products={products} user={user} />}
//                 />
//               </Routes>
//             </>
//           ) : (
//             <></>
//           )}

//           {user ? (
//             <>
//               <Routes>
//                 <Route
//                   path="/profile"
//                   element={
//                     <ProfilePage
//                       user={user}
//                       businessUser={businessUser}
//                       products={products}
//                     />
//                   }
//                 ></Route>
//                 <Route
//                   path="/create"
//                   element={<CreateItemPage user={user._id} />}
//                 />
//                 <Route
//                   path="/cart"
//                   element={<NewOrderPage products={products} />}
//                 />
//                 <Route
//                   path="/orders"
//                   element={<OrderHistoryPage products={products} />}
//                 />
//               </Routes>
//             </>
//           ) : (
//             <>
//               <>
//                 <Routes>
//                   <Route
//                     path="/auth"
//                     element={
//                       <AuthPage
//                         user={user}
//                         setUser={setUser}
//                         setBusinessUser={setBusinessUser}
//                       />
//                     }
//                   />
//                 </Routes>
//                 {isRootPath && (
//                   <AuthPage
//                     setUser={setUser}
//                     setBusinessUser={setBusinessUser}
//                   />
//                 )}
//               </>
//             </>
//           )}
//         </main>
//         <Footer />
//       </>
//     </>
//   );
// }