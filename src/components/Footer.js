import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <Link to='/' className="footer-item">
                    <img className="footer-icon" src="./img/icon_privacy.png"/>
                    <p className="footer-text">隱私政策</p>
                </Link>
                <Link to='/' className="footer-item">
                    <img className="footer-icon" src="./img/icon_service.png"/>
                    <p className="footer-text">服務條款</p>
                </Link>
                <div className="footer-item footer-item-center">
                    <Link to='/' >
                        <img className="footer-icon footer-icon-center"src="./img/icon_facebook.png"/>
                    </Link>
                    <Link to='/'>
                        <img className="footer-icon footer-icon-center" src="./img/icon_instagram.png"/>
                    </Link>
                    <Link to='/'>
                        <img className="footer-icon footer-icon-center" src="./img/icon_line.png"/>
                    </Link>
                    <p className="footer-text footer-text-center">© 2021 Beverage Comparator</p>
                </div>
                <Link to='/' className="footer-item">
                    <img className="footer-icon" src="./img/icon_question.png"/>
                    <p className="footer-text">常見問題</p>
                </Link>
                <Link to='/' className="footer-item">
                    <img className="footer-icon" src="./img/icon_mail.png"/>
                    <p className="footer-text">聯絡我們</p>
                </Link>
            </div>
        </footer>           
    );
}