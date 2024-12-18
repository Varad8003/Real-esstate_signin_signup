import Header from "./components/Header"
import About from "./components/About"
//import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer/>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App