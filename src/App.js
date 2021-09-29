import "./App.css";
import NavbarComponent from "./components/nav/Navbar";
import HomePage from "./components/home/HomePage";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import DeliveryDetails from "./components/delivery/DeliveryDetails";
import DeliveryTracking from "./components/tracking/DeliveryTracking";
import SecondNavbar from "./components/nav/SeconNav";

function App() {
  const LoginContainer = () => {
    return (
      <>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Register} />
      </>
    );
  };

  const SignUpContainer =()=>{
    return (
      <>
        <Route path="/sign-up" component={Register} />
      </>
    );
  }


  const DeliveryContainer =()=>{
    return (
      <>
       <SecondNavbar/>
        <Route path="/delivery" component={ DeliveryDetails }/>
      </>
    );
  }

  const DeliveryTrackingContainer =()=>{
    return (
      <>
       <SecondNavbar/>
        <Route path="/tracking" component={ DeliveryTracking }/>
      </>
    );
  }
  

  const DefaultContainer = () => {
    return (
    <>
      <NavbarComponent />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={Register} />
      <Footer />
    </>
    )
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/(login)" component={LoginContainer} />
          <Route exact  path="/(sign-up)"component={ SignUpContainer }/>
          <Route exact  path="/(delivery)"component={ DeliveryContainer }/>
          <Route exact  path="/(tracking)"component={ DeliveryTrackingContainer }/>
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
