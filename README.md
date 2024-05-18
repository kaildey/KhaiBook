# KhaiBook
KhaiBook is a simple platform that contains several books

Ru:
Проект доходит до 2 уровня

На этапе проектирования интерфейса было решено использовать минималистичный дизайн, чтобы обеспечить легкость навигации и удобство для пользователей. Главная страница (index.html) предоставляет простую форму регистрации, где пользователи могут ввести имя и пароль. Сразу после регистрации они перенаправляются на страницу с информацией о книгах (book-details.html), где представлены книги с кратким описанием и возможностью перехода на страницы отдельных книг.

Одним из ключевых решений было использование LocalStorage для хранения данных пользователей и отзывов. При регистрации имя пользователя и пароль сохраняются в LocalStorage, что позволяет легко переходить к просмотру книг без дополнительного ввода данных. Аналогично, отзывы на книги сохраняются в LocalStorage, что обеспечивает их отображение при каждом посещении страницы конкретной книги.

Во время разработки пришлось принять несколько компромиссов. Прежде всего, вопрос безопасности данных. Хранение паролей в открытом виде в LocalStorage является серьезной уязвимостью. В реальных приложениях для этого требуется серверное хранилище и шифрование данных. Также валидация данных осуществляется только на клиентской стороне, что делает приложение уязвимым для различных атак.

Функциональность приложения была ограничена базовыми возможностями. Отсутствие серверной поддержки не позволяет реализовать более сложные функции, такие как фильтрация отзывов или рекомендации книг. Это также ограничивает масштабируемость приложения.

Основные проблемы, с которыми столкнулись разработчики, включают безопасность паролей, отсутствие проверки уникальности пользователя при регистрации и кэширование отзывов только на клиентской стороне. Эти проблемы делают приложение менее надежным и ограничивают его функциональность.
