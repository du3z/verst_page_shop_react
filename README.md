// ============================================
// Утилиты для работы с DOM
// ============================================

/**
 * Получить элемент по селектору
 */
export function $(selector, parent = document) {
    return parent.querySelector(selector);
}

/**
 * Получить все элементы по селектору
 */
export function $$(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
}

/**
 * Показать/скрыть элемент
 */
export function toggle(element, show) {
    if (typeof element === 'string') {
        element = $(element);
    }
    element.style.display = show ? '' : 'none';
}

/**
 * Показать ошибку
 */
export function showError(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.classList.add('form__error--visible');
    }
}

/**
 * Скрыть ошибку
 */
export function hideError(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.classList.remove('form__error--visible');
    }
}

/**
 * Скрыть все ошибки
 */
export function hideAllErrors() {
    $$('.form__error').forEach(error => {
        error.classList.remove('form__error--visible');
    });
}

/**
 * Создать элемент с классами и атрибутами
 */
export function createElement(tag, options = {}) {
    const element = document.createElement(tag);
    
    if (options.classes) {
        element.classList.add(...options.classes);
    }
    
    if (options.attributes) {
        Object.entries(options.attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }
    
    if (options.text) {
        element.textContent = options.text;
    }
    
    if (options.html) {
        element.innerHTML = options.html;
    }
    
    return element;
}
