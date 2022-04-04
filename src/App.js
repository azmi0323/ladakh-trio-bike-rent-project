import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./Components/Header/Header";
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import About from './Components/About/About';
import DashBoard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/review' element={<Review></Review>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/dashBoard' element={<DashBoard></DashBoard>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
