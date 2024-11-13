// Подключение game.ts для управления игровыми функциями
import { App } from './app';
import { DataLoader } from './DataLoader';
import '../styles/index.css'
import { MobileMenu } from './mobileMenu';
import { initBottomPanelToggle } from './bottomPanelToggle';
import { initViewToggle } from './toggleView';

export class GameApp {
    private gameId: string;

    constructor(gameId: string) {
        this.gameId = gameId;
    }

    init(gameUrl: string) {
        // Логика для запуска игры
        console.log(`Игра с ID ${this.gameId} запущена.`);
        const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
        if (iframe) {
            iframe.src = gameUrl;
        } else {
            console.error('Game iframe not found');
        }
    }
}

// Запуск приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('gameId');
    const gameUrl = params.get('gameUrl');

    console.log('init game')
    initBottomPanelToggle();
    initViewToggle()

    // TODO: защита от XSS атаки, включить когда будут права на cloud
    // const allowedDomains = ['your-allowed-domain.com'];
    // const url = new URL(gameUrl);
    // if (!allowedDomains.includes(url.hostname)) {
    //     console.error('Недопустимый URL игры');
    //     return;
    // }

    if (!(window as any).mobileMenuInitialized) {
        const mobileMenu = new MobileMenu('hamburger-button', 'mobile-menu');
        mobileMenu.init();
        console.log('MobileMenu initialized.');
        (window as any).mobileMenuInitialized = true;
    }

    if (gameId && gameUrl) {
        const gameApp = new GameApp(gameId);
        gameApp.init(gameUrl);
    } else {
        // const dataLoader = new DataLoader('/');
        // const app = new App(DataLoader.getMockData());
        // app.init();
    }
});


