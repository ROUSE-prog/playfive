import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Tutorials from './components/Tutorials';
import Playground from './components/Playground';
import Community from './components/Community';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="playground" element={<Playground />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
