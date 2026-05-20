// ============================================
// Главный модуль приложения FinControl
// Точка входа, инициализация всех компонентов
// ============================================

import { store } from './store.js';
import { TableComponent } from './components/table.js';
import { TabsComponent } from './components/tabs.js';
import { FormComponent } from './components/form.js';
import { APP_CONFIG } from './config.js';

class App {
    constructor() {
        this.table = null;
        this.tabs = null;
        this.form = null;
    }

    // Инициализация приложения
    init() {
        console.log(`Запуск ${APP_CONFIG.name} v${APP_CONFIG.version}`);
        
        // Инициализация хранилища
        store.init();
        
        // Инициализация компонентов
        this.table = new TableComponent();
        this.form = new FormComponent();
        this.tabs = new TabsComponent(this.table);
        
        // Запуск компонентов
        this.table.init();
        this.form.init();
        this.tabs.init();
        
        // Глобальные обработчики
        this.setupGlobalHandlers();
        
        console.log('Приложение готово к работе');
        console.log('Транзакций загружено:', store.getAll().length);
    }

    // Глобальные обработчики
    setupGlobalHandlers() {
        // Обработчик выхода (заглушка)
        document.getElementById('logoutBtn').addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Выход из системы');
            alert('Выход из системы (заглушка)');
        });
    }
}

// Запуск приложения при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});

// Экспорт для возможного тестирования
export default App;
