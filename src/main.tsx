import {StrictMode} from 'react'

import {createRoot} from 'react-dom/client'

import {App} from './App'

import './styles/index.scss'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/300.css'
import {HashRouter} from "react-router-dom";

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </StrictMode>
)