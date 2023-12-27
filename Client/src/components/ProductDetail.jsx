import React from "react";

function ProductDetail() {
  return (
    <div>
      <div className="bg-white">
        <div class="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                    G-SHOCK
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                    ANALOGICO
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li class="text-sm">
                <a
                  href="#"
                  aria-current="page"
                  class="font-medium text-gray-500 hover:text-gray-600"
                >
                  Serie GA 2100{" "}
                </a>
              </li>
            </ol>
          </nav>

          <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src="https://www.casio.com/content/dam/casio/product-info/locales/latin/es-ar/timepiece/product/watch/G/GA/GA2/ga-2100fr-5a/assets/GA-2100FR-5A_01.png.transform/main-visual-pc/image.png"
                alt="Two each of gray, white, and black shirts laying flat."
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src="https://www.casio.com/content/dam/casio/product-info/locales/latin/es-ar/timepiece/product/watch/G/GA/GA2/ga-2100fr-5a/assets/GA-2100FR-5A_N.png.transform/main-visual-pc/image.png"
                  alt="Model wearing plain black basic tee."
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src="https://www.casio.com/content/dam/casio/product-info/locales/latin/es-ar/timepiece/product/watch/G/GA/GA2/ga-2100fr-5a/assets/GA-2100FR-5A_03.png.transform/main-visual-pc/image.png"
                  alt="Model wearing plain gray basic tee."
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src="https://www.casio.com/content/dam/casio/product-info/locales/latin/es-ar/timepiece/product/watch/G/GA/GA2/ga-2100fr-5a/assets/GA-2100FR-5A_04.png.transform/main-visual-pc/image.png"
                alt="Model wearing plain white basic tee."
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Serie GA-2100
              </h1>
            </div>

            <div class="mt-4 lg:row-span-3 lg:mt-0">
              <h2 class="sr-only">Informacion del producto</h2>
              <p class="text-3xl tracking-tight text-gray-900">U$D192.0</p>

              <div class="mt-6">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="text-gray-200 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="sr-only">4 estrellas</p>
                  <a
                    href="#"
                    class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    117 reviews
                  </a>
                </div>
              </div>

              <button
                type="submit"
                class="mt-10 flex w-full justify-center border border-black text-black  py-2 px-4 rounded-full p-4"
              >
                Agregar al carrito
              </button>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 class="sr-only">Sobre este producto</h3>

                <div class="space-y-6">
                  <p class="text-base text-gray-900">
                    Aventúrese en bosques misteriosos y paisajes mágicos con los
                    colores tenues llenos de misterio de G-SHOCK. Con marcos y
                    correas elaborados de resinas de colores mixtos, estos
                    relojes Mystic Forest presentan un acabado único que evoca
                    espirales de pintura con verde y amarillo, marrón y naranja.
                  </p>
                </div>
              </div>

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

                <div class="mt-4">
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                    <li class="text-gray-400">
                      <span class="text-gray-600">Resistente a impactos</span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Resistente al agua 20 bares
                      </span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">Iluminacion de pantalla</span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">Ligero y resistente</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-10">
                <h2 class="text-sm font-medium text-gray-900">
                  Detalles del producto
                </h2>

                <div class="mt-4 space-y-6">
                  <p class="text-sm text-gray-600">
                    Un diseño octagonal que combina perfecto con tus días,
                    reforzado con carbono y resina le da una resistencia
                    absoluta inigualable..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
