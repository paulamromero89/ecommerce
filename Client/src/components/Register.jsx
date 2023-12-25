import React from 'react'
import { Button, Label, Input } from "./ui";
    
    
    const Register =() => {
      return (
    
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
          </div>
    
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
    
                <Label htmlFor='email'> Email Adress</Label>
    
    
                <div className="mt-2">
                </div>
                <Input 
                id='email'
                name='email'
                type='email'
                required
                placeholder='usiario@gmail.com'/>
              </div>
    
              <div>
                <div className="flex items-center justify-between">
                  
                <Label htmlFor='passrowd'> Password </Label>
    
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div>
                </div>
    
                <div className="mt-2">
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
    
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
            </p>
          </div>
        </div>
    
    
      );
    }
    

export default Register;