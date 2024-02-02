import ReactDOM  from "react-dom/client"
import "./style.css"
import Navbar  from "./components/navbar"
import Search from "./components/search"
import Product from "./components/product"
import Aboutus from "./components/aboutus"
import Footer from "./components/footer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<>
<Navbar></Navbar>
<Search></Search>
<Product></Product>
<Aboutus></Aboutus>
<Footer></Footer>
</>)