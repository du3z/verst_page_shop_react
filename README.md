// ============================================
// Валидаторы форм
// ============================================

import { ERROR_MESSAGES } from '../config.js';

/**
 * Валидатор обязательного поля
 */
export function required(value) {
    return {
        isValid: value !== '' && value !== null && value !== undefined,
        message: ERROR_MESSAGES.TYPE_REQUIRED
    };
}

/**
 * Валидатор положительного числа
 */
export function positiveNumber(value) {
    const num = parseFloat(value);
    return {
        isValid: !isNaN(num) && num > 0,
        message: ERROR_MESSAGES.AMOUNT_INVALID
    };
}

/**
 * Валидатор даты
 */
export function validDate(value) {
    return {
        isValid: value !== '' && !isNaN(new Date(value).getTime()),
        message: ERROR_MESSAGES.DATE_REQUIRED
    };
}

/**
 * Комплексная валидация формы транзакции
 */
export function validateTransactionForm(formData) {
    const errors = {};
    
    // Тип операции
    if (!formData.type) {
        errors.type = ERROR_MESSAGES.TYPE_REQUIRED;
    }
    
    // Сумма
    const amount = parseFloat(formData.amount);
    if (!formData.amount || isNaN(amount) || amount <= 0) {
        errors.amount = ERROR_MESSAGES.AMOUNT_INVALID;
    }
    
    // Дата
    if (!formData.date) {
        errors.date = ERROR_MESSAGES.DATE_REQUIRED;
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}
