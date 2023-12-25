import React from 'react'

import { Button, Label, Input } from "./ui";


function Register() {
  return (

    <div class="bg-white flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Completa tu registro</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>

            <Label htmlFor='email'> Email Adress</Label>


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
              
            <Label htmlFor='passrowd'> Password </Label>

              
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

          <div>



          <div>

<Label htmlFor='email'> Nombre </Label>


<div class="mt-2">
</div>
<Input 
id='name'
name='name'
type='text'
required
placeholder='Juan'/>
</div>

<div>

<Label htmlFor='email'> Apellido </Label>


<div class="mt-2">
</div>
<Input 
id='lastName'
name='lastName'
type='text'
required
placeholder='Perez'/>
</div>



            <Button className=' border border-black w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-black'
            type="submit"> Registrarse </Button>

          </div>
        </form>

        
   
      </div>
    </div>


  );
}

export default Register