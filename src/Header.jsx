import './App.css'

export default function Header(){
    return(
        <header>
            <div className="container-logo">
                <img src="/assets/logo.svg" alt="logotipo"/>
            </div>
            <nav>
                <ul>
                    <li className="hvr-underline-from-center">Home</li>
                    <li className="hvr-underline-from-center">About</li>
                    <li className="hvr-underline-from-center">Products</li>
                    <li className=".
                    hvr-underline-from-center">Support</li>
                </ul>
            </nav>
            <div className="icons-menu">
                <ul>
                    <li><i className="bi bi-search"></i></li>
                    <li><i className="bi bi-cart3"></i></li>
                    <li><i className="bi bi-list"></i></li>
                </ul>
            </div>
            
        </header>
    )
}