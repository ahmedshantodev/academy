import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container px-4 md:px-0 sm:flex flex-wrap text-white py-16 tsext-center">
        <div className="w-full md:w-2/4 mb-7 md:mb-0">
          <h2 className="font-mono text-2xl lg:text-3xl">About us</h2>

          <p className="w-[80%] sm:w-full md:w-[80%] mt-2 md:mt-5 text-base lg:text-[19px]">
            Transform your coding career with our immersive web and app
            development courses. Whether you're starting from scratch or looking
            to master new technologies, our programs will help you reach new
            heights.
          </p>
        </div>

        <div className="w-full sm:w-2/4 md:w-1/4 mb-7 md:mb-0">
          <h2 className="font-mono text-2xl lg:text-3xl">Follow us</h2>

          <ul className="mt-5 text-base lg:text-xl">
            <li className="mb-2">
              <a target="_blank" href={"www.facebook.com"}>
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a target="_blank" href={"www.facebook.com"}>
                Twitter
              </a>
            </li>
            <li className="mb-2">
              <a target="_blank" href={"www.facebook.com"}>
                Instragram
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-2/4 md:w-1/4">
          <h2 className="font-mono text-2xl lg:text-3xl">Let’s Talk</h2>

          <ul className="mt-5 text-base lg:text-xl">
            <li className="mb-2">
              <a href="mailto:example@gamil.com">email: example@gamil.com</a>
            </li>
            <li className="mb-2">
              <a href="tel:0123456789">phone: 0123456789</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
