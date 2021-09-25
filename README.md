<div style="display: flex">
<img src="https://runet-id.com/files/event/leadersofdigital_2021/original.png" width="auto" height="100" alt="ЦП">
<span style="margin-right: 10px"></span>
<img src="https://leadersofdigital.ru/d3befc31d21be9511b83e86338e2422f.svg" width="auto" height="100" alt="РСВ">
<span style="margin-right: 10px"></span>
<img src="https://lodmedia.hb.bizmrg.com/avatars/company_671045.png" width="auto" height="100" alt="ТИМ">
</div>

# Команда Бродяги - Кейс Транспортных инноваций Москвы

### Эффект безбилетника

# Готовое решение

* Концепт приложения для контрольных бригад (контролёров), позволяющий повысить эффективность рейдов по наземному транспорту Москвы.

![SS](https://freerider.volkv.com/media/ss.png)

## Stack

* Laravel `8`
* PostgreSQL `13`
* Nginx `1.19.3`
* Redis `6.0.9`

## Технологии

* Docker / Compose
* Очереди Redis
* Кэш Redis
* Планировщик Laravel
* Events / Notification Channels

## Методы API

### Список маршрутов
> GET /api/v1/routes

### Список остановок
> GET /api/v1/stopes

*использованы данные с портала открытых данных Правительства Москвы - https://data.mos.ru/opendata

## Локальный запуск (Linux / macOS):

### Зависимости

* git (`apt install git`)
* make (`apt install make`)
* docker / docker-compose (`apt install docker-compose`)

### Сборка

* `make docker-build`
* `make setup-local`
