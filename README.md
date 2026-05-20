<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinControl - Управление транзакциями</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="header">
        <div class="header__container">
            <h1 class="header__logo">FinControl</h1>
            <div class="header__user">
                <span class="header__username" id="username">Иванов И.И.</span>
                <a href="#" class="header__logout" id="logoutBtn">Выйти</a>
            </div>
        </div>
    </header>

    <main class="container">
        <section class="transactions">
            <h2 class="transactions__title">Управление транзакциями</h2>
            
            <!-- Табы -->
            <nav class="tabs" id="transactionTabs">
                <button class="tab-btn tab-btn--active" data-tab="all">Все</button>
                <button class="tab-btn" data-tab="income">Доходы</button>
                <button class="tab-btn" data-tab="expense">Расходы</button>
            </nav>

            <!-- Таблица -->
            <div class="table-wrapper">
                <table class="table" id="dataTable">
                    <thead class="table__head">
                        <tr>
                            <th>Дата</th>
                            <th>Категория</th>
                            <th>Описание</th>
                            <th>Сумма</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody class="table__body" id="tableBody">
                        <!-- Динамическое наполнение -->
                    </tbody>
                </table>
            </div>

            <!-- Форма -->
            <section class="add-form">
                <h3 class="add-form__title">Добавить новую запись</h3>
                <form id="addForm" class="form" novalidate>
                    <div class="form__group">
                        <label for="type" class="form__label">Тип операции</label>
                        <select id="type" class="form__input" required>
                            <option value="">Выберите тип...</option>
                            <option value="income">Доход</option>
                            <option value="expense">Расход</option>
                        </select>
                        <div class="form__error" id="typeError">Выберите тип операции</div>
                    </div>

                    <div class="form__group">
                        <label for="amount" class="form__label">Сумма (₽)</label>
                        <input 
                            type="number" 
                            id="amount" 
                            class="form__input" 
                            placeholder="Введите сумму"
                            min="0.01"
                            step="0.01"
                            required
                        >
                        <div class="form__error" id="amountError">Сумма должна быть положительным числом</div>
                    </div>

                    <div class="form__group">
                        <label for="category" class="form__label">Категория</label>
                        <select id="category" class="form__input"></select>
                    </div>

                    <div class="form__group">
                        <label for="desc" class="form__label">Описание</label>
                        <input 
                            type="text" 
                            id="desc" 
                            class="form__input" 
                            placeholder="Описание операции"
                        >
                    </div>

                    <div class="form__group">
                        <label for="date" class="form__label">Дата</label>
                        <input type="date" id="date" class="form__input" required>
                    </div>

                    <button type="submit" class="form__submit">Добавить транзакцию</button>
                </form>
            </section>
        </section>
    </main>

    <footer class="footer">
        <p class="footer__text">© 2026 FinControl. Учебный проект</p>
    </footer>

    <!-- Главный модуль приложения -->
    <script type="module" src="js/app.js"></script>
</body>
</html>
