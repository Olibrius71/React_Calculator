import './AppHeader.css';
import logo from "../logo.svg";

function AppHeader() {
    return (
        <header className="App-header">
            <h1 className="header-title">
                <img src={logo} className="react-logo-header"/>
                ReactJS Calculator
                <img src={logo} className="react-logo-header"/>
            </h1>
            <img src={logo}/>
        </header>
    );
}


export default AppHeader;