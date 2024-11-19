// import "./FirstProject/FormPageStyle.css";
import FormPage from "./FirstProject/FormPage";
import FirstPage from "./WeatherApp/FirstPage";
// import "./WeatherApp/FirstPageSty.css"
import {Routes,Route} from "react-router-dom";
import Home from "./Shooping/Home";
import Store from "./Shooping/Store";
import About from "./Shooping/About";
import Navbar from "./Shooping/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Cart from "./Shooping/Cart"
import HomePage from "./secondProject/HomePage";
import SignupForm from "./SignupForm";
import LogIn from "./LogIn";
import Signin from "./Signin";



function App() {
    return (
        <div className="App">
            <Navbar/>
            <Container className="mb-4">
                <Routes>
                    <Route path="/Home"  element={<Home/>} />
                    <Route path="/Store" element={<Store/>} />
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                </Routes>
            </Container>

          {/*<HomePage/>*/}
            {/*<SignupForm/>*/}
            {/*<FormPage/>*/}
            {/*<HomePage/>*/}

            {/*<FirstPage/>*/}
        </div>
    );
}

export default App;
