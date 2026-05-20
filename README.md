
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: #f4f6f9;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* ============================================
   Шапка сайта
   ============================================ */
.header {
    background: #2c3e50;
    color: white;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__logo {
    font-size: 1.5rem;
    font-weight: 700;
}

.header__user {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.header__logout {
    color: #ecf0f1;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid #ecf0f1;
    border-radius: 4px;
    transition: all 0.3s;
}

.header__logout:hover {
    background: #ecf0f1;
    color: #2c3e50;
}

/* ============================================
   Основной контейнер
   ============================================ */
.container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    flex: 1;
}

/* ============================================
   Секция транзакций
   ============================================ */
.transactions__title {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
}

/* ============================================
   Табы (навигационные вкладки)
   ============================================ */
.tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid #e0e0e0;
}

.tab-btn {
    padding: 0.75rem 1.5rem;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1rem;
    color: #666;
    transition: all 0.3s;
    position: relative;
    bottom: -2px;
}

.tab-btn:hover {
    color: #2c3e50;
}

.tab-btn--active {
    color: #2c3e50;
    font-weight: 600;
    border-bottom: 3px solid #2c3e50;
}

/* ============================================
   Таблица
   ============================================ */
.table-wrapper {
    overflow-x: auto;
    margin-bottom: 2rem;
}

.table {
    width: 100%;
    border-collapse: collapse;
    background: white;
}

.table__head th {
    background: #2c3e50;
    color: white;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
}

.table__body td {
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
}

.table__body tr:hover {
    background: #f8f9fa;
}

.table__body tr:last-child td {
    border-bottom: none;
}

/* ============================================
   Форма добавления транзакции
   ============================================ */
.add-form {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    margin-top: 2rem;
}

.add-form__title {
    color: #2c3e50;
    margin-bottom: 1.5rem;
}

.form {
    display: grid;
    gap: 1.5rem;
}

.form__group {
    display: flex;
    flex-direction: column;
}

.form__label {
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #333;
}

.form__input {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.form__input:focus {
    outline: none;
    border-color: #2c3e50;
}

.form__input:invalid {
    border-color: #e74c3c;
}

.form__error {
    color: #e74c3c;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: none;
}

.form__error--visible {
    display: block;
}

.form__submit {
    background: #2c3e50;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
}

.form__submit:hover {
    background: #34495e;
}

/* ============================================
   Кнопки действий в таблице
   ============================================ */
.btn-delete {
    background: #e74c3c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.875rem;
    transition: background 0.3s;
}

.btn-delete:hover {
    background: #c0392b;
}

/* Цвета для доходов и расходов */
.income-amount {
    color: #27ae60;
    font-weight: 600;
}

.expense-amount {
    color: #e74c3c;
    font-weight: 600;
}

/* ============================================
   Футер
   ============================================ */
.footer {
    background: #2c3e50;
    color: #ecf0f1;
    text-align: center;
    padding: 1rem;
    margin-top: auto;
}

/* ============================================
   Адаптивность
   ============================================ */
@media (max-width: 768px) {
    .container {
        margin: 1rem;
        padding: 1rem;
    }
    
    .header__container {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .tabs {
        flex-direction: column;
        border-bottom: none;
    }
    
    .tab-btn {
        text-align: left;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    .tab-btn--active {
        border: 1px solid #2c3e50;
        background: #2c3e50;
        color: white;
    }
    
    .form {
        grid-template-columns: 1fr;
    }
    
    .table__head th,
    .table__body td {
        padding: 0.75rem;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .header__logo {
        font-size: 1.2rem;
    }
    
    .transactions__title {
        font-size: 1.4rem;
    }
    
    .add-form {
        padding: 1rem;
    }
}
