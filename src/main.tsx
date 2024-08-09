import { createRoot } from 'react-dom/client';
import App from './App';
import './css/tailwind.css';
import { StrictMode } from 'react';

const container = document.createElement('div');
container.id = 'root';
document.body.append(container);

window.addEventListener('error', (event) => console.error(event.error));

createRoot(container).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
