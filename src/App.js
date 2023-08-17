import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LureList from './components/LureList';
import LineList from './components/LineList';
import SinkerList from './components/SinkerList';
import LureForm from './components/LureForm';
import LineForm from './components/LineForm';
import SinkerForm from './components/SinkerForm';
import EditLureForm from './components/EditLureForm';
import EditLineForm from './components/EditLineForm';
import EditSinkerForm from './components/EditSinkerForm';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';  

const NotFound = () => {
  return <h2>404 Not Found</h2>;
};

const App = () => {
  return (
    <div>
      <h1>Fishing App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lures">Lures</Link>
          </li>
          <li>
            <Link to="/lines">Lines</Link>
          </li>
          <li>
            <Link to="/sinkers">Sinkers</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Lure Routes */}
        <Route path="/lures" element={<LureList />} />
        <Route path="/lures/add" element={<LureForm />} />
        <Route path="/lures/:id/edit" element={<EditLureForm />} />

        {/* Line Routes */}
        <Route path="/lines" element={<LineList />} />
        <Route path="/lines/add" element={<LineForm />} />
        <Route path="/lines/:id/edit" element={<EditLineForm />} />

        {/* Sinker Routes */}
        <Route path="/sinkers" element={<SinkerList />} />
        <Route path="/sinkers/add" element={<SinkerForm />} />
        <Route path="/sinkers/:id/edit" element={<EditSinkerForm />} />

        {/* Auth Routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};



export default App;
