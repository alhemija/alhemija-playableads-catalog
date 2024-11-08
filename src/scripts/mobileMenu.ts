// src/scripts/mobileMenu.ts

export class MobileMenu {
    private button: HTMLElement | null;
    private menu: HTMLElement | null;
    private hamburgerIcon: SVGElement | null;
    private closeIcon: SVGElement | null;
    private isOpen: boolean;

    constructor(buttonId: string, menuId: string) {
        this.button = document.getElementById(buttonId);
        this.menu = document.getElementById(menuId);
        this.hamburgerIcon = document.getElementById('hamburger-icon') as unknown as SVGElement;
        this.closeIcon = document.getElementById('close-icon') as unknown as SVGElement;
        this.isOpen = false;

        this.handleClick = this.handleClick.bind(this);
    }

    init() {
        if (this.button && this.menu) {
            this.button.addEventListener('click', this.handleClick);
            console.log('MobileMenu initialized.');
        } else {
            console.error('Кнопка гамбургера или мобильное меню не найдены.');
        }
    }

    private handleClick(event: Event) {
        event.stopPropagation(); // Предотвращает всплытие события
        this.toggleMenu();
    }

    private toggleMenu() {
        if (this.menu && this.button && this.hamburgerIcon && this.closeIcon) {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.menu.classList.remove('opacity-0', 'pointer-events-none');
                this.menu.classList.add('opacity-100', 'pointer-events-auto');
                this.button.setAttribute('aria-expanded', 'true');
                document.body.classList.add('overflow-hidden'); // Отключить прокрутку при открытом меню
                
                // Показать иконку крестика, скрыть иконку гамбургера
                this.hamburgerIcon.classList.add('hidden');
                this.closeIcon.classList.remove('hidden');

                document.addEventListener('click', this.handleOutsideClick.bind(this));
            } else {
                this.menu.classList.remove('opacity-100', 'pointer-events-auto');
                this.menu.classList.add('opacity-0', 'pointer-events-none');
                this.button.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('overflow-hidden'); // Включить прокрутку при закрытии меню
                
                // Скрыть иконку крестика, показать иконку гамбургера
                this.hamburgerIcon.classList.remove('hidden');
                this.closeIcon.classList.add('hidden');

                document.removeEventListener('click', this.handleOutsideClick.bind(this));
            }
        }
    }

    private handleOutsideClick(event: Event) {
        if (this.menu && !this.menu.contains(event.target as Node) && this.button && !this.button.contains(event.target as Node)) {
            if (this.isOpen) {
                this.toggleMenu();
            }
        }
    }
}
