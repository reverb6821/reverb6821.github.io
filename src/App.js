import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Preloader from './Components/Preloader/Preloader';
import Navbar from './Components/Navbar/Navbar';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';

import Footer from './Components/Footer/Footer';

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className='App' id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/resume' component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
