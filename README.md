// ============================================
// Компонент переключения вкладок
// ============================================

import { TAB_FILTERS } from '../config.js';
import { $$ } from '../utils/dom.js';

export class TabsComponent {
    constructor(tableComponent) {
        this.tableComponent = tableComponent;
        this.tabButtons = $$('.tab-btn');
        this.activeClass = 'tab-btn--active';
    }

    // Инициализация
    init() {
        this.tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.activateTab(button);
            });
        });
    }

    // Активация вкладки
    activateTab(selectedButton) {
        // Убираем активный класс у всех
        this.tabButtons.forEach(btn => {
            btn.classList.remove(this.activeClass);
        });

        // Добавляем активный класс выбранной
        selectedButton.classList.add(this.activeClass);

        // Получаем фильтр и обновляем таблицу
        const filter = selectedButton.dataset.tab;
        this.tableComponent.setFilter(filter);

        console.log(`Переключение на вкладку: ${filter}`);
    }

    // Получить текущий фильтр
    getCurrentFilter() {
        const activeTab = document.querySelector(`.${this.activeClass}`);
        return activeTab ? activeTab.dataset.tab : TAB_FILTERS.ALL;
    }
}
