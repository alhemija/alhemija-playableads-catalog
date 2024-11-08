// src/index.ts
import './styles/index.css';
import { data } from './scripts/data';
import { App } from "./scripts/app";
import { DataLoader } from "./scripts/DataLoader";
import { MobileMenu } from './scripts/mobileMenu';
import { createMobileScrollEffect } from './scripts/mobileScrollEffect';

console.log('hello world');
const dataLoader = new DataLoader('/');

const app = new App(DataLoader.getMockData());
app.init();
createMobileScrollEffect()
// Проверка глобальной переменной для предотвращения двойной инициализации
if (!(window as any).mobileMenuInitialized) {
    const mobileMenu = new MobileMenu('hamburger-button', 'mobile-menu');
    mobileMenu.init();
    console.log('MobileMenu initialized.');
    (window as any).mobileMenuInitialized = true;
}
