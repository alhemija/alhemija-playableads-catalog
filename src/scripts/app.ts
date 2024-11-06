
import { insertLogo } from './logo';
import { DataLoader } from './DataLoader';
import { IGameCard } from './Interfaces/IGameCard';
insertLogo()


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
        if (this.dataLoader) {
            gameCards = await this.dataLoader.fetchData();
        } else if (this.gameCards) {
            gameCards = this.gameCards;
        }
        this.renderCards(gameCards);
    }

    private renderCards(gameCard: IGameCard[]) {
        const container = document.querySelector('#card-container')

        if (!container) {
            console.error('Container not found')
            return
        }
        container.innerHTML = ""

        gameCard.forEach((card) => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("rounded-lg");
            cardElement.classList.add("p-4");
            cardElement.classList.add("text-white");
            cardElement.innerHTML = `
                <img src="${card.image}" alt="${card.image}"w-full rounded-xl mb-4">
                <h3 class="text-sm font-bold font-grotesk">${card.title}</h3>
                <p class="text-xs font-grotesk text-subtext">${card.description}</p>
            `;
            container.appendChild(cardElement);
        });
    }
}


