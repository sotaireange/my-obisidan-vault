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
│   ├── __init__.py
│   ├── main.py             # Запуск бота
│   ├── handlers.py
│   ├── services/
│   │     ├── redis_service.py   # 2 функции для работы с Redis
│   │     ├── postgres_service.py
│   ├── utils/
│   └── config.py
│
├── worker/                 
│   ├── __init__.py
│   ├── main.py             # Отдельный запуск воркера
│   ├── tasks.py            # Вычислительная логика
│   └── services/
│         ├── redis_service.py
│         ├── postgres_service.py
│
├── common/                 
│   ├── __init__.py
│   ├── database.py         # Подключение к Postgres и Redis
│   ├── models.py           # Pydantic / SQLAlchemy модели
│   └── config.py           
│
├── docker/
│   ├── Dockerfile.bot      
│   ├── Dockerfile.worker   
│   └── docker-compose.yml  
│
├── requirements.txt
├── README.md
└── .env                    

```