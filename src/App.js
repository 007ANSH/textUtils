
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  
} from "react-router-dom";

function App() {

  // To switch between modes 

  const [mode,setMode]=useState('light');
  let toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("success"," converted to dark mode");

    }
    else{

      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("success"," converted to light mode");
    }

  };

  // To show alerts 

  const [alert,setAlert]=useState(null); 

  let showAlert=(type,message)=>{
    setAlert({
      type:type,
      msg:message
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <TextForm heading="Enter the data analyse" alert={showAlert} mode={mode}/>
      ),
    },
    {
      path: "about",
      element: <About/>,
    },
  ]);

  return (
    <>
    {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >


     
    </div> */}
   
         <BrowserRouter>
         <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>

         <Alert alert={alert}/>
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm heading="Enter the data analyse" alert={showAlert} mode={mode}/>

              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
   
  );
}

export default App;
