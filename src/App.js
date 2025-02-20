import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';
import About from './components/About';
import Contact from './components/Contact';
import Questions from './components/Questions';
import './App.css';
import FeedBack from './components/FeedBack';
import QuestionAll from './components/QuestionAll';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/questionall" element={<QuestionAll />} />
        </Routes>
      </div>
  );
}

export default App;