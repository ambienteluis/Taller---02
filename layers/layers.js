var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_OSM1896111_1 = new ol.format.GeoJSON();
var features_OSM1896111_1 = format_OSM1896111_1.readFeatures(json_OSM1896111_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSM1896111_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSM1896111_1.addFeatures(features_OSM1896111_1);
var lyr_OSM1896111_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OSM1896111_1, 
                style: style_OSM1896111_1,
                popuplayertitle: 'OSM 1896111',
                interactive: true,
                title: '<img src="styles/legend/OSM1896111_1.png" /> OSM 1896111'
            });

lyr_EsriTopographic_0.setVisible(true);lyr_OSM1896111_1.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_OSM1896111_1];
lyr_OSM1896111_1.set('fieldAliases', {'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr_OSM1896111_1.set('fieldImages', {'osm_id': 'TextEdit', 'class': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'extratags': 'TextEdit', });
lyr_OSM1896111_1.set('fieldLabels', {'osm_id': 'inline label - always visible', 'class': 'inline label - always visible', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr_OSM1896111_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});