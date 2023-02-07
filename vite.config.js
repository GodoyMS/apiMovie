import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server:{
    port:3000,
    
  },
  preview:{
    port:4270,
  },
  build:{
    outDir:'dist',
    //Acelerar proceso de compilacion de archivos
    incremental:true,
    //Habilitar trabajo conjunto con Babel, para manejo correcto de versionado de Js moderno a todos los navegadores
    babel:{
      presets:["@babel/preset-env","@babel/preset-react"]
    },
    //Para habilitar aceleracion de compilacion de TS a JS 
    typescript:{
      tsconfig:"./tsconfig.json",
    },

    //Habilitar una cache para optimizar el compilado de recursos en dist
    cache:true,

    //Habilitar la opcion de compresion optimizada para minimizar el tamaño de archivos
    minify:true,

    //Habilitar el modo de entorno generado (development, production)
    mode:'production',

    //Habilitar el build con chunks parcelados 
        // chunks normal->css y js en un mismo archivo
        // chunks optimizado ->srive recursos a medida que lo ocupa
    chunks:true,

    //Habilitar la configuracion para minimizar el tamaño de librerias que pasaran a produccion
    moduleBundling:true,

    //OPCIONALES
          //Precarga de modulos de rutas -- Hace una reserva previa de lo que tiene que cargar
          prerenderPaths:["/"], //ejemplo

          //pre-carga general del codigo antes de visitar
          modulePreload:true, 

    //Habilitar inspector de recomendaciones
    devCode:true,

    //Habilitar inspector de recomendaciones y errores
    debug:true,

    //Activar precarga de memoria y rutas


  }
})
