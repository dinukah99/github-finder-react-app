import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from "./components/layout/Footer.jsx";
import Alert from "./components/layout/Alert.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import User from "./pages/User.jsx";
import NotFound from "./pages/NotFound.jsx";
import {GithubProvider} from './context/github/GithubContext.js';
import {AlertProvider} from './context/alert/AlertContext.js';

function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className=" flex flex-col justify-between h-screen">
                        <Navbar/>
                        <main className='container'>
                            <Alert/>
                            <Routes>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/about' element={<About/>}/>
                                <Route path='/user/:login' element={<User/>}/>
                                <Route path='/notfound' element={<NotFound/>}/>
                                <Route path='*' element={<NotFound/>}/>
                            </Routes>
                        </main>
                        <Footer/>
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    )
}

export default App
