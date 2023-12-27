import React from 'react'

import { Button, Label, Input } from "./ui";


function Login() {
  return (

    <div class="bg-white flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Iniciar sesion</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>

            <Label htmlFor='email'> Email</Label>


            <div class="mt-2">
            </div>
            <Input 
            id='email'
            name='email'
            type='email'
            required
            placeholder='usiario@gmail.com'/>
          </div>

          <div>
            <div class="flex items-center justify-between">
              
            <Label htmlFor='passrowd'> Clave </Label>

              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Olvidaste tu clave?</a>
              </div>
            </div>

            <div class="mt-2">
            <Input 
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
            placeholder='*****'/>
            </div>
          </div>

          <div class="flex items-center justify-between">
          <Button
              className=" border border-black w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-black"
              type="submit"
            >
              {" "}
              Ingresar{" "}
            </Button>
            </div>
        </form>

        <p class= "mt-10 text-center text-sm text-gray-500"> <a href="./register">   Aun no tenes tu usuario? Registrate!</a>
       

        </p>
      </div>
    </div>


  );
}

export default Login