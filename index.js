import React from 'react';  

import ReactDomClient from 'react-dom/client'
import App from './src/App.js'                                                                                                                                                                  
onst container = document.getElementById('root');                                               
const root = ReactDomClient.createRoot(container);                                                           

root.render(<App />)
