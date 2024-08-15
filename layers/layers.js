var wms_layers = [];

var format_lotsdechaleur07_0 = new ol.format.GeoJSON();
var features_lotsdechaleur07_0 = format_lotsdechaleur07_0.readFeatures(json_lotsdechaleur07_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotsdechaleur07_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotsdechaleur07_0.addFeatures(features_lotsdechaleur07_0);
var lyr_lotsdechaleur07_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotsdechaleur07_0, 
                style: style_lotsdechaleur07_0,
                popuplayertitle: "Îlots de chaleur 07",
                interactive: false,
    title: 'Îlots de chaleur 07<br />\
    <img src="styles/legend/lotsdechaleur07_0_0.png" /> 1<br />\
    <img src="styles/legend/lotsdechaleur07_0_1.png" /> 2<br />\
    <img src="styles/legend/lotsdechaleur07_0_2.png" /> 3<br />\
    <img src="styles/legend/lotsdechaleur07_0_3.png" /> 4<br />\
    <img src="styles/legend/lotsdechaleur07_0_4.png" /> 5<br />\
    <img src="styles/legend/lotsdechaleur07_0_5.png" /> 6<br />\
    <img src="styles/legend/lotsdechaleur07_0_6.png" /> 7<br />\
    <img src="styles/legend/lotsdechaleur07_0_7.png" /> 8<br />\
    <img src="styles/legend/lotsdechaleur07_0_8.png" /> 9<br />'
        });
var format_07_MRC_RLS_municipalits_1 = new ol.format.GeoJSON();
var features_07_MRC_RLS_municipalits_1 = format_07_MRC_RLS_municipalits_1.readFeatures(json_07_MRC_RLS_municipalits_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07_MRC_RLS_municipalits_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_MRC_RLS_municipalits_1.addFeatures(features_07_MRC_RLS_municipalits_1);
var lyr_07_MRC_RLS_municipalits_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07_MRC_RLS_municipalits_1, 
                style: style_07_MRC_RLS_municipalits_1,
                popuplayertitle: "07_MRC_RLS_municipalités",
                interactive: false,
                title: '<img src="styles/legend/07_MRC_RLS_municipalits_1.png" /> 07_MRC_RLS_municipalités'
            });
var format_temp2_2 = new ol.format.GeoJSON();
var features_temp2_2 = format_temp2_2.readFeatures(json_temp2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temp2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temp2_2.addFeatures(features_temp2_2);
var lyr_temp2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temp2_2, 
                style: style_temp2_2,
                popuplayertitle: "temp2",
                interactive: true,
                title: '<img src="styles/legend/temp2_2.png" /> temp2'
            });

