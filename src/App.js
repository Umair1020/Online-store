import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert('Dark mode has been Enable', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert('light mode has been Enable', 'success')
    }
  }
  return (
    <div className="App">
     <Navbar Heading="Selling Shop" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert} />
    </div>
  );
}

export default App;
