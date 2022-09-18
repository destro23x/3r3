import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Nasz cel
            <br className="hidden lg:inline-block" />3r3
          </h1>
          <p className="mb-8 leading-relaxed">
            Cel, który sobie obraliśmy to zwiększenie reużywalności opakowań szklanych, wyrobów szklanych i zawierających szkło. Dzięki temu będziemy bliźsi ochronie środowiska, zaoszczędzimy energię, czas, pracę i zasoby ludzkie. Myślałeś o tym ile szkła dziennie marnuje się chociaź mogłoby być wykorzystane ponownie ? Są to gigantyczne ilości liczone w setkach ton dziennie. Energia do ponownego przetopienia szkła jest ogromna i również kosztuje. Poprzez wprowadzenie teoretycznie już zużytych opakowań konsumenci odzyskują część pieniędzy za opakowanie i zaoszczędzają na wywozie śmieci, producenci odzyskują opakowanie
            i razem znajdujemy się odrobine bliżej aby chronić naszą planetę. Nie płać za opakowanie, płać za produkt!
            {/* Kilka wyliczeń planujemy zając się produktów szklanych
            Nie mówiąc juz o zgubnym wpływie na środowisko naturalne. A gdyby na tym jeszcze zarobić ? */}
            
          </p>
          <div className="flex justify-center">
            <a
              href="#products"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Produkty
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Kontakt
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./3r3_dark.svg"
          />
        </div>
      </div>
    </section>
  );
}