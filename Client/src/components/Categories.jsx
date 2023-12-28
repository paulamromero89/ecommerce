import React from "react";

const Categories = () => {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header class="text-center">
            <h2 class="text-xl font-bold text-gray-100 sm:text-3xl">
              Categorías
            </h2>

            <p class="mx-auto mt-2 max-w-md text-gray-500">
              Selecciona una para explorar nuestros productos
            </p>
          </header>

          <ul class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <a href="#" class="group relative block">
                <img
                  src="https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/g-squad/dw-h5600/_jcr_content/root/responsivegrid/container_copy/teaser.casiocoreimg.jpeg/1686202977160/pc-w1920h816-logo.jpeg"
                  alt=""
                  class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h2 class="text-xl font-medium text-white">Digitales</h2>

                  <button className="mt-1.5 inline-block px-5 py-3 text-xs font-medium uppercase tracking-wide text-white border corder-white round">
                    Explorar
                  </button>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="group relative block">
                <img
                  src="https://www.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/G/GM/gmb/gm-b2100vf-1a/assets/GM-B2100VF-1A_kv.jpg"
                  alt=""
                  class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h2 class="text-xl font-medium text-white">Híbridos</h2>

                  <button className="mt-1.5 inline-block px-5 py-3 text-xs font-medium uppercase tracking-wide text-white border corder-white round">
                    Explorar
                  </button>
                </div>
              </a>
            </li>

            <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" class="group relative block">
                <img
                  src="https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/mr-g/_jcr_content/root/responsivegrid/container_1992688904/container_copy_copy_/content_panel_list_1328976270/content_panel_202204/image.casiocoreimg.jpeg/1703555414317/og-w800h800-logo-notext.jpeg"
                  alt=""
                  class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h2 class="text-xl font-medium text-white">Analógicos</h2>

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
