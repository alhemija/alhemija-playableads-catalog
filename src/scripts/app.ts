import { loadImages } from './loadImages';
import { DataLoader } from './DataLoader';
import { IGameCard } from './Interfaces/IGameCard';
import { showLoader, hideLoader } from './loader'; // импорт лоадера
import { CardRederer } from './CardRenderer';
import { SELECTORS } from './contants';
import { delay } from '../utils/delay';

loadImages();

export class App {
    private dataLoader?: DataLoader
    private gameCards?: IGameCard[]
    private cardRenderer?: CardRederer

    constructor(dataLoaderOrCards: DataLoader | IGameCard[]) {
        if (dataLoaderOrCards instanceof DataLoader) {
            this.dataLoader = dataLoaderOrCards;
        } else {
            this.gameCards = dataLoaderOrCards;
        }

        //TODO: перенести селекторы в константы
        this.cardRenderer = new CardRederer(SELECTORS.CARD_CONTAINER)
    }

    async init() {
        let gameCards: IGameCard[] = [];

        //TODO этот кусок нужно вынести в приватный метод
        const container = document.querySelector('#card-container') as HTMLElement;

        if (container) {
            showLoader(container);
        }
        // 

        // Эмуляция задержки загрузки
        // TODO вынести в отдельную асинхронную обертку
        await delay(1)

        if (this.dataLoader) {
            gameCards = await this.dataLoader.fetchData();
        } else if (this.gameCards) {
            gameCards = this.gameCards;
        }

        if (container) {
            hideLoader(container); // Скрыть лоадер после загрузки данных
        }

        this.cardRenderer?.renderCards(gameCards)
        // this.renderCards(gameCards);
    }


}
