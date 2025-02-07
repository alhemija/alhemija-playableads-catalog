// src/index.ts
import './styles/index.css';
import { data } from './scripts/data';
import { App } from "./scripts/app";
import { DataLoader } from "./scripts/DataLoader";
import { MobileMenu } from './scripts/mobileMenu';
import { createMobileScrollEffect } from './scripts/mobileScrollEffect';


//Временное решения убрать из глобального контекста
let hasInitialized = false;

const initApp = (): void => {
    console.log('init app',hasInitialized)
    if (hasInitialized) {
        return;
      }
      hasInitialized = true;

    const dataLoader = new DataLoader('/')
    const app = new App(DataLoader.getMockData())
    app.init()

    createMobileScrollEffect()

    if (!(window as any).mobileMenuInitialized) {
        const mobileMenu = new MobileMenu('hamburger-button', 'mobile-menu');
        mobileMenu.init();
        console.log('MobileMenu initialized.');
        (window as any).mobileMenuInitialized = true;
    }
}

if (document.readyState === 'loading') {
    console.log('Hello')
    document.addEventListener('DOMContentLoaded', initApp)
} else {
    console.log('world')
    initApp()
}





