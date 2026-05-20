// ============================================
// Компонент формы добавления транзакции
// ============================================

import { store } from '../store.js';
import { CATEGORIES, TRANSACTION_TYPES } from '../config.js';
import { validateTransactionForm } from '../utils/validators.js';
import { $, hideAllErrors, showError } from '../utils/dom.js';

export class FormComponent {
    constructor() {
        this.form = $('#addForm');
        this.typeSelect = $('#type');
        this.categorySelect = $('#category');
        this.dateInput = $('#date');
    }

    // Инициализация
    init() {
        // Установка даты по умолчанию
        this.dateInput.value = new Date().toISOString().split('T')[0];

        // Обработчик изменения типа
        this.typeSelect.addEventListener('change', () => {
            this.updateCategories();
        });

        // Обработчик отправки формы
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        // Инициализация категорий
        this.typeSelect.value = TRANSACTION_TYPES.EXPENSE;
        this.updateCategories();
    }

    // Обновление категорий в зависимости от типа
    updateCategories() {
        const type = this.typeSelect.value;
        const categories = CATEGORIES[type] || [];

        this.categorySelect.innerHTML = '';
        
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            this.categorySelect.appendChild(option);
        });
    }

    // Обработчик отправки
    handleSubmit() {
        const formData = this.getFormData();
        const validation = validateTransactionForm(formData);

        hideAllErrors();

        if (!validation.isValid) {
            this.showValidationErrors(validation.errors);
            console.warn('Форма не прошла валидацию:', validation.errors);
            return;
        }

        // Добавляем транзакцию
        const transaction = store.add({
            type: formData.type,
            date: formData.date,
            category: formData.category,
            desc: formData.desc,
            amount: parseFloat(formData.amount)
        });

        console.log('Добавлена новая транзакция:', transaction);
        
        // Сбрасываем форму
        this.resetForm();
        
        // Показываем уведомление
        this.showNotification('Транзакция успешно добавлена!');
    }

    // Получение данных формы
    getFormData() {
        return {
            type: this.typeSelect.value,
            amount: $('#amount').value,
            category: this.categorySelect.value,
            desc: $('#desc').value.trim(),
            date: this.dateInput.value
        };
    }

    // Показ ошибок валидации
    showValidationErrors(errors) {
        if (errors.type) showError('typeError');
        if (errors.amount) showError('amountError');
        if (errors.date) showError('dateError');
    }

    // Сброс формы
    resetForm() {
        this.form.reset();
        this.dateInput.value = new Date().toISOString().split('T')[0];
        this.typeSelect.value = TRANSACTION_TYPES.EXPENSE;
        this.updateCategories();
    }

    // Уведомление (заглушка)
    showNotification(message) {
        alert(message);
        // В будущем заменить на красивое уведомление
    }
}
