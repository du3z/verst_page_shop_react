// ============================================
// Компонент таблицы транзакций
// ============================================

import { store } from '../store.js';
import { formatDate, formatAmount, getAmountClass } from '../utils/formatters.js';
import { $ } from '../utils/dom.js';

export class TableComponent {
    constructor() {
        this.tableBody = $('#tableBody');
        this.currentFilter = 'all';
    }

    // Инициализация
    init() {
        store.subscribe(() => this.render());
        this.render();
    }

    // Установка фильтра
    setFilter(filter) {
        this.currentFilter = filter;
        this.render();
    }

    // Рендеринг таблицы
    render() {
        const transactions = store.getFiltered(this.currentFilter);
        this.tableBody.innerHTML = '';

        if (transactions.length === 0) {
            this.renderEmpty();
            return;
        }

        // Сортировка по дате (новые сверху)
        transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

        transactions.forEach(transaction => {
            this.tableBody.appendChild(this.createRow(transaction));
        });
    }

    // Создание строки таблицы
    createRow(transaction) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${formatDate(transaction.date)}</td>
            <td>${transaction.category}</td>
            <td>${transaction.desc || '—'}</td>
            <td class="${getAmountClass(transaction.type)}">
                ${formatAmount(transaction.amount, transaction.type)}
            </td>
            <td>
                <button 
                    class="btn-delete" 
                    data-id="${transaction.id}"
                    title="Удалить транзакцию"
                >
                    Удалить
                </button>
            </td>
        `;

        // Добавляем обработчик удаления
        const deleteBtn = row.querySelector('.btn-delete');
        deleteBtn.addEventListener('click', () => this.handleDelete(transaction.id));

        return row;
    }

    // Рендеринг пустой таблицы
    renderEmpty() {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="5" class="empty-message">
                Нет транзакций для отображения
            </td>
        `;
        this.tableBody.appendChild(row);
    }

    // Обработчик удаления
    handleDelete(id) {
        if (confirm('Вы уверены, что хотите удалить эту транзакцию?')) {
            store.remove(id);
        }
    }
}
