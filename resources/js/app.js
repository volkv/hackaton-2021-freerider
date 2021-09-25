import L from 'leaflet'

require('./utility')
require('./animated-marker')


var map = L.map('mapid').setView([55.75870994837645, 37.619032690342], 11);
//L.tileLayer('//apiatlas.mos.ru/arcgis/rest/services/Basemaps/egko_gc_graphics/MapServer/tile/{zoom}/{y}/{x}', {
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: 'mos.ru',
    transparency: 'true',
   // opacity:.5,
    zoom: function (m) {
        return m.z - 8;
    },
    maxZoom: self.maxZoom,
    minZoom: self.minZoom
}).addTo(map);


CQFetchGET('/routes')
    .then((response) => {
        for (let k in response) {
            let latlngs = response[k]['points']

            L.polyline(latlngs, {color: 'hsl('+Math.random()*100+'deg 100% 50%)' }).addTo(map);



                let busIcon = L.divIcon({
                    className: 'custom-div-icon',
                    html: '<i data-route="' + response[k]['route_number'] + '" class="marker"><i class="bg" style="background-color: hsl('+Math.random()*100+'deg 100% 50%)"></i><i class="bus"></i></i>',
                    iconSize: [30, 30],
                    iconAnchor: [15, 42]
                });

                let animatedMarker = L.Marker.movingMarker(latlngs, 500000, {icon: busIcon, autostart: true, loop: true});
                map.addLayer(animatedMarker);



        }
    })
