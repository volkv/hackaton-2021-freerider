require('./utility')


var map = L.map('mapid').setView([55.75870994837645, 37.619032690342], 11);

L.tileLayer('//apiatlas.mos.ru/arcgis/rest/services/Basemaps/egko_gc_graphics/MapServer/tile/{zoom}/{y}/{x}', {
    attribution: 'mos.ru',
    zoom: function (m) { return m.z - 8; },
    maxZoom: self.maxZoom,
    minZoom: self.minZoom
}).addTo(map);



CQFetchGET('/routes')
    .then((response) => {
        for (k in response){
            let latlngs =  response[k]['points']

            var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);


            map.fitBounds(polyline.getBounds());
        }
    })



