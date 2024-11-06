// Подключение game.ts для управления игровыми функциями
import { App } from './app';
import { DataLoader } from './DataLoader';


export class GameApp {
    private gameId: string;

    constructor(gameId: string) {
        this.gameId = gameId;
    }

    init() {
        // Логика для запуска игры
        console.log(`Игра с ID ${this.gameId} запущена.`);
        // Здесь будет логика работы с игрой
    }
}

// Запуск приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('gameId');
    if (gameId) {
        const gameApp = new GameApp(gameId);
        gameApp.init();
    } else {
        const dataLoader = new DataLoader('/');
        const app = new App(DataLoader.getMockData());
        app.init();
    }
});
