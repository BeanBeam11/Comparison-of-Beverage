export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-item">
                    <img className="footer-icon" src="./img/icon_privacy.png"/>
                    <p className="footer-text">隱私政策</p>
                </div>
                <div className="footer-item">
                    <img className="footer-icon" src="./img/icon_service.png"/>
                    <p className="footer-text">服務條款</p>
                </div>
                <div className="footer-item footer-item-1">
                        <img className="footer-icon footer-icon-1"src="./img/icon_facebook.png"/>
                        <img className="footer-icon footer-icon-1" src="./img/icon_instagram.png"/>
                        <img className="footer-icon footer-icon-1" src="./img/icon_line.png"/>
                        <p className="footer-text">© 2021 Beverage Comparator</p>
                </div>
                <div className="footer-item">
                    <img className="footer-icon" src="./img/icon_question.png"/>
                    <p className="footer-text">常見問題</p>
                </div>
                <div className="footer-item">
                    <img className="footer-icon" src="./img/icon_mail.png"/>
                    <p className="footer-text">聯絡我們</p>
                </div>
            </div>
        </footer>           
    );
}