import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Label, Input } from "./ui";
import Dropdown from "./ui/Dropdown";
import axios from "axios"


const CreateProduct = () => {

  /* const categories = async()=>{
    const response= await Axios.get("/getCategories")
  } */

  
  const categories = axios.get("http://localhost:3001/getCategories")
  .then(response => {
    /* console.log(response.data) */
    return response.data
  })
  .catch(err => {
    console.log(err)
  })

  console.log(categories)

  const [category, setCategory]=useState(0);
  const [productName, setProductName]=useState("");
  const [brand, setBrand]=useState("");
  const [model, setModel]=useState("");
  const [description, setDescription]=useState("");
  const [price, setPrice]=useState(0);
  const [image, setImage]=useState("");
  
  const displayInfo = () => {
    console.log(category+productName+brand+model+description+price+image)
  }

  return (
    <div class="bg-white flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Cargar producto
        </h2>
      </div>

      <div className=" justify-between last:mt-10 sm:mx-auto ">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <div class="mt-2">

              <Label htmlFor="Nombre"> Nombre</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Ej. Reloj"
                onChange={(event) => {
                  setProductName(event.target.value)
                }}
              />
            
            <div>
              <Label htmlFor="Nombre"> Modelo</Label>
              <Input
                id="model"
                name="model"
                type="text"
                required
                placeholder="G-shock GA2100"
                onChange={(event) => {
                  setModel(event.target.value)
                }}
              />
            </div>

            <div>
              <Label htmlFor="Nombre">Descripcion</Label>
              <textarea
                id="description"
                name="description"
                rows="4"
                class="block p-2.5 w-full text-sm text-black bg-white-lg  border border-gray-300 ronuded"
                placeholder="Describe el producto..."
                onChange={(event) => {
                  setDescription(event.target.value)
                }}
              ></textarea>
            </div>

            <div>
              <Label htmlFor="Nombre">Imagen</Label>
              <Input
                id="img"
                name="img"
                type="url"
                required
                placeholder="http://.. "
                onChange={(event) => {
                  setImage(event.target.value)
                }}
              />
            </div>

            <div>
              <Label htmlFor="Nombre"> Precio</Label>

              <Input
                id="category"
                name="category"
                type="number"
                required
                placeholder="$1,00"
                onChange={(event) => {
                  setPrice(event.target.value)
                }}
              />
            </div>

            <div>
              <Label htmlFor="Nombre"> Categoria </Label>
              <Input
                id="category"
                name="category"
                type="number"
                required
                placeholder="1"
                onChange={(event) => {
                  setCategory(event.target.value)
                }}
              />
              {/* {<select
                onChange={(event) => {
                  setCategory(event.target.value)
                }}
                >
                  <option disabled>Seleccione una categoría</option>
                  {
                    categories.map((result)=>(<option key={result.idCategoria}>{result.Nombre}</option>))
                  } 
                </select>} */}
            </div>

            <Button
              className="border border-black w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-black"
              type="submit"
              onClick={displayInfo}
            >
              {" "}
              Crear Producto{" "}
            </Button>
            
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
