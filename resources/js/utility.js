window.CQFetchGET = (url, data = false) => CQFetch('GET', url + objectToQueryString(data))

window.CQFetch = function (method, url, data = null) {

    let payload = {
        method: method,

        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
        },
    }

    if (data) {
        payload.body = JSON.stringify(data)
    }

    return fetch(url, payload).then((response) => response.json())
        .then(function (response) {

            if (response.exception) {
                toastr.error(response.message)
                return
            }

            if (response.errors) {
                let message = ''

                for (let e in response.errors) {
                    message += response.errors[e] + '. ';
                }
                toastr.error(message)

            }

            if (response.coins) {
                coinsToast(response.coins);
            }

            return response;
        })
}

function objectToQueryString(obj) {

    if (!obj) {
        return ''
    }
    return '?' + new URLSearchParams(obj).toString()
}
