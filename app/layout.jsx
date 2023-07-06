import "../reset.css";
import "../fonts.css";
import "../styles.css";
import localFont from "next/font/local";

const lato = localFont({
  src: "./lato.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata = {
  title: "Яндекс.Дом",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
        <footer className="footer">
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="/">
                Помощь
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/">
                Обратная связь
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/">
                Разработчикам
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/">
                Условия использования
              </a>
            </li>
          </ul>

          <div className="footer__copyright">© 1997–2023 ООО «Яндекс»</div>
        </footer>
      </body>
    </html>
  );
}
