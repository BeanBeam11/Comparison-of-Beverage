import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <Link to='/' className="footer-item">
                    <div className="footer-item">
                        <img className="footer-icon" src="./img/icon_privacy.png"/>
                        <p className="footer-text">隱私政策</p>
                    </div>
                </Link>
                <Link to='/' className="footer-item">
                    <div className="footer-item">
                        <img className="footer-icon" src="./img/icon_service.png"/>
                        <p className="footer-text">服務條款</p>
                    </div>
                </Link>
                <Link to='/' className="footer-item footer-item-center">
                    <div className="footer-item footer-item-center">
                            <img className="footer-icon footer-icon-center"src="./img/icon_facebook.png"/>
                            <img className="footer-icon footer-icon-center" src="./img/icon_instagram.png"/>
                            <img className="footer-icon footer-icon-center" src="./img/icon_line.png"/>
                            <p className="footer-text footer-text-center">© 2021 Beverage Comparator</p>
                    </div>
                </Link>
                <Link to='/' className="footer-item">
                    <div className="footer-item">
                        <img className="footer-icon" src="./img/icon_question.png"/>
                        <p className="footer-text">常見問題</p>
                    </div>
                </Link>
                <Link to='/' className="footer-item">
                    <div className="footer-item">
                        <img className="footer-icon" src="./img/icon_mail.png"/>
                        <p className="footer-text">聯絡我們</p>
                    </div>
                </Link>
            </div>
        </footer>           
    );
}