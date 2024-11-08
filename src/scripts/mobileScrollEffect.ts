// src/scripts/mobileScrollEffect.js
export const createMobileScrollEffect = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const cardContainer = document.getElementById('card-container');
        let startY = 0;
        let isPullingDown = false;

        cardContainer?.addEventListener('touchstart', function (e) {
            if (window.innerWidth < 768) {
                startY = e.touches[0].clientY;
                isPullingDown = window.scrollY === 0;
            }
        });

        cardContainer?.addEventListener('touchmove', function (e) {
            if (isPullingDown) {
                const currentY = e.touches[0].clientY;
                const distance = currentY - startY;

                if (distance > 0) {
                    cardContainer.style.transform = `translateY(${distance * 0.3}px)`;
                }
            }
        });

        cardContainer?.addEventListener('touchend', function () {
            if (isPullingDown) {
                cardContainer.style.transition = 'transform 0.3s ease';
                cardContainer.style.transform = 'translateY(0)';

                setTimeout(() => {
                    cardContainer.style.transition = '';
                }, 300);
            }
        });
    });

}
