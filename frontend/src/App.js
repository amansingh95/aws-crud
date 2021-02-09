
import React from 'react';
import { BrowserRouter as Router ,Route} from "react-router-dom";

import HomeScreen from './components/HomeScreen';


const App = ()=> {
  return (
    <Router>
      <main className='py-3'>
       
          <Route path='/' component={HomeScreen} exact />
        
       
        
      </main>
   
    
      
    </Router>
  );
}

export default App;