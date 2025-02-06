// src/scripts/toggleView.ts

export function initViewToggle() {
    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
    const desktopButton = document.querySelector('button[data-view="desktop"]');
    const mobileButton = document.querySelector('button[data-view="mobile"]');
    const homeButton = document.querySelector('button[data-view="home"]');
    // console.log('home button ', homeButton)
    // console.log('initViewToggle')
    // console.log(iframe, desktopButton, mobileButton)
    if (!iframe || !desktopButton || !mobileButton) {
        console.error('Не удалось найти iframe или кнопки представления');
        return;
    }

    // Установка десктопного представления по умолчанию
    setDesktopView();

    //Обработчик для кнопки home
    homeButton?.addEventListener('click', () => {
        window.location.href = 'index.html'
    })

    // Обработчик для десктопного представления
    desktopButton.addEventListener('click', () => {
        if (desktopButton.classList.contains('active')) return;
        setDesktopView();
    });

    // Обработчик для мобильного представления
    mobileButton.addEventListener('click', () => {
        if (mobileButton.classList.contains('active')) return;
        setMobileView();
    });

    function setDesktopView() {
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        desktopButton?.classList.add('active');
        mobileButton?.classList.remove('active');
    }

    function setMobileView() {
        iframe.style.width = '375px';  // ширина стандартного мобильного устройства
        iframe.style.height = '667px'; // высота стандартного мобильного устройства
        iframe.style.margin = '0 auto'; // центрирование для мобильного представления
        mobileButton?.classList.add('active');
        desktopButton?.classList.remove('active');
    }
}
