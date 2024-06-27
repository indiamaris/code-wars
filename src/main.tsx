
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '/src/app/router/router.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/material-symbols-outlined';
ReactDOM.createRoot(document.getElementById('root')!).render(
     <RouterProvider router={router} />
)
