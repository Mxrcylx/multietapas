import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider, theme} from '@chakra-ui/react'
import { global } from './GlobalStyle/Global.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={global}>
    <App />
  </ChakraProvider>
  </React.StrictMode>,
)
