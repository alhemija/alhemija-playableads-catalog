// src/scripts/mobileScrollEffect.ts
export const createMobileScrollEffect = (): void => {
    document.addEventListener('DOMContentLoaded', function () {

        const cardContainer = document.getElementById('card-container') as HTMLElement | null;
        let startY = 0;
        let isPullingDown = false;

        cardContainer?.addEventListener('touchstart', function (e: TouchEvent) {
            if (window.innerWidth < 768) {
                startY = e.touches[0].clientY;
                isPullingDown = window.scrollY === 0;
            }
        });

        cardContainer?.addEventListener('touchmove', function (e: TouchEvent) {
            if (isPullingDown) {
                const currentY = e.touches[0].clientY;
                const distance = currentY - startY;

                if (distance > 0 && cardContainer) {
                    cardContainer.style.transform = `translateY(${distance * 0.3}px)`;
                }
            }
        });

        cardContainer?.addEventListener('touchend', function () {
            if (isPullingDown && cardContainer) {
                cardContainer.style.transition = 'transform 0.3s ease';
                cardContainer.style.transform = 'translateY(0)';

                setTimeout(() => {
                    cardContainer!.style.transition = '';
                }, 300);
            }
        });

        if (cardContainer) {
            enableCardSnapScroll(cardContainer);
        }
    });
};

const enableCardSnapScroll = (container: HTMLElement): void => {
    console.log('enableCardSnapScroll ', container);
    const cards = container.querySelectorAll<HTMLElement>('.snap-start');
    console.log(cards)
    let isScrolling = false;

    container.addEventListener('scroll', () => {
        if (isScrolling || window.innerWidth >= 768) return;

        isScrolling = true;

        setTimeout(() => {
            const containerTop = container.scrollTop;
            let closestCard: HTMLElement | null = null; // Указали явный тип
            let closestDistance = Number.MAX_VALUE;

            cards.forEach((card) => {
                const distance = Math.abs(card.offsetTop - containerTop);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCard = card;
                }
            });

            if (closestCard) {
                (closestCard as HTMLElement).scrollIntoView({ behavior: 'smooth' }); // Ошибка устранена
            }

            isScrolling = false;
        }, 100);
    });
};
