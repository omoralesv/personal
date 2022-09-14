import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './componets/Layout';
import Home from './componets/Home';
import About from './componets/About';
import Contact from './componets/Contact';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
