import React from 'react'

import { Button, Label, Input } from "./ui";


function Login() {
  return (

    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
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

              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
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

          <div>

            <Button
            type="submit"> Sign in </Button>

          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
        </p>
      </div>
    </div>


  );
}

export default Login