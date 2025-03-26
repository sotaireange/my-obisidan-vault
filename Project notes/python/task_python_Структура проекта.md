---
date: 2025-03-24
time: 21:04
tags: 
- task
- python
- bybit_users
links: 
- "[[]]" 
completed: false
source: "[[python]]"
---
## ⚠️Описание задачи:
- Структура проекта

```
project_root/
│
├── bot/
│   ├── main.py
│   ├── handlers.py
│   └── ... (ботовая логика)
│
├── worker/
│   ├── main.py
│   └── ... (вычисления)
│
├── common/
│   ├── database.py             # engine / redis
│   ├── models.py
│   └── services/
│         ├── postgres_service.py  # общие функции БД
│         ├── redis_service.py     # общие функции Redis
│
└── docker-compose.yml

```


## 📌 Почему так:

- `common/database.py` — только подключение (`engine`, `redis`, `sessionmaker`)
- `services/postgres_service.py` — уже прикладная логика (запросы к таблицам, создание, выборка и т.д.)
- `bot/main.py` и `handlers.py` — **только вызывают** `services`, не лазят напрямую в БД
- `worker/main.py` — делает так же, если надо


## 📌 Почему так лучше:

✅ Нет дублирования кода  
✅ Чистая структура — бизнес-логика БД лежит отдельно  
✅ Легче тестировать и поддерживать  
✅ Можно в любой момент подключить третий модуль (например, API), и он тоже использует `common/services`
✔ Вся логика БД в `services`, легко тестируется  
✔ `handlers.py` выглядят читаемо, без SQL внутри



## ✅ **В `common/` кладутся универсальные вещи, которые НЕ завязаны на Telegram или Worker**

Они — **переиспользуемые в разных модулях**.

