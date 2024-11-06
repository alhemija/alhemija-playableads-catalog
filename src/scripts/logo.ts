// динамически вставляем лого в шапку
import logoIcon from '../assets/images/logo-icon.png';
import logoText from '../assets/images/logo-text.png';
import searchIcon from '../assets/images/search.png'
import mockImage from '../assets/images/mockImage.jpg'

export const insertLogo = () => {
    const iconElement = document.createElement('img');
    iconElement.src = logoIcon;
    iconElement.alt = 'Логотип иконка';
    iconElement.classList.add('h-10', 'w-10');

    const textElement = document.createElement('img');
    textElement.src = logoText;
    textElement.alt = 'Логотип текст';
    textElement.classList.add('h-10');

    const search = document.createElement('img');
    search.src = searchIcon;
    search.alt = 'поиск';
    search.classList.add('h-10');

    const tile = document.createElement('img');
    tile.src = mockImage;
    tile.alt = 'поиск';
    tile.classList.add('h-10');

    const logoContainer = document.querySelector('#logo-container');
    // if (logoContainer) {
    //     logoContainer.appendChild(iconElement);
    //     logoContainer.appendChild(textElement);
    // }
}
