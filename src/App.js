import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Hed from './component/Hed';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Case from './component/Case';
import Blog from './component/Blog';
import Hack from './component/Hack';
import Careers from './component/Careers';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Hed />
    <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Case" element={<Case />} />
    <Route path="/Blog" element={<Blog />} />
    <Route path="/Hack" element={<Hack />} />
    <Route path="/Careers" element={<Careers />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>

  );
}

export default App;
