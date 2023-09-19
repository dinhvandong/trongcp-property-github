import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Login/Register';

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <BrowserRouter>
    {loading && (
      <div className="spinner-parent">
        <div class="spinner-border" role="status"></div>
      </div>
    )}
    <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      {/* <Route
        path="/apply-doctor"
        element={
          <ProtectedRoute>
            <ApplyDoctor />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/userslist"
        element={
          <ProtectedRoute>
            <Userslist />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/doctorslist"
        element={
          <ProtectedRoute>
            <DoctorsList />
          </ProtectedRoute>
        }
      /> */}

      {/* <Route
        path="/doctor/profile/:userId"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      /> */}

      {/* <Route
        path="/book-appointment/:doctorId"
        element={
          <ProtectedRoute>
            <BookAppointment />
          </ProtectedRoute>
        }
      /> */}
     

     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
