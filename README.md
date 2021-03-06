<div style="display: flex">
<img src="https://runet-id.com/files/event/leadersofdigital_2021/original.png" width="auto" height="100" alt="ЦП">
<span style="margin-right: 10px"></span>
<img src="https://leadersofdigital.ru/d3befc31d21be9511b83e86338e2422f.svg" width="auto" height="100" alt="РСВ">
<span style="margin-right: 10px"></span>
<img src="https://lodmedia.hb.bizmrg.com/avatars/company_671045.png" width="auto" height="100" alt="ТИМ">
</div>

# Команда Киборги - Кейс Транспортных инноваций Москвы

# Эффект безбилетника

## Готовое решение

### Концепт приложения для контрольных бригад (контролёров), позволяющий повысить эффективность рейдов по наземному транспорту Москвы.
* Графическое отображение в реальном времени кол-ва пассажиров, не оплативших проезд в конкретном ТС (от зеленого к красному)
* Статистическое графическое отображение показателя неоплат на всем маршруте.


<img src="https://freerider.volkv.com/media/234.png" width="575px" height="auto" alt="ТИМ">

### Демонстрация работы:
 https://freerider.volkv.com

![SS](https://freerider.volkv.com/media/ss.png)

## Stack

* Laravel `8`
* PostgreSQL `13`
* Nginx `1.19.3`
* Redis `6.0.9`
* Vanilla JS

## Технологии

* Docker / Compose
* Кэш Redis

## Методы API

### Список маршрутов
> GET  [/api/v1/routes](https://freerider.volkv.com/api/v1/routes)

### Список остановок
> GET [/api/v1/stopes](https://freerider.volkv.com/api/v1/stopes)

*использованы данные с портала открытых данных Правительства Москвы - https://data.mos.ru/opendata

## Локальный запуск (Linux / macOS):

### Зависимости

* git (`apt install git`)
* make (`apt install make`)
* docker / docker-compose (`apt install docker-compose`)

### Сборка

* `make docker-build`
* `make setup-local`
