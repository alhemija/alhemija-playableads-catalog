import { buildGameUrl } from "../utils/urlHelper";
import { IGameCard } from "./Interfaces/IGameCard";

export class CardRederer {
  private container: HTMLElement

  constructor(containerSelector: string) {
    const container = document.querySelector(containerSelector) as HTMLElement
    if (!container)
      throw new Error(`Container ${containerSelector} not found`)

    this.container = container
  }

  renderCards(gameCards: IGameCard[]): void {
    // Очищаем контейнер
    this.container.innerHTML = "";
    
    gameCards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("rounded-lg", "p-4", "text-white");
      cardElement.innerHTML = `
          <img src="${card.image}" alt="${card.title}" class="w-full rounded-xl mb-4">
          <h3 class="text-sm font-bold font-grotesk">${card.title}</h3>
          <p class="text-xs font-grotesk text-subtext">${card.description}</p>
      `;

      cardElement.addEventListener('click', () => {
        //TODO: вынести в отдельную утилиту
          const url = new URL(window.location.origin + '/game.html');
          url.searchParams.set('gameId', card.id.toString());
          if (card.gameUrl) {
              url.searchParams.set('gameUrl', card.gameUrl);
          }
          window.location.href = buildGameUrl(card.id, card.gameUrl);
      });

      this.container.appendChild(cardElement);
    });
  }
}
