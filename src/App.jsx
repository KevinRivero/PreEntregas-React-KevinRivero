
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import 'font-awesome/css/font-awesome.min.css'



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer/>}/>
          <Route path={'/category/:id'} element={<ItemListContainer/>}/>
          <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
          <Route path={'*'} element= {<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
