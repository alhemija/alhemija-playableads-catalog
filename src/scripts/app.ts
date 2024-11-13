import { insertLogo } from './logo';
import { DataLoader } from './DataLoader';
import { IGameCard } from './Interfaces/IGameCard';
import { showLoader, hideLoader } from './loader'; // импорт лоадера

insertLogo();

export class App {
    private dataLoader?: DataLoader;
    private gameCards?: IGameCard[];

    constructor(dataLoaderOrCards: DataLoader | IGameCard[]) {
        if (dataLoaderOrCards instanceof DataLoader) {
            this.dataLoader = dataLoaderOrCards;
        } else {
            this.gameCards = dataLoaderOrCards;
        }
    }

    async init() {
        let gameCards: IGameCard[] = [];
        const container = document.querySelector('#card-container') as HTMLElement;

        if (container) {
            showLoader(container); 
        }

        // Эмуляция задержки загрузки
        await new Promise((resolve) => setTimeout(resolve, 2000));

        if (this.dataLoader) {
            gameCards = await this.dataLoader.fetchData();
        } else if (this.gameCards) {
            gameCards = this.gameCards;
        }

        if (container) {
            hideLoader(container); // Скрыть лоадер после загрузки данных
        }

        this.renderCards(gameCards);
    }

    private renderCards(gameCards: IGameCard[]) {
        const container = document.querySelector('#card-container');

        if (!container) {
            console.error('Container not found');
            return;
        }
        container.innerHTML = "";

        gameCards.forEach((card) => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("rounded-lg", "p-4", "text-white");
            cardElement.innerHTML = `
                <img src="${card.image}" alt="${card.title}" class="w-full rounded-xl mb-4">
                <h3 class="text-sm font-bold font-grotesk">${card.title}</h3>
                <p class="text-xs font-grotesk text-subtext">${card.description}</p>
            `;

            cardElement.addEventListener('click', () => {
                if (card.gameUrl) {
                    window.location.href = `game.html?gameId=${card.id}&gameUrl=${encodeURIComponent(card.gameUrl)}`;
                } else {
                    window.location.href = `game.html?gameId=${card.id}`;
                }
            });

            container.appendChild(cardElement);
        });
    }
}
