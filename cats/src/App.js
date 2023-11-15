import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import  { Home } from './components/Home'
import { CatList } from './components/CatList'
import { CatDetail }from './components/CatDetail'
import { CatForm } from '../components/CatForm'
import { CatEditForm } from '../components/CatEditForm'
import  { CatDeleteForm } from '../components/CatDeleteForm'
import { NotFound } from './components/NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cats' element={<CatList />} />
          <Route path='/cats/add' element={<CatForm />} />
          <Route path='/cats/:id' element={<CatDetail />} />
          <Route path='/cats/:id/edit' element={<CatEditForm />} />
          <Route path='/cats/:id/delete' element={<CatDeleteForm />} />
          <Route path= '/' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App