import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import HomeDocLogged from './components/doctor/HomeDocLogged';
import Login from './components/Login'
import Register from './components/Register';
import DoctorDetail from './components/patient/DoctorDetail';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/authContext'
import Appointment from './components/patient/Appointment'
import Profile from './components/Profile.jsx'
// import roles from './helpers/roles';
// import AdminView from './components/AdminView';


export default function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route exact path='/homeDoc'><HomeDocLogged/></Route>
          <Route exact path='/login/'><Login/></Route>
          <Route exact path='/register/'><Register/></Route>
          <Route exact path='/appointment'><Appointment/></Route>
          <Route exact path='/profile:name'> <Profile/> </Route>
          <Route exact path='/docDetail/:id'><DoctorDetail /></Route>

          {/* <Route exact path='/appointment' components><Appointment /></Route> */}
          <ProtectedRoute exact path='/appointment'><Appointment/></ProtectedRoute>

        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

// export default App