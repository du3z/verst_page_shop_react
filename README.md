import { TRANSACTION_TYPES } from './config.js';

class Store {
    constructor() {
        this.transactions = [];
        this.nextId = 1;
        this.listeners = [];
    }

    // Инициализация с тестовыми данными
    init() {
        const today = new Date();
        const formatDate = (daysOffset = 0) => {
            const date = new Date(today);
            date.setDate(date.getDate() - daysOffset);
            return date.toISOString().split('T')[0];
        };

        this.transactions = [
            {
                id: this.nextId++,
                type: TRANSACTION_TYPES.INCOME,
                date: formatDate(0),
                category: 'Зарплата',
                desc: 'Аванс за май',
                amount: 30000
            },
            {
                id: this.nextId++,
                type: TRANSACTION_TYPES.EXPENSE,
                date: formatDate(1),
                category: 'Продукты',
                desc: 'Пятёрочка, недельный закуп',
                amount: 2500
            },
            {
                id: this.nextId++,
                type: TRANSACTION_TYPES.EXPENSE,
                date: formatDate(2),
                category: 'Транспорт',
                desc: 'Проездной на месяц',
                amount: 1500
            },
            {
                id: this.nextId++,
                type: TRANSACTION_TYPES.INCOME,
                date: formatDate(3),
                category: 'Зарплата',
                desc: 'Основная зарплата',
                amount: 50000
            }
        ];

        this.notifyListeners();
    }

    // Получить все транзакции
    getAll() {
        return [...this.transactions];
    }

    // Добавить транзакцию
    add(transaction) {
        const newTransaction = {
            id: this.nextId++,
            ...transaction
        };
        this.transactions.push(newTransaction);
        this.notifyListeners();
        return newTransaction;
    }

    // Удалить транзакцию
    remove(id) {
        const index = this.transactions.findIndex(t => t.id === id);
        if (index !== -1) {
            this.transactions.splice(index, 1);
            this.notifyListeners();
            return true;
        }
        return false;
    }

    // Получить транзакции по фильтру
    getFiltered(filter) {
        if (filter === 'all') return this.getAll();
        return this.transactions.filter(t => t.type === filter);
    }

    // Подписка на изменения
    subscribe(listener) {
        this.listeners.push(listener);
        // Возвращаем функцию для отписки
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    // Уведомление подписчиков
    notifyListeners() {
        this.listeners.forEach(listener => listener(this.transactions));
    }
}

// Singleton
export const store = new Store();
