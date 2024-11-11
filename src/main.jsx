import React from 'react'
import ReactDOM from 'react-dom/client'

// import './assets/css/index.css';
// import App from './App';

import './assets/css/MaquetacionCurso/styles.css';
import { GifExpertApp } from './components/GifExpertApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        <GifExpertApp />
    </React.StrictMode>,
)
