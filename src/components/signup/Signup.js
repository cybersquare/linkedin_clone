import React from "react";
import styles from "./Signup.module.css";
import { Helmet } from "react-helmet";
import HeaderLogo from "./linkedin_header_logo.svg"; // asset suggestion
import FooterLogo from "./linkedin_footer_logo.svg";
import GoogleLogo from "./google_logo.svg";
import { useDispatch } from "react-redux";
import {signup} from "../../app/userSlice";
import fire from "../../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Signup() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fire.auth.onAuthStateChanged(user => {
        if(user){
          console.log(user);
          navigate('/dashboard');
        }
      })
    
  }, []);

  return (
    <div className={styles.signup}>
      <Helmet>
        <title>Linkedin SignUp</title>
      </Helmet>

      <div className={styles.signup__content}>
        <img
          className={styles.signup__header__logo}
          src={HeaderLogo}
          alt="header_logo"
        />
        <div className={styles.signup__center__content}>
          <div className={styles.text__content}>
            Make the most of your professional life
          </div>
          <div className={styles.signup__box__content}>
            <label className={styles.input__label} forhtml="email-or-phone">
              Email or phone number
            </label>
            <input
              className={styles.input__input}
              required
              id="email-or-phone"
              type="text"
              name="email-or-phone"
              value=""
              onChange={() => { }}
            />

            <label className={styles.input__label} forhtml="password">
              Password (6 or more characters)
            </label>

            <input
              className={styles.input__input}
              autoComplete="new-password"
              required
              id="password"
              type="password"
              name="password"
              placeholder=""
              value=""
              onChange={() => { }}
            />

            <span
              className={styles.signup_agreement_span}
            >
              By clicking Agree &amp; Join, you agree to the LinkedIn  &nbsp;
              <a
                target="_blank"
                className={styles.form_body_agreement_item_link}
                href="https://www.linkedin.com"
                rel="noopener noreferrer"
              >
                User <br/> Agreement
              </a>
              ,
              <a
                target="_blank"
                className={styles.form_body_agreement_item_link}
                href="https://www.linkedin.com"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              , and
              <a
                target="_blank"
                className={styles.form_body_agreement_item_link}
                href="https://www.linkedin.com"
                rel="noopener noreferrer"
              >
                &nbsp; Cookie Policy
              </a>.
            </span>

            <button type="submit" id="join-form-submit" className={styles.form_body__submit_button} 
            value="Agree &amp; Join" onClick={()=> {
              dispatch(signup())
              }} >Agree &amp; Join</button>

            <h2 className={styles.content__or_h2}>
              <span className={styles.content__or_text}>or</span>
            </h2>

            <div className={styles.continue__google}>
              <img src={GoogleLogo} alt="google_logo" className={styles.signup__google__logo} />
              &nbsp; Continue with Google
            </div>

            <div className={styles.main_signin_container}>
              Already on LinkedIn? &nbsp;
              <a
                target="_blank"
                className={styles.signin_link}
                href="https://www.linkedin.com"
                rel="noopener noreferrer"
              >
                &nbsp; SignIn
              </a>
            </div>

          </div>

          <div className={styles.signup_create_page_for_business}>
            Looking to create a page for business? &nbsp;
            <a
              target="_blank"
              className={styles.signup_get_help}
              href="https://www.linkedin.com"
              rel="noopener noreferrer"
            >
              Get help
            </a>
          </div>
        </div>
      </div>
      <footer className={styles.li__footer}>
        <ul className={styles.li_footer__list}>
          <img src={FooterLogo} alt="footer" width="80" className={styles.signup__footer__logo} />
          <li className={styles.li_footer__item}>
            <span className={styles.li_footer__copyright}>&#169; 2021</span>
          </li>
          <li className={styles.li_footer__item}>
            <a href="https://www.linkedin.com" className={styles.li_footer__item_link}>About</a>
          </li>
          <li className={styles.li_footer__item}>
            <a href="https://www.linkedin.com" className={styles.li_footer__item_link}>Accessibility</a>
          </li>
          <li className={styles.li_footer__item}>
            <a href="https://www.linkedin.com" className={styles.li_footer__item_link}>User Agreement</a>
          </li>
          <li className={styles.li_footer__item}>
            <a href="https://www.linkedin.com" className={styles.li_footer__item_link}>Privacy Policy</a>
          </li>
          <li className={styles.li_footer__item}>
            <a href="https://www.linkedin.com" className={styles.li_footer__item_link}>Cookie Policy</a>
          </li>
          <li className={styles.li_footer__item}>
            <a href="https://www.linkedin.com" className={styles.li_footer__item_link}>Copyright Policy</a>
          </li><li className={styles.li_footer__item}>
            <a href="https://www.linkedin.com" className={styles.li_footer__item_link}>Brand Policy</a></li>
          <li className={styles.li_footer__item}>
            <a href="https://www.linkedin.com" className={styles.li_footer__item_link}>Guest Controls</a>
          </li>
          <li className={styles.li_footer__item}>
            <a href="https://www.linkedin.com" className={styles.li_footer__item_link}>Community Guidelines</a>
          </li>

          <li className={styles.li_footer__item}>
            <select defaultValue="English">
              <option disabled>Languages</option>
              <option value="Arabic" >Arabic</option>              
              <option value="English">English</option>                   
            </select>
          </li>


        </ul>
      </footer>
    </div>
  );
}

export default Signup;

