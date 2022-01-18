import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Container } from '../base/Container'
import { Header } from '../base/Header'
import { Products } from '../../pages/Products'
import { ChatButton } from '../base/Chat'
import { Product } from '../../pages/Product'
import { CartContextProvider } from '../../contexts/cart'

const App = () => (
  <Router>
    <CartContextProvider>
      <main className="App">
        <Header />
        <Container>
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
        <ChatButton />
      </main>
    </CartContextProvider>
  </Router>
)

export default App
