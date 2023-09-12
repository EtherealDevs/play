import React from "react";
import "../App.css";
import { Card, Input, Button } from "@material-tailwind/react";

function Contact() {
  return (
<<<<<<< HEAD
    <section className="text-gray-600 h-[100vh] z-30 body-font relative">

    <div className="container px-5 py-24 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative shadow-md">
        <h2 className="text-gray-900 text-lg font-medium title-font">Contactanos</h2>
        <p className="leading-relaxed mb-2 text-gray-600">Contactate con nosotros para aplicar mejoras en este proyecto</p>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label for="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
          </div> 
          <div className="drawer-side">
            <label for="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          
              <li><a>Veterinaria 1</a></li>
              <li><a>Veterinaria 2</a></li>
              
            </ul>
          </div>
        </div>
        <div class="flex justify-center justify-items-center gap-6">
          <div className="relative mb-4">
            <a href="" className="leading-7 text-sm text-gray-600">Email
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            
          </div>
          <div class="relative mb-4">
            <a href="" className="leading-7 text-sm text-gray-600">Whatsapp
            
            
            </a>
           
          </div>
          <div class="relative mb-4">
            <a href="" className="leading-7 text-sm text-gray-600">Twitter
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
            </a>
          </div>
          <div class="justify-center mb-4">
            <a href="#" className="leading-7 text-sm text-gray-600">Instagram
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" clasName="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </div>
          <div className="justify-center mb-4">
            <a href="" className="leading-7 text-sm text-gray-600">Linkedin
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  </section>    
  )
=======
    <section id="Contact" className="h-full w-full">
      <div className="flex mt-10 items-center justify-center mb-24">
        <Card
          color="transparent"
          className="justify-center  xl:p-32 p-5"
          shadow={false}
        >
          <h1 className="font-bold italic text-5xl text-white">Contactanos</h1>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex gap-6">
              <ul grid grid-cols-3 className>
                <li>
                  <a href="https://www.instagram.com/play.multiespacioinfantil/">
                    <svg
                      width="79"
                      height="79"
                      viewBox="0 0 79 79"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    />
                    <path
                      d="M42.8838 6.58663C45.2859 6.57741 47.6879 6.60155 50.0893 6.65905L50.7279 6.68209C51.4652 6.70842 52.1926 6.74134 53.0715 6.78084C56.5738 6.94542 58.9636 7.49842 61.0604 8.31146C63.2329 9.14755 65.0631 10.2799 66.8932 12.11C68.5666 13.7546 69.8617 15.7439 70.6885 17.9396C71.5016 20.0364 72.0546 22.4294 72.2191 25.9318C72.2586 26.8073 72.2916 27.5381 72.3179 28.2754L72.3376 28.914C72.3961 31.3143 72.4214 33.7152 72.4134 36.1162L72.4166 38.5718V42.8838C72.4248 45.2859 72.3995 47.6879 72.3409 50.0893L72.3212 50.7279C72.2949 51.4652 72.2619 52.1927 72.2224 53.0715C72.0579 56.5739 71.4983 58.9636 70.6885 61.0604C69.8644 63.2585 68.569 65.2494 66.8932 66.8933C65.2473 68.5665 63.257 69.8615 61.0604 70.6885C58.9636 71.5016 56.5738 72.0546 53.0715 72.2192C52.1926 72.2587 51.4652 72.2916 50.7279 72.3179L50.0893 72.3377C47.6879 72.3962 45.2859 72.4214 42.8838 72.4134L40.4282 72.4167H36.1194C33.7174 72.4248 31.3153 72.3995 28.914 72.341L28.2754 72.3212C27.494 72.2929 26.7128 72.26 25.9317 72.2225C22.4294 72.0579 20.0397 71.4983 17.9396 70.6885C15.743 69.8635 13.7534 68.5681 12.11 66.8933C10.4347 65.2484 9.13839 63.2578 8.31145 61.0604C7.4984 58.9636 6.9454 56.5739 6.78082 53.0715C6.74416 52.2905 6.71124 51.5093 6.68207 50.7279L6.66561 50.0893C6.60493 47.688 6.57749 45.2859 6.58332 42.8838V36.1162C6.57413 33.7152 6.59827 31.3143 6.65574 28.914L6.67878 28.2754C6.70511 27.5381 6.73803 26.8073 6.77753 25.9318C6.94211 22.4261 7.49511 20.0397 8.30815 17.9396C9.13559 15.7428 10.4345 13.7541 12.1133 12.1133C13.7555 10.4371 15.7439 9.13956 17.9396 8.31146C20.0397 7.49842 22.4261 6.94542 25.9317 6.78084L28.2754 6.68209L28.914 6.66563C31.3142 6.60498 33.7152 6.57754 36.1161 6.58334L42.8838 6.58663ZM39.5 23.045C37.3193 23.0141 35.1542 23.417 33.1305 24.2302C31.1069 25.0434 29.265 26.2506 27.712 27.7819C26.159 29.3131 24.9258 31.1377 24.0841 33.1496C23.2424 35.1615 22.8089 37.3207 22.8089 39.5017C22.8089 41.6826 23.2424 43.8418 24.0841 45.8537C24.9258 47.8657 26.159 49.6902 27.712 51.2215C29.265 52.7527 31.1069 53.9599 33.1305 54.7731C35.1542 55.5863 37.3193 55.9892 39.5 55.9583C43.865 55.9583 48.0512 54.2243 51.1378 51.1378C54.2243 48.0513 55.9583 43.865 55.9583 39.5C55.9583 35.135 54.2243 30.9487 51.1378 27.8622C48.0512 24.7757 43.865 23.045 39.5 23.045ZM39.5 29.6283C40.8117 29.6041 42.1152 29.8416 43.3341 30.3268C44.5531 30.812 45.6631 31.5353 46.5994 32.4543C47.5357 33.3734 48.2794 34.4698 48.7872 35.6795C49.295 36.8892 49.5567 38.188 49.5569 39.5C49.5571 40.8119 49.2959 42.1108 48.7885 43.3207C48.2811 44.5306 47.5377 45.6272 46.6017 46.5466C45.6657 47.466 44.5559 48.1896 43.3372 48.6752C42.1184 49.1608 40.815 49.3987 39.5033 49.375C36.8843 49.375 34.3725 48.3346 32.5206 46.4827C30.6687 44.6308 29.6283 42.119 29.6283 39.5C29.6283 36.881 30.6687 34.3692 32.5206 32.5173C34.3725 30.6654 36.8843 29.625 39.5033 29.625L39.5 29.6283ZM56.7812 18.1075C55.7193 18.15 54.715 18.6017 53.9787 19.3681C53.2424 20.1344 52.8312 21.156 52.8312 22.2188C52.8312 23.2815 53.2424 24.3031 53.9787 25.0694C54.715 25.8358 55.7193 26.2875 56.7812 26.33C57.8725 26.33 58.919 25.8965 59.6907 25.1249C60.4623 24.3533 60.8958 23.3067 60.8958 22.2155C60.8958 21.1242 60.4623 20.0776 59.6907 19.306C58.919 18.5344 57.8725 18.1009 56.7812 18.1009V18.1075Z"
                      fill="white"
                    />
                  </a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
              </ul>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
>>>>>>> e013e67b88c3d25f2dff226877e78eb2fabc6dee
}

export default Contact;
