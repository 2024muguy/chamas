import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReduxProvider } from './store';
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import Partners from './pages/Partners';
import Home from './pages/Home'; 
import Payments from './pages/Payments';
import SearchResults from './pages/SearchResults';
import MPesaPayment from './pages/MPesaPayment';
import PayPalPayment from './pages/PayPalPayment';
import BankPaymentPage from './pages/BankPaymentPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Chama from './components/chama';
import { AuthProvider } from './context/AuthContext';
import Mission from './pages/Mission';
import Promotions from './pages/Promotions';
import Groups from './pages/Groups';
import Mentorship from './pages/Mentorship';
import Contact from './components/Contact';
import ClothingDetails from './pages/ClothingDetails'; 
import FoodDetails from './pages/FoodDetails'; 
import ToysDetails from './pages/ToysDetails'; 
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [registeredRole, setRegisteredRole] = useState(null);

  const handleRegistration = (role) => {
    setRegisteredRole(role);
  };

  return (
    <ReduxProvider>
      <AuthProvider>
        <Router>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home registeredRole={registeredRole} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register onRegister={handleRegistration} />} />
              <Route path="/events" element={<Events />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/mpesa" element={<MPesaPayment />} />
              <Route path="/paypal" element={<PayPalPayment />} />
              <Route path="/bank" element={<BankPaymentPage />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/clothing" element={<ClothingDetails />} />
              <Route path="/food" element={<FoodDetails />} />
              <Route path="/toys" element={<ToysDetails />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/join" element={<Chama />} />
              <Route path="/" element={<PrivateRoute />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ReduxProvider>
  );
};

export default App;
