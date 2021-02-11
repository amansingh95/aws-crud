
import React from 'react';
import { BrowserRouter as Router ,Route} from "react-router-dom";

import HomeScreen from './components/HomeScreen';
import View from './components/View';
import Header from "./components/Header";


const App = ()=> {
  return (
    <Router><Header />
      <main className='py-3'>
       
          <Route path='/' component={HomeScreen} exact />
          <Route path='/aws_crud_view' component={View} />
       
        
      </main>
   
    
      
    </Router>
  );
}

export default App;