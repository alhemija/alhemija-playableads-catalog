let isPanelOpen = false;

export function initBottomPanelToggle() {
    const panel = document.getElementById("bottom-panel");
    const handle = document.getElementById("panel-handle");
    const iframe = document.getElementById("game-iframe") as HTMLIFrameElement;
    const buttons = panel?.querySelectorAll("button");

    if (!panel || !handle || !iframe || !buttons) return;

    // Функция для открытия панели
    const showPanel = () => {
        panel.classList.remove("translate-y-full");
        iframe.style.pointerEvents = "none"; // Отключаем события на iframe при открытой панели
        isPanelOpen = true;
    };

    // Функция для закрытия панели
    const hidePanel = () => {
        panel.classList.add("translate-y-full");
        iframe.style.pointerEvents = "auto"; // Включаем события на iframe при закрытой панели
        isPanelOpen = false;
    };

    // Переключение панели при клике на handle
    handle.addEventListener("click", () => {
        isPanelOpen ? hidePanel() : showPanel();
    });

    // Закрытие панели при клике на любую кнопку внутри панели
    buttons.forEach(button => {
        button.addEventListener("click", hidePanel);
    });

    // Закрытие панели при клике на любое место на экране
    document.addEventListener("click", (e) => {
        if (isPanelOpen && !panel.contains(e.target as Node) && e.target !== handle) {
            hidePanel();
        }
    });

    // Закрытие панели при взаимодействии с iframe
    iframe.addEventListener("pointerdown", () => {
        if (isPanelOpen) hidePanel();
    });

    // Свайп вверх и вниз
    let startY = 0;
    handle.addEventListener("touchstart", (e) => {
        startY = e.touches[0].clientY;
    });

    handle.addEventListener("touchmove", (e) => {
        const endY = e.touches[0].clientY;
        if (startY - endY > 50 && !isPanelOpen) showPanel();
        if (endY - startY > 50 && isPanelOpen) hidePanel();
    });
}
