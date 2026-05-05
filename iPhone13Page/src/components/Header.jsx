import Apple from "../assets/img/logo_apple.svg";
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
        <nav>
            <ul>
                <li>
                    <img src={Apple} alt="Apple Icon" className="apple-logo" />
                </li>
                <li>Loja</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>AirPods</li>
                <li>Só na Apple</li>
                <li>Acessórios</li>
                <li>Suporte</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header