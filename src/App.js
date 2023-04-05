import React, { useState } from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {
  const [formvisible, setFormVisible] = useState(false)
  
  return (
    <div className="App">
      <Header setFormVisible={setFormVisible} />
      <Main setFormVisible={setFormVisible} />
      <Footer />
      {
        formvisible === true && <div className='overlay'>
          <Form setFormVisible={setFormVisible} />
        </div>
      }
    </div>
  );
}

export default App;