lyr_lotsdechaleur07_0.setVisible(true);lyr_07_MRC_RLS_municipalits_1.setVisible(true);lyr_temp2_2.setVisible(true);
var layersList = [lyr_lotsdechaleur07_0,lyr_07_MRC_RLS_municipalits_1,lyr_temp2_2];
lyr_lotsdechaleur07_0.set('fieldAliases', {'DN': 'DN', });
lyr_07_MRC_RLS_municipalits_1.set('fieldAliases', {'MUS_VA_SUP': 'MUS_VA_SUP', 'MUS_NO_IND': 'MUS_NO_IND', 'MUS_DE_IND': 'MUS_DE_IND', 'MUS_CO_GEO': 'MUS_CO_GEO', 'MUS_CO_DES': 'MUS_CO_DES', 'MUS_NM_MUN': 'MUS_NM_MUN', 'MUS_NM_NMC': 'MUS_NM_NMC', 'MUS_CO_MRC': 'MUS_CO_MRC', 'MUS_NM_MRC': 'MUS_NM_MRC', 'MUS_CO_REG': 'MUS_CO_REG', 'MUS_NM_REG': 'MUS_NM_REG', 'MUS_NM_AGG': 'MUS_NM_AGG', 'MUS_CO_COM': 'MUS_CO_COM', 'MUS_NM_COM': 'MUS_NM_COM', 'MUS_DA_CON': 'MUS_DA_CON', 'MUS_CO_MOD': 'MUS_CO_MOD', 'MUS_DA_MOD': 'MUS_DA_MOD', 'MUS_CO_SOU': 'MUS_CO_SOU', 'MUS_CO_REF': 'MUS_CO_REF', 'MUS_CO_VER': 'MUS_CO_VER', 'ID': 'ID', 'RLS_code': 'RLS_code', 'RLS_nom': 'RLS_nom', 'RTS_code': 'RTS_code', 'RSS_code': 'RSS_code', 'RUIS_code': 'RUIS_code', 'Etiquette': 'Etiquette', 'Version': 'Version', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_temp2_2.set('fieldAliases', {'DATE': 'DATE', 'HEURE': 'HEURE', 'CARTE D\'AP': 'CARTE D\'AP', 'MPDS': 'MPDS', 'CITY': 'CITY', 'ADDRESS': 'ADDRESS', 'STATE': 'STATE', 'COUNTRY': 'COUNTRY', 'TYPE DE BA': 'TYPE DE BA', 'AGE': 'AGE', 'SEXE': 'SEXE', 'CH DESTINA': 'CH DESTINA', 'MENTION D\'': 'MENTION D\'', 'COMMENTAIR': 'COMMENTAIR', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_lotsdechaleur07_0.set('fieldImages', {'DN': 'Range', });
lyr_07_MRC_RLS_municipalits_1.set('fieldImages', {'MUS_VA_SUP': 'TextEdit', 'MUS_NO_IND': 'TextEdit', 'MUS_DE_IND': 'TextEdit', 'MUS_CO_GEO': 'TextEdit', 'MUS_CO_DES': 'TextEdit', 'MUS_NM_MUN': 'TextEdit', 'MUS_NM_NMC': 'TextEdit', 'MUS_CO_MRC': 'TextEdit', 'MUS_NM_MRC': 'TextEdit', 'MUS_CO_REG': 'TextEdit', 'MUS_NM_REG': 'TextEdit', 'MUS_NM_AGG': 'TextEdit', 'MUS_CO_COM': 'TextEdit', 'MUS_NM_COM': 'TextEdit', 'MUS_DA_CON': 'DateTime', 'MUS_CO_MOD': 'TextEdit', 'MUS_DA_MOD': 'DateTime', 'MUS_CO_SOU': 'TextEdit', 'MUS_CO_REF': 'TextEdit', 'MUS_CO_VER': 'TextEdit', 'ID': 'TextEdit', 'RLS_code': 'TextEdit', 'RLS_nom': 'TextEdit', 'RTS_code': 'TextEdit', 'RSS_code': 'TextEdit', 'RUIS_code': 'TextEdit', 'Etiquette': 'TextEdit', 'Version': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_temp2_2.set('fieldImages', {'DATE': 'TextEdit', 'HEURE': 'TextEdit', 'CARTE D\'AP': 'TextEdit', 'MPDS': 'TextEdit', 'CITY': 'TextEdit', 'ADDRESS': 'TextEdit', 'STATE': 'TextEdit', 'COUNTRY': 'TextEdit', 'TYPE DE BA': 'TextEdit', 'AGE': 'TextEdit', 'SEXE': 'TextEdit', 'CH DESTINA': 'TextEdit', 'MENTION D\'': 'TextEdit', 'COMMENTAIR': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_lotsdechaleur07_0.set('fieldLabels', {'DN': 'no label', });
lyr_07_MRC_RLS_municipalits_1.set('fieldLabels', {'MUS_VA_SUP': 'no label', 'MUS_NO_IND': 'inline label - always visible', 'MUS_DE_IND': 'no label', 'MUS_CO_GEO': 'no label', 'MUS_CO_DES': 'no label', 'MUS_NM_MUN': 'no label', 'MUS_NM_NMC': 'no label', 'MUS_CO_MRC': 'no label', 'MUS_NM_MRC': 'no label', 'MUS_CO_REG': 'no label', 'MUS_NM_REG': 'no label', 'MUS_NM_AGG': 'no label', 'MUS_CO_COM': 'no label', 'MUS_NM_COM': 'no label', 'MUS_DA_CON': 'no label', 'MUS_CO_MOD': 'no label', 'MUS_DA_MOD': 'no label', 'MUS_CO_SOU': 'no label', 'MUS_CO_REF': 'no label', 'MUS_CO_VER': 'no label', 'ID': 'no label', 'RLS_code': 'no label', 'RLS_nom': 'no label', 'RTS_code': 'no label', 'RSS_code': 'no label', 'RUIS_code': 'no label', 'Etiquette': 'no label', 'Version': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_temp2_2.set('fieldLabels', {'DATE': 'inline label - always visible', 'HEURE': 'inline label - always visible', 'CARTE D\'AP': 'hidden field', 'MPDS': 'hidden field', 'CITY': 'inline label - always visible', 'ADDRESS': 'inline label - always visible', 'STATE': 'hidden field', 'COUNTRY': 'hidden field', 'TYPE DE BA': 'hidden field', 'AGE': 'hidden field', 'SEXE': 'hidden field', 'CH DESTINA': 'hidden field', 'MENTION D\'': 'hidden field', 'COMMENTAIR': 'hidden field', 'result_num': 'hidden field', 'osm_id': 'hidden field', 'display_na': 'hidden field', 'category': 'hidden field', 'type': 'hidden field', 'latlong': 'hidden field', });
lyr_temp2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});