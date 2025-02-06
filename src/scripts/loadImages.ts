// динамически вставляем лого в шапку
import logoIcon from '../assets/images/logo-icon.png';
import logoText from '../assets/images/logo-text.png';
import searchIcon from '../assets/images/search.png'
import mockImage from '../assets/images/mockImage.jpg'
import homeIcon from '../assets/images/home.png'
import desktopIcon from '../assets/images/desktop.png'
import mobileIcon from '../assets/images/mobile.png'


interface IImageResources {
    name: string,
    src: string
}


export class ImageLoader {
    private images: IImageResources[]
    constructor() {
        this.images = [
            { name: 'logo-icon', src: logoIcon },
            { name: 'logo-text', src: logoText },
            { name: 'search-icon', src: searchIcon },
            { name: 'mock-image', src: mockImage },
            { name: 'home-icon', src: homeIcon },
            { name: 'desktop-icon', src: desktopIcon },
            { name: 'mobile-icon', src: mobileIcon },
        ]
    }
    preload(): void {
        this.images.forEach(({ name, src }) => {
            const image = new Image()
            image.src = src

            image.onload = () => {
                console.log(`${name} loaded`)
            }
        })
    }
}
export const loadImages = () => {
    const loader = new ImageLoader()
    loader.preload()
}

// export const loadImages = () => {
//     const iconElement = document.createElement('img');
//     iconElement.src = logoIcon;
//     iconElement.alt = 'Логотип иконка';
//     iconElement.classList.add('h-10', 'w-10');

//     const textElement = document.createElement('img');
//     textElement.src = logoText;
//     textElement.alt = 'Логотип текст';
//     textElement.classList.add('h-10');

//     const search = document.createElement('img');
//     search.src = searchIcon;
//     search.alt = 'поиск';
//     search.classList.add('h-10');

//     const tile = document.createElement('img');
//     tile.src = mockImage;
//     tile.alt = 'поиск';
//     tile.classList.add('h-10');

//     const home = document.createElement('img');
//     home.src = homeIcon;
//     home.alt = 'поиск';
//     home.classList.add('h-10');
//     console.log('home ', home)

//     const desktop = document.createElement('img');
//     desktop.src = desktopIcon;
//     desktop.alt = 'поиск';
//     desktop.classList.add('h-10');
//     console.log('desktop ', desktop)

//     const mobile = document.createElement('img');
//     mobile.src = mobileIcon;
//     mobile.alt = 'поиск';
//     mobile.classList.add('h-10');
//     console.log('mobile ', mobile)

//     const logoContainer = document.querySelector('#logo-container');
//     // if (logoContainer) {
//     //     logoContainer.appendChild(iconElement);
//     //     logoContainer.appendChild(textElement);
//     // }
// }
