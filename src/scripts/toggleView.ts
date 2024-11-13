// src/scripts/toggleView.ts

export function initViewToggle() {
    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
    const desktopButton = document.querySelector('button[data-view="desktop"]');
    const mobileButton = document.querySelector('button[data-view="mobile"]');

    if (!iframe || !desktopButton || !mobileButton) {
        console.error('Не удалось найти iframe или кнопки представления');
        return;
    }

    // Установка десктопного представления по умолчанию
    setDesktopView();

    // Обработчик для десктопного представления
    desktopButton.addEventListener('click', () => {
        setDesktopView();
    });

    // Обработчик для мобильного представления
    mobileButton.addEventListener('click', () => {
        setMobileView();
    });

    function setDesktopView() {
        iframe.style.width = '100%';
        iframe.style.height = '100%';
    }

    function setMobileView() {
        iframe.style.width = '375px';  // ширина стандартного мобильного устройства
        iframe.style.height = '667px'; // высота стандартного мобильного устройства
        iframe.style.margin = '0 auto'; // центрирование для мобильного представления
    }
}
