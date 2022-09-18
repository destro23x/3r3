import React from "react";

export default function Investors() {
  return (
    <section id="investors">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Dzień dobry,
            <br className="hidden lg:inline-block" />Drogi inwestorze
          </h1>
          <p className="mb-8 leading-relaxed">
            Jeśli chciałbyś rozpocząć współpracę i przyłączyć się do projektu, bo podzielasz nasze wartości i pomysły to zapraszamy do kontaktu. Nie zamykamy się na nic dlatego jeśli masz jakąś propozycję lub chciałbyś dołączyć pisz na twittera, facebooka, instagrama, maila lub poprostu zadzwoń lub zapukaj jeśli jesteś blisko :)
          </p>
           <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Kontakt
            </a>
            {/*<a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Kontakt
            </a>*/}
          </div> 
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./cooperation_lr.jpg"
          />
        </div>
      </div>
    </section>
  );
}