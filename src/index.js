import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from './theme';


ReactDOM.render(
  <ChakraProvider>
   
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
