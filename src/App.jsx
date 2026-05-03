import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import ProductCard from './components/ProductCard'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [isDarkMode, setIsDarkMode ] = useState(false)
  const changeTheme = () => setIsDarkMode(prev => !prev)

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])
  const addItem = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  // TODO: Implement state for category filtering
  const [category, setCategory] = useState('all')

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <div className={isDarkMode? 'Toggle Dark Mode' : 'Toggle Light Mode'}>
        <DarkModeToggle isDarkMode={isDarkMode} onClick={changeTheme}/>
      </div>

      {/* TODO: Implement category filter dropdown */}
      

      <label>Filter by Category: </label>
      <select onChange={handleCategoryChange} value={category}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* TODO: Implement and render Cart component */}
      <ProductList category={category} onAddItem={addItem}/>

      <Cart cartItems={cart} />

     </div> 
  )
}

export default App
