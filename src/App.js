import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addcontact from './pages/Addcontact';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ContactList from './pages/ContactList';
import Cardshow from './pages/Cardshow';
import Onecard from './pages/Onecard';
import Edit from './pages/Edit';






function App() {
  return (
    <>

      <Header />

      <Routes >

        <Route path='/' element={<Homepage />} />
        <Route path='/add' element={<Addcontact />} />
        <Route path='/view' element={<ContactList />} />
        <Route path='/card' element={ <Cardshow/>} />
        <Route path='/onecard/:id' element={ <Onecard/>} />
        <Route path='/edit/:id' element={ <Edit/>} />

        
        
        


        
      

        
      </Routes>


      <Footer />

    </>
  );
}

export default App;
