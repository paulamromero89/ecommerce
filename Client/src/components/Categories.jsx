import React from "react";

const Categories = () => {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header class="text-center">
            <h2 class="text-xl font-bold text-gray-100 sm:text-3xl">
              Trending collections
            </h2>

            <p class="mx-auto mt-2 max-w-md text-gray-500">
              CLasicos infalibles
            </p>
          </header>

          <ul class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <a href="#" class="group relative block">
                <img
                  src="https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EQ/EQS/EQS-930DB-1AV/assets/EQS-930DB-1AV_Seq2.jpg.transform/main-visual-sp/image.jpg"
                  alt=""
                  class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h2 class="text-xl font-medium text-white">Edifice</h2>

                  <button className="mt-1.5 inline-block px-5 py-3 text-xs font-medium uppercase tracking-wide text-white border corder-white round">
                    Explorar
                  </button>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="group relative block">
                <img
                  src="https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/B/BG/BG1/bg-169pb-2/assets/BG-169PB_kv.jpg.transform/product-panel/image.jpg"
                  alt=""
                  class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h2 class="text-xl font-medium text-white">Baby G</h2>

                  <button className="mt-1.5 inline-block px-5 py-3 text-xs font-medium uppercase tracking-wide text-white border corder-white round">
                    Explorar
                  </button>
                </div>
              </a>
            </li>

            <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" class="group relative block">
                <img
                  src="https://casiofanmag.com/wp-content/uploads/2020/03/g-shock-mrg-b2000sh-shougeki-maru-inspired-by-samurai-kabuto-3.jpg"
                  alt=""
                  class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h2 class="text-xl font-medium text-white">G-SHOCK</h2>

                  <button className="mt-1.5 inline-block px-5 py-3 text-xs font-medium uppercase tracking-wide text-white border corder-white round">
                    Explorar
                  </button>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Categories;
