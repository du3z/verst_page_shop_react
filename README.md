

import { APP_CONFIG } from '../config.js'
export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(APP_CONFIG.locale, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}
export function formatAmount(amount, type) {
    const formatted = Math.abs(amount).toLocaleString(APP_CONFIG.locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    const prefix = type === 'income' ? '+' : '-';
    return `${prefix}${formatted} ${APP_CONFIG.currency}`;
}

/**
 * Получение CSS-класса для суммы
 */
export function getAmountClass(type) {
    return type === 'income' ? 'income-amount' : 'expense-amount';
}

/**
 * Форматирование для вывода в консоль
 */
export function logTransaction(transaction) {
    return `[${transaction.type.toUpperCase()}] ${transaction.category}: ${transaction.amount}${APP_CONFIG.currency}`;
}
