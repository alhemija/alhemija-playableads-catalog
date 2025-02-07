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
            
            // image.onload = () => {
            //     console.log(`${name} loaded`)
            // }
        })
    }
}
export const loadImages = () => {
    const loader = new ImageLoader()
    loader.preload()
}

