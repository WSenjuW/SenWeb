import "./contact.css";
import FormComponent from "./FormComponent/formComponent";
import EmailComponent from "./emailCopy/email_copy";
import imgLocation from "./img/location.webp";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <div id="contactBox">
      <section id="contact-box-content">
        <div id="form-map-zone">
          <FormComponent />
          <div id="map-box">
            <div id="map-location">
              <img alt="#" src={imgLocation} id="img-map" />
              <span id="location-item">
                <div id="square-location" />
                <article id="circle-dash" />
                <p id="country" translate="no">
                  URUGUAY
                </p>
                <p id="city">MONTEVIDEO</p>
              </span>
            </div>t
          </div>
        </div>
        <footer id="redes-email-zone">
          <EmailComponent />
          <div id="redes">
            <a
              id="redes-item"
              target="_BLANK"
              href="https://www.linkedin.com/in/maxi-martinez-55ba5421a/"
            >
              <FaLinkedin />
            </a>
            <a
              id="redes-item"
              target="_BLANK"
              href="https://github.com/WSenjuW"
            >
              <FaGithub />
            </a>
            <a
              id="redes-item"
              target="_BLANK"
              href="https://www.instagram.com/bt_w4ve/"
            >
              <FaInstagram />
            </a>
            <a
              id="redes-item"
              target="_BLANK"
              href="https://www.pinterest.com/WSenjuW/"
            >
              <FaPinterest />
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}
