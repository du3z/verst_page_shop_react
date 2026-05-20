export const APP_CONFIG = {
    name: 'FinControl',
    version: '1.0.0',
    currency: '₽',
    locale: 'ru-RU'
};

export const TRANSACTION_TYPES = {
    INCOME: 'income',
    EXPENSE: 'expense'
};

export const CATEGORIES = {
    [TRANSACTION_TYPES.INCOME]: [
        'Зарплата',
        'Фриланс',
        'Инвестиции',
        'Подарки',
        'Кэшбек',
        'Другое'
    ],
    [TRANSACTION_TYPES.EXPENSE]: [
        'Продукты',
        'Транспорт',
        'Развлечения',
        'Здоровье',
        'Образование',
        'Коммунальные услуги',
        'Одежда',
        'Связь',
        'Другое'
    ]
};

export const TAB_FILTERS = {
    ALL: 'all',
    INCOME: 'income',
    EXPENSE: 'expense'
};

export const ERROR_MESSAGES = {
    TYPE_REQUIRED: 'Выберите тип операции',
    AMOUNT_INVALID: 'Сумма должна быть положительным числом',
    DATE_REQUIRED: 'Выберите дату'
};
