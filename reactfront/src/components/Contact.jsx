import React from "react";
import "../App.css";
import { Card, Input, Button } from "@material-tailwind/react";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Popup } from "react-leaflet";

export const IconLocation = L.icon({
  iconUrl: require("../assets/location.svg"),
  iconRetinaUrl: require("../assets/location.svg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon"
})

function Contact() {
  return (

    <section className="text-gray-600 h-[100vh] z-40 justify-center flex align-middle body-font relative">


    
{/* Pantalla chica: h-5/6 w-5/6 */}
{/* Pantalla Grande: h-3/5 w-5/6 */}
    <MapContainer className="xl:h-3/5 xl:w-5/6 h-5/6 w-5/6 flex xl:justify-end lg:items-center md:items-center justify-center rounded-3xl" center={{lat: '-27.4649353', lng: '-58.805059'}} zoom={14}>
      
    
    {/* Pantalla Grande: px-5 h-5/6 my-12 */}
    {/* Pantalla Chica: px-4 h-3/6 */}

    <div className="container px-4 h-3/6 xl:h-5/6 xl:px-5 xl:my-12 mx-auto lg:items-center flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-3xl z-10  p-8 flex items-center flex-col md:ml-auto w-full 2xl:mt-10 mt-4 md:mt-0 relative shadow-md">
        <h2 className="text-gray-900 text-lg font-black title-font mt-16 mb-5">Contactanos</h2>
        <p className="leading-relaxed text-gray-600 font-bold mb-16">Contactate con nosotros para aplicar mejoras en este proyecto</p>
        <div class="flex justify-center justify-items-center gap-6">
          <div className="relative mb-10">
          Email
            <a href="/" className="leading-7 text-sm text-gray-600 font-semibold justify-center flex mt-1">
            <svg width="45" height="45" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 22.5C4.72989 22.5 3.87145 22.1444 3.23851 21.5115C2.60558 20.8786 2.25 20.0201 2.25 19.125V7.875C2.25 6.97989 2.60558 6.12145 3.23851 5.48851C3.87145 4.85558 4.72989 4.5 5.625 4.5H21.375C22.2701 4.5 23.1286 4.85558 23.7615 5.48851C24.3944 6.12145 24.75 6.97989 24.75 7.875V19.125C24.75 20.0201 24.3944 20.8786 23.7615 21.5115C23.1286 22.1444 22.2701 22.5 21.375 22.5H5.625ZM8.57812 9.2475C8.46353 9.14964 8.33044 9.07581 8.18675 9.03038C8.04307 8.98495 7.89173 8.96885 7.7417 8.98303C7.59168 8.99721 7.44603 9.04139 7.31341 9.11295C7.18078 9.1845 7.06389 9.28197 6.96966 9.39957C6.87543 9.51717 6.80579 9.6525 6.76486 9.79753C6.72394 9.94256 6.71257 10.0943 6.73143 10.2438C6.75029 10.3934 6.799 10.5375 6.87466 10.6679C6.95032 10.7982 7.05139 10.912 7.17188 11.0025L11.3906 14.3786C11.9892 14.8579 12.7332 15.119 13.5 15.119C14.2668 15.119 15.0108 14.8579 15.6094 14.3786L19.8281 11.0036C19.9435 10.9113 20.0396 10.7971 20.1108 10.6677C20.1821 10.5382 20.2272 10.396 20.2435 10.2491C20.2598 10.1022 20.247 9.95357 20.2058 9.81163C20.1647 9.6697 20.096 9.53726 20.0036 9.42188C19.9113 9.30649 19.7971 9.21043 19.6677 9.13916C19.5382 9.0679 19.396 9.02283 19.2491 9.00653C19.1022 8.99024 18.9536 9.00303 18.8116 9.04418C18.6697 9.08533 18.5373 9.15404 18.4219 9.24637L14.2031 12.6214C14.0036 12.7811 13.7556 12.8682 13.5 12.8682C13.2444 12.8682 12.9964 12.7811 12.7969 12.6214L8.57812 9.24637V9.2475Z" fill="black"/>
            </svg>

            </a>
            
          </div>
          <div class="relative mb-4">
          Whatsapp
            <a href="/" className="leading-7 text-sm text-gray-600 font-semibold justify-center flex mt-1">
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.05 4.91006C18.1332 3.98399 17.0412 3.24973 15.8376 2.75011C14.6341 2.25049 13.3431 1.99552 12.04 2.00006C6.57999 2.00006 2.12999 6.45006 2.12999 11.9101C2.12999 13.6601 2.58999 15.3601 3.44999 16.8601L2.04999 22.0001L7.29999 20.6201C8.74999 21.4101 10.38 21.8301 12.04 21.8301C17.5 21.8301 21.95 17.3801 21.95 11.9201C21.95 9.27006 20.92 6.78006 19.05 4.91006ZM12.04 20.1501C10.56 20.1501 9.10999 19.7501 7.83999 19.0001L7.53999 18.8201L4.41999 19.6401L5.24999 16.6001L5.04999 16.2901C4.22773 14.977 3.79113 13.4593 3.78999 11.9101C3.78999 7.37006 7.48999 3.67006 12.03 3.67006C14.23 3.67006 16.3 4.53006 17.85 6.09006C18.6175 6.85402 19.2257 7.76272 19.6394 8.76348C20.0531 9.76425 20.264 10.8372 20.26 11.9201C20.28 16.4601 16.58 20.1501 12.04 20.1501ZM16.56 13.9901C16.31 13.8701 15.09 13.2701 14.87 13.1801C14.64 13.1001 14.48 13.0601 14.31 13.3001C14.14 13.5501 13.67 14.1101 13.53 14.2701C13.39 14.4401 13.24 14.4601 12.99 14.3301C12.74 14.2101 11.94 13.9401 11 13.1001C10.26 12.4401 9.76999 11.6301 9.61999 11.3801C9.47999 11.1301 9.59999 11.0001 9.72999 10.8701C9.83999 10.7601 9.97999 10.5801 10.1 10.4401C10.22 10.3001 10.27 10.1901 10.35 10.0301C10.43 9.86006 10.39 9.72006 10.33 9.60006C10.27 9.48006 9.76999 8.26006 9.56999 7.76006C9.36999 7.28006 9.15999 7.34006 9.00999 7.33006H8.52999C8.35999 7.33006 8.09999 7.39006 7.86999 7.64006C7.64999 7.89006 7.00999 8.49006 7.00999 9.71006C7.00999 10.9301 7.89999 12.1101 8.01999 12.2701C8.13999 12.4401 9.76999 14.9401 12.25 16.0101C12.84 16.2701 13.3 16.4201 13.66 16.5301C14.25 16.7201 14.79 16.6901 15.22 16.6301C15.7 16.5601 16.69 16.0301 16.89 15.4501C17.1 14.8701 17.1 14.3801 17.03 14.2701C16.96 14.1601 16.81 14.1101 16.56 13.9901Z" fill="black"/>
            </svg>

            </a>
           
          </div>
          <div class="justify-center mb-4">
          Instagram
            <a href="/" className="leading-7 text-sm text-gray-600 font-semibold justify-center flex mt-2">
            <svg width="45" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.5 6.5H17.51M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7616 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </a>
          </div>
          <div className="justify-center mb-4">
          Linkedin
            <a href="/" className="leading-7 text-sm text-gray-600 font-semibold justify-center flex">
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" fill="black"/>
            </svg>

            </a>
          </div>
        </div>
        
      </div>
    </div>

    <div className="-z-40">
    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
      <Marker position={{lat: '-27.4649353', lng: '-58.823859'}} icon={IconLocation}>
      <Popup>
        Visitanos <br /> Avenida Pujol 2011
      </Popup>
      </Marker>
    </div>
    
    </MapContainer>

   
  </section>    
  )
}

export default Contact;
