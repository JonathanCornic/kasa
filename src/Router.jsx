import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Housing from './pages/Housing/Housing'
import Error from './pages/Error/Error'
import Footer from './components/Footer/Footer'

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router
