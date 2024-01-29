import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {
    return (
        <Router>
            <div className=" flex flex-col justify-between h-screen">
                <Navbar/>
                <main className='container'>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/notfound' element={<NotFound/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
