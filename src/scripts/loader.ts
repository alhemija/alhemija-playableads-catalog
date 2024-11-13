export function showLoader(container: HTMLElement) {
    container.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const loaderCard = document.createElement('div');
        loaderCard.classList.add('rounded-lg', 'p-4', 'animate-pulse');

        loaderCard.innerHTML = `
             <div class="w-full h-48 sm:h-32 md:h-40 bg-gray-300 rounded-xl mb-4"></div>
            <div class="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-gray-300 rounded w-1/2"></div>
        `;

        container.appendChild(loaderCard);
    }
}

export function hideLoader(container: HTMLElement) {
    container.innerHTML = '';
}