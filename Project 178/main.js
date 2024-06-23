let latitude = 9.996679817718713, longitude = 76.27270571053393;
mapboxgl.accessToken='pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:4
})

var img1 = document.querySelector("#amber")
var marker1 = new mapboxgl.Marker({
    element1:img1
})
.setLngLat([75.851353,26.98547])
.addTo(map);

var img2 = document.querySelector("#gateway")
var marker2 = new mapboxgl.Marker({
    element2:img2
})
.setLngLat([72.83462210883239,18.922156616196776 ])
.addTo(map);

var img3 = document.querySelector("#gate")
var marker3 = new mapboxgl.Marker({
    element3:img3
})
.setLngLat([77.22925702706094,28.61372774305539 ])
.addTo(map);

var img4 = document.querySelector("#lotus")
var marker4 = new mapboxgl.Marker({
    element4:img4
})
.setLngLat([77.25880493795161,28.5536427580229 ])
.addTo(map);

var img5 = document.querySelector("#victoria")
var marker5 = new mapboxgl.Marker({
    element5:img5
})
.setLngLat([88.34258998193816,22.54498654028734 ])
.addTo(map);


map.addControl(
        new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
        })
)
