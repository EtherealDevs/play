import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";

function CardSkills() {
    return (
    <Carousel
    transition={{ duration: 1 }}
    loop={{boolean: true}}
    autoplay={{boolean: true}}
    className="rounded-xl overflow-hidden"
    navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/20"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}>
        <div className="relative h-full w-full">
        <img
            src="https://images.unsplash.com/photo-1605627079912-97c3810a11a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2214&q=80"
            alt="img 1"
            className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
            <div className="w-3/4 text-center md:w-2/4">
            <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
                Veni a Aprender Divirtiendote
            </Typography>
            <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-sm sm:text-xl"
            >
                Tenemos Variedad de Juegos y Juguetes para que tu Hijo se divierta y aprenda de la manera mas divertida
            </Typography>
            </div>
        </div>
        </div>
        <div className="relative h-full w-full">
        <img
            src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80"
            alt="img 2"
            className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
                Enseñanza
            </Typography>
            <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-sm sm:text-xl"
            >
               Enseñamos a tu hijo cosas utiles para su desarrollo en la vida, dedicamos mucho tiempo para enseñar a tu hijo muchas cosas, preparate para que aprenda de la manera mas divertida
            </Typography>
            </div>
        </div>
        </div>
        <div className="relative h-full w-full">
        <img
            src="https://images.unsplash.com/photo-1630465651806-09682f8364b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd1YXJkZXJpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="img 3"
            className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/40">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
                Personal Especializado
            </Typography>
            <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-sm sm:text-xl"
            >
                Nuestro personal es el indicado para educar a tu Hijo, tenemos personal capacitado para educar y enseñar a tu hijo
            </Typography>
            </div>
        </div>
        </div>
  </Carousel>
    )
}

export default CardSkills