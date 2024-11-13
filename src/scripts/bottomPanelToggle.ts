// src/scripts/bottomPanelToggle.ts

let isPanelOpen = false;

export function initBottomPanelToggle() {
    const panel = document.getElementById("bottom-panel");
    const handle = document.getElementById("panel-handle");
console.log('///////////////////')
    if (!panel || !handle) return;

    console.log("initBottomPanelToggle");
    console.log(panel, handle);

    // Функция для открытия панели
    const showPanel = () => {
        panel.classList.remove("translate-y-full");
        isPanelOpen = true;
    };

    // Функция для закрытия панели
    const hidePanel = () => {
        panel.classList.add("translate-y-full");
        isPanelOpen = false;
    };

    // Переключение при клике на чёлку
    handle.addEventListener("click", () => {
        console.log('click')
        isPanelOpen ? hidePanel() : showPanel();
    });

    // Свайп вверх и вниз
    let startY = 0;

    handle.addEventListener("touchstart", (e) => {
        console.log('touchstart')
        startY = e.touches[0].clientY;
    });

    handle.addEventListener("touchmove", (e) => {
        const endY = e.touches[0].clientY;
        if (startY - endY > 50 && !isPanelOpen) showPanel();
        if (endY - startY > 50 && isPanelOpen) hidePanel();
    });
}
