
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import 'font-awesome/css/font-awesome.min.css'
import "./App.css"
import CartProvider from './components/Context/CartContext'
import Checkout from './components/Checkout/Checkout'






function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer/>}/>
          <Route path={'/category/:id'} element={<ItemListContainer/>}/>
          <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'*'} element= {<Error/>} />
          <Route path={'/checkout'} element= {<Checkout/>}/>
        </Routes>
        </CartProvider>
     </BrowserRouter>
    </>
  )
}

export default App
