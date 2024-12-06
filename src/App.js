import logo from './logo.svg';
import './App.css';
import LoginComp from './layout/LoginComp';
import NavComp from './layout/NavComp';
import HomeComp from './component/HomeComp';
import AboutComp from './component/AboutComp';
import ProductComp from './component/ProductComp';
import ContactComp from './component/ContactComp';
import MainDashboardComp from './layout/MainDashboardComp';
import PageNotFoundComp from './layout/PageNotFoundComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      
      {/* <HomeComp/> {<hr/>}
      <AboutComp/> {<hr/>}
      <ProductComp/> {<hr/>}
      <ContactComp/> {<hr/>} */}

      {/* <LoginComp/> {<hr/>} */}
      {/* <MainDashboardComp/> */}
      {/* <NavComp/> {<hr/>} */}
      {/* <PageNotFoundComp/> */}
      {/*                                 <NavComp></NavComp>       //why not responding                  */}
    </div>
  );
}

export default App;
