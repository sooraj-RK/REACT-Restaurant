
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurant from './components/Restaurant';
import RestView from './components/RestView';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      
      <Header/>
      <Routes>
        <Route path='/' element={<Restaurant></Restaurant>}/>
        <Route path='/view-restaurant/:id' element={<Restaurant></Restaurant>}/>
      </Routes>

      
      <RestView/>

      <Footer/>
    </div>
    
    
  )
}

export default App;
