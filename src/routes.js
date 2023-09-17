import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login'

import Footer from './components/Footer.js'
import Header from './components/Header.js'

function RoutesApp() {
  return (
    <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default RoutesApp;