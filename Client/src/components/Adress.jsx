import React from "react";

import { Button, Label, Input } from "./ui";

function Adress() {
  return (
    <div class="bg-white flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Completa los datos de envio
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST" />
        <div class="mt-2">
          <Label htmlFor="name"> Direccion </Label>
          <Input
            id="adress"
            name="adress"
            type="text"
            required
            placeholder="San Martin 1000"
          />

          <Label htmlFor="name"> Cuidad</Label>
          <Input
            id="city"
            name="city"
            type="text"
            required
            placeholder="Cordoba"
          />

          <Label htmlFor="name"> Codigo Postal</Label>
          <Input
            id="zipcode"
            name="zipcode"
            type="number"
            required
            placeholder="5000"
          />

          <Label htmlFor="name"> Provincia </Label>
          <Input
            id="province"
            name="province"
            type="text"
            required
            placeholder="Cordoba"
          />

          <Label htmlFor="name"> Pais </Label>
          <Input
            id="country"
            name="country"
            type="text"
            required
            placeholder="Argentina"
          />

          <Label htmlFor="name"> Telefono </Label>
          <Input
            id="phone"
            name="phone"
            type="number"
            required
            placeholder="3512313210"
          />

          <Label htmlFor="name"> Indicaciones </Label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-black bg-white-lg  border border-gray-300 ronuded"
            placeholder="Indicaciones para encontrar tu domicilio..."
          ></textarea>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <Button
          className=" border border-black w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-black"
          type="submit"
        >
          {" "}
          Confirmar datos{" "}
        </Button>
      </div>
    </div>
  );
}

export default Adress;
