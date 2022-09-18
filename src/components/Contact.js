import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

export default function Contact() {
  const form = useRef();
  const recaptchaRef = React.createRef();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function onChange(value) {
    console.log("Captcha value:", value);
  }
  function onErrored(value) {
    console.log("Captcha value:", value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (recaptchaRef.current.getValue() != ""){
      emailjs.sendForm('service_w36d5yi', '3r3inc_template', form.current, '4hy4npjVp-KoCTPXk')
        .then((result) => {
          alert("Wiadomość wysłana!")
        }, (error) => {
          console.log(error.text);
        });
    }
    else{
      alert("Recaptcha nie wypełniona")
    }
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.0994303933935!2d18.408655415595373!3d54.56699929027996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda4ff18823d73%3A0xff28e7735bbbc4ef!2sGda%C5%84ska%2033%2C%2084-230%20Rumia!5e0!3m2!1spl!2spl!4v1655669423778!5m2!1spl!2spl&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              ADRES
              </h2>
              <p className="mt-1">
                ul. Gdańska 33/57 <br />
                84-230 Rumia
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                3r3.inc@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                TELEFON
              </h2>
              <p className="leading-relaxed">506-765-420</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-5">
        {/* pingować firmy na portalach */}
          <a href="https://fb.com/3r3.inc" target="_blank"><FontAwesomeIcon
                                              icon={["fab", "fa-facebook"]}
                                              className="second-icon"
                                              size="5x"
                                          /></a>
          
          <a href="https://www.instagram.com/3r3.inc/" target="_blank"><FontAwesomeIcon
                                              icon={["fab", "fa-instagram"]}
                                              className="second-icon"
                                              size="5x"
                                          /></a>
          <a href="https://twitter.com/Inc3r3" target="_blank"><FontAwesomeIcon
                                              icon={["fab", "fa-twitter"]}
                                              className="second-icon"
                                              size="5x"
                                          /></a>
        </div>
        <form
          ref={form}
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Kontakt
          </h2>
          <p className="leading-relaxed mb-5">
            Nasze biuro jest czynne: <br />
            pn-pt od 9.00 do 17.00
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Temat
            </label>
            <input
              type="text"
              id="name"
              name="subject"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LcGv-YgAAAAAFeEBgRukgt-Ix5ji14SODA2wAZA"
            onChange={onChange}
            onErrored={onErrored}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Wyślij
          </button>
        </form>
      </div>
    </section>
  );
}