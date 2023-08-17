import React from 'react'
import '../App.css'
import { Card, Input, Button } from "@material-tailwind/react";

function Contact() {
  return (
    <section id='Contact' className='h-full w-full'>
      <div className="flex mt-10 items-center justify-center mb-24">
        <div className='mb-10'>
              <div className='puzzle mt-15 md:mt-10'>
                <div className='justify-center'>
                      <div className='flex'>
                        <Card color="transparent" className='backdrop-blur-lg border justify-center border-white xl:p-32 p-5' shadow={false}>
                        <h1 className="font-bold italic text-5xl text-white">Consulta</h1>
                          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                              <Input color='white' size="lg" label="Nombre" />
                              <Input color='white' size="lg" label="Email" />
                              <Input color='white' size="lg" label="Telefono" />
                              <Input color='white' size="lg" label="Mensaje" />
                            </div>
                            <Button className="mt-16 bg-purple-300" fullWidth>
                              Enviar
                            </Button>
                          </form>
                        </Card>
                      </div>
                    </div>
                </div>
              </div>
      </div>
    </section>
  )
}

export default Contact