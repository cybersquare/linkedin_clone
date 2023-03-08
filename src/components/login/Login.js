import React from "react";
import styles from "./Login.module.css";
import { Helmet } from "react-helmet";
import HeaderLogo from "../signup/linkedin_header_logo.svg";
import FooterLogo from "../signup/linkedin_footer_logo.svg";
import GoogleLogo from "../signup/google_logo.svg";
import AppleLogo from "./apple_logo.svg";

function Login() {
  return (
    <div className={styles.signin}>
      <Helmet>
        <title>Linkedin SigIn</title>
      </Helmet>

      <div className={styles.signin__content}>
        <img
          className={styles.signin__header__logo}
          src={HeaderLogo}
          alt="header_logo"
        />
        <div className={styles.signin__center__content}>
          <div className={styles.signin__box__content}>
            <div className={styles.header__content}>
              <h3 className={styles.header__content__heading}>Sign in</h3>
              <p className={styles.header__content__subheading}>
                Stay updated on your professional world
              </p>
            </div>

            <input
              className={styles.input__input}
              required
              id="email-or-phone"
              type="text"
              name="email-or-phone"
              value=""
              placeholder="Email or Phone"
              onChange={() => { }}
            />

            <input
              className={styles.input__input}
              autoComplete="new-password"
              required
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value=""
              onChange={() => { }}
            />

            <a
              href="https://www.linkedin.com"
              className={styles.forgot__password}
            >
              Forgot password?
            </a>

            <button
              type="submit"
              id="join-form-submit"
              className={styles.form_body__submit_button}
              value="Agree &amp; Join"
            >
              Sign in
            </button>

            <h2 className={styles.content__or_h2}>
              <span className={styles.content__or_text}>or</span>
            </h2>

            <div className={styles.continue__google}>
              <img
                src={GoogleLogo}
                alt="google_logo"
                className={styles.signin__google__logo}
              />
              &nbsp; Sign in with Google
            </div>

            <div className={styles.continue__google}>
              <img
                src={AppleLogo}
                alt="apple_logo"
                className={styles.signin__google__logo}
              />
              &nbsp; Sign in with Apple
            </div>
          </div>

          <div className={styles.signin_create_page_for_business}>
            New to LinkedIn &nbsp;
            <a
              target="_blank"
              className={styles.signin_get_help}
              href="https://www.linkedin.com"
              rel="noopener noreferrer"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
      <footer className={styles.li__footer}>
        <ul className={styles.li_footer__list}>
          <img
            src={FooterLogo}
            alt="footer"
            width="80"
            className={styles.signin__footer__logo}
          />
          <li class={styles.li_footer__item}>
            <span class={styles.li_footer__copyright}>&#169; 2023</span>
          </li>
          <li className={styles.li_footer__item}>
            <a
              href="https://www.linkedin.com"
              className={styles.li_footer__item_link}
            >
              User Agreement
            </a>
          </li>
          <li className={styles.li_footer__item}>
            <a
              href="https://www.linkedin.com"
              className={styles.li_footer__item_link}
            >
              Privacy Policy
            </a>
          </li>
          <li className={styles.li_footer__item}>
            <a
              href="https://www.linkedin.com"
              className={styles.li_footer__item_link}
            >
              Community Guidelines
            </a>
          </li>
          <li className={styles.li_footer__item}>
            <a
              href="https://www.linkedin.com"
              className={styles.li_footer__item_link}
            >
              Cookie Policy
            </a>
          </li>
          <li className={styles.li_footer__item}>
            <a
              href="https://www.linkedin.com"
              className={styles.li_footer__item_link}
            >
              Copyright Policy
            </a>
          </li>
          <li className={styles.li_footer__item}>
            <a
              href="https://www.linkedin.com"
              className={styles.li_footer__item_link}
            >
              Send Feedback
            </a>
          </li>

          <li className={styles.li_footer__item}>
            <select defaultValue="English">
              <option disabled>Languages</option>
              <option value="Arabic">Arabic</option>
              <option value="English">English</option>
            </select>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Login;
