var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Infraestruc_agua_potable_1 = new ol.format.GeoJSON();
var features_Infraestruc_agua_potable_1 = format_Infraestruc_agua_potable_1.readFeatures(json_Infraestruc_agua_potable_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infraestruc_agua_potable_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infraestruc_agua_potable_1.addFeatures(features_Infraestruc_agua_potable_1);
var lyr_Infraestruc_agua_potable_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infraestruc_agua_potable_1, 
                style: style_Infraestruc_agua_potable_1,
                popuplayertitle: 'Infraestruc_agua_potable',
                interactive: false,
    title: 'Infraestruc_agua_potable<br />\
    <img src="styles/legend/Infraestruc_agua_potable_1_0.png" /> 0 - 0.58<br />\
    <img src="styles/legend/Infraestruc_agua_potable_1_1.png" /> 0.58 - 1.03<br />\
    <img src="styles/legend/Infraestruc_agua_potable_1_2.png" /> 1.03 - 1.35<br />\
    <img src="styles/legend/Infraestruc_agua_potable_1_3.png" /> 1.35 - 1.97<br />\
    <img src="styles/legend/Infraestruc_agua_potable_1_4.png" /> 1.97 - 140<br />' });
var format_Infraestructurafsica_2 = new ol.format.GeoJSON();
var features_Infraestructurafsica_2 = format_Infraestructurafsica_2.readFeatures(json_Infraestructurafsica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infraestructurafsica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infraestructurafsica_2.addFeatures(features_Infraestructurafsica_2);
var lyr_Infraestructurafsica_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infraestructurafsica_2, 
                style: style_Infraestructurafsica_2,
                popuplayertitle: 'Infraestructura física ',
                interactive: false,
    title: 'Infraestructura física <br />\
    <img src="styles/legend/Infraestructurafsica_2_0.png" /> 0 - 1.6<br />\
    <img src="styles/legend/Infraestructurafsica_2_1.png" /> 1.6 - 3.2<br />\
    <img src="styles/legend/Infraestructurafsica_2_2.png" /> 3.2 - 6.2<br />\
    <img src="styles/legend/Infraestructurafsica_2_3.png" /> 6.2 - 11.9<br />\
    <img src="styles/legend/Infraestructurafsica_2_4.png" /> 11.9 - 38.3<br />' });
var format_formasdelrelieve_3 = new ol.format.GeoJSON();
var features_formasdelrelieve_3 = format_formasdelrelieve_3.readFeatures(json_formasdelrelieve_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_formasdelrelieve_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_formasdelrelieve_3.addFeatures(features_formasdelrelieve_3);
var lyr_formasdelrelieve_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_formasdelrelieve_3, 
                style: style_formasdelrelieve_3,
                popuplayertitle: 'formas del relieve',
                interactive: false,
    title: 'formas del relieve<br />\
    <img src="styles/legend/formasdelrelieve_3_0.png" /> Cuerpo de agua<br />\
    <img src="styles/legend/formasdelrelieve_3_1.png" /> Llanura<br />\
    <img src="styles/legend/formasdelrelieve_3_2.png" /> Lomerío<br />\
    <img src="styles/legend/formasdelrelieve_3_3.png" /> Meseta<br />\
    <img src="styles/legend/formasdelrelieve_3_4.png" /> Sierra<br />' });
var lyr_CDMX_Hill_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'CDMX_Hill<br />\
    <img src="styles/legend/CDMX_Hill_4_0.png" /> 1<br />\
    <img src="styles/legend/CDMX_Hill_4_1.png" /> 237<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CDMX_Hill_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11061318.457678, 2160583.521826, -11013981.571895, 2224849.087351]
        })
    });
var format_atlas_de_riesgo_inundaciones_5 = new ol.format.GeoJSON();
var features_atlas_de_riesgo_inundaciones_5 = format_atlas_de_riesgo_inundaciones_5.readFeatures(json_atlas_de_riesgo_inundaciones_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_atlas_de_riesgo_inundaciones_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_atlas_de_riesgo_inundaciones_5.addFeatures(features_atlas_de_riesgo_inundaciones_5);
var lyr_atlas_de_riesgo_inundaciones_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_atlas_de_riesgo_inundaciones_5, 
                style: style_atlas_de_riesgo_inundaciones_5,
                popuplayertitle: 'atlas_de_riesgo_inundaciones',
                interactive: false,
    title: 'atlas_de_riesgo_inundaciones<br />\
    <img src="styles/legend/atlas_de_riesgo_inundaciones_5_0.png" /> Alto<br />\
    <img src="styles/legend/atlas_de_riesgo_inundaciones_5_1.png" /> Bajo<br />\
    <img src="styles/legend/atlas_de_riesgo_inundaciones_5_2.png" /> Medio<br />\
    <img src="styles/legend/atlas_de_riesgo_inundaciones_5_3.png" /> Muy Alto<br />\
    <img src="styles/legend/atlas_de_riesgo_inundaciones_5_4.png" /> Muy Bajo<br />' });
var format_tiraderos_6 = new ol.format.GeoJSON();
var features_tiraderos_6 = format_tiraderos_6.readFeatures(json_tiraderos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tiraderos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tiraderos_6.addFeatures(features_tiraderos_6);
var lyr_tiraderos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tiraderos_6, 
                style: style_tiraderos_6,
                popuplayertitle: 'tiraderos',
                interactive: false,
                title: '<img src="styles/legend/tiraderos_6.png" /> tiraderos'
            });
var format_Directions_Layer_7 = new ol.format.GeoJSON();
var features_Directions_Layer_7 = format_Directions_Layer_7.readFeatures(json_Directions_Layer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Directions_Layer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Directions_Layer_7.addFeatures(features_Directions_Layer_7);
var lyr_Directions_Layer_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Directions_Layer_7, 
                style: style_Directions_Layer_7,
                popuplayertitle: 'Directions_Layer',
                interactive: false,
                title: '<img src="styles/legend/Directions_Layer_7.png" /> Directions_Layer'
            });
var format_Ruta_Azc_ET3_8 = new ol.format.GeoJSON();
var features_Ruta_Azc_ET3_8 = format_Ruta_Azc_ET3_8.readFeatures(json_Ruta_Azc_ET3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta_Azc_ET3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_Azc_ET3_8.addFeatures(features_Ruta_Azc_ET3_8);
var lyr_Ruta_Azc_ET3_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_Azc_ET3_8, 
                style: style_Ruta_Azc_ET3_8,
                popuplayertitle: 'Ruta_Azc_ET3',
                interactive: false,
                title: '<img src="styles/legend/Ruta_Azc_ET3_8.png" /> Ruta_Azc_ET3'
            });
var format_Ruta_Coy_ET4_9 = new ol.format.GeoJSON();
var features_Ruta_Coy_ET4_9 = format_Ruta_Coy_ET4_9.readFeatures(json_Ruta_Coy_ET4_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta_Coy_ET4_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_Coy_ET4_9.addFeatures(features_Ruta_Coy_ET4_9);
var lyr_Ruta_Coy_ET4_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_Coy_ET4_9, 
                style: style_Ruta_Coy_ET4_9,
                popuplayertitle: 'Ruta_Coy_ET4',
                interactive: false,
                title: '<img src="styles/legend/Ruta_Coy_ET4_9.png" /> Ruta_Coy_ET4'
            });
var format_Ruta_Coy_ET7_10 = new ol.format.GeoJSON();
var features_Ruta_Coy_ET7_10 = format_Ruta_Coy_ET7_10.readFeatures(json_Ruta_Coy_ET7_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta_Coy_ET7_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_Coy_ET7_10.addFeatures(features_Ruta_Coy_ET7_10);
var lyr_Ruta_Coy_ET7_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_Coy_ET7_10, 
                style: style_Ruta_Coy_ET7_10,
                popuplayertitle: 'Ruta_Coy_ET7',
                interactive: false,
                title: '<img src="styles/legend/Ruta_Coy_ET7_10.png" /> Ruta_Coy_ET7'
            });
var format_Ruta_Coy_ET1_11 = new ol.format.GeoJSON();
var features_Ruta_Coy_ET1_11 = format_Ruta_Coy_ET1_11.readFeatures(json_Ruta_Coy_ET1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta_Coy_ET1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_Coy_ET1_11.addFeatures(features_Ruta_Coy_ET1_11);
var lyr_Ruta_Coy_ET1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_Coy_ET1_11, 
                style: style_Ruta_Coy_ET1_11,
                popuplayertitle: 'Ruta_Coy_ET1',
                interactive: false,
                title: '<img src="styles/legend/Ruta_Coy_ET1_11.png" /> Ruta_Coy_ET1'
            });
var format_Ruta_Tlp_ET8_12 = new ol.format.GeoJSON();
var features_Ruta_Tlp_ET8_12 = format_Ruta_Tlp_ET8_12.readFeatures(json_Ruta_Tlp_ET8_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta_Tlp_ET8_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_Tlp_ET8_12.addFeatures(features_Ruta_Tlp_ET8_12);
var lyr_Ruta_Tlp_ET8_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_Tlp_ET8_12, 
                style: style_Ruta_Tlp_ET8_12,
                popuplayertitle: 'Ruta_Tlp_ET8',
                interactive: false,
                title: '<img src="styles/legend/Ruta_Tlp_ET8_12.png" /> Ruta_Tlp_ET8'
            });
var format_Ruta_Tlp_ET2_13 = new ol.format.GeoJSON();
var features_Ruta_Tlp_ET2_13 = format_Ruta_Tlp_ET2_13.readFeatures(json_Ruta_Tlp_ET2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta_Tlp_ET2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_Tlp_ET2_13.addFeatures(features_Ruta_Tlp_ET2_13);
var lyr_Ruta_Tlp_ET2_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_Tlp_ET2_13, 
                style: style_Ruta_Tlp_ET2_13,
                popuplayertitle: 'Ruta_Tlp_ET2',
                interactive: false,
                title: '<img src="styles/legend/Ruta_Tlp_ET2_13.png" /> Ruta_Tlp_ET2'
            });
var format_Ruta_Izt_ET10_14 = new ol.format.GeoJSON();
var features_Ruta_Izt_ET10_14 = format_Ruta_Izt_ET10_14.readFeatures(json_Ruta_Izt_ET10_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta_Izt_ET10_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_Izt_ET10_14.addFeatures(features_Ruta_Izt_ET10_14);
var lyr_Ruta_Izt_ET10_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_Izt_ET10_14, 
                style: style_Ruta_Izt_ET10_14,
                popuplayertitle: 'Ruta_Izt_ET10',
                interactive: false,
                title: '<img src="styles/legend/Ruta_Izt_ET10_14.png" /> Ruta_Izt_ET10'
            });
var format_Ruta_Izt_ET10_15 = new ol.format.GeoJSON();
var features_Ruta_Izt_ET10_15 = format_Ruta_Izt_ET10_15.readFeatures(json_Ruta_Izt_ET10_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta_Izt_ET10_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_Izt_ET10_15.addFeatures(features_Ruta_Izt_ET10_15);
var lyr_Ruta_Izt_ET10_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_Izt_ET10_15, 
                style: style_Ruta_Izt_ET10_15,
                popuplayertitle: 'Ruta_Izt_ET10',
                interactive: false,
                title: '<img src="styles/legend/Ruta_Izt_ET10_15.png" /> Ruta_Izt_ET10'
            });
var format_Ruta_GAM_ET9_16 = new ol.format.GeoJSON();
var features_Ruta_GAM_ET9_16 = format_Ruta_GAM_ET9_16.readFeatures(json_Ruta_GAM_ET9_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta_GAM_ET9_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_GAM_ET9_16.addFeatures(features_Ruta_GAM_ET9_16);
var lyr_Ruta_GAM_ET9_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_GAM_ET9_16, 
                style: style_Ruta_GAM_ET9_16,
                popuplayertitle: 'Ruta_GAM_ET9',
                interactive: false,
                title: '<img src="styles/legend/Ruta_GAM_ET9_16.png" /> Ruta_GAM_ET9'
            });
var format_Ruta_Azc_ET5_17 = new ol.format.GeoJSON();
var features_Ruta_Azc_ET5_17 = format_Ruta_Azc_ET5_17.readFeatures(json_Ruta_Azc_ET5_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta_Azc_ET5_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_Azc_ET5_17.addFeatures(features_Ruta_Azc_ET5_17);
var lyr_Ruta_Azc_ET5_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_Azc_ET5_17, 
                style: style_Ruta_Azc_ET5_17,
                popuplayertitle: 'Ruta_Azc_ET5',
                interactive: false,
                title: '<img src="styles/legend/Ruta_Azc_ET5_17.png" /> Ruta_Azc_ET5'
            });
var format_Ruta_Azc_ET11_18 = new ol.format.GeoJSON();
var features_Ruta_Azc_ET11_18 = format_Ruta_Azc_ET11_18.readFeatures(json_Ruta_Azc_ET11_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta_Azc_ET11_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_Azc_ET11_18.addFeatures(features_Ruta_Azc_ET11_18);
var lyr_Ruta_Azc_ET11_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_Azc_ET11_18, 
                style: style_Ruta_Azc_ET11_18,
                popuplayertitle: 'Ruta_Azc_ET11',
                interactive: false,
                title: '<img src="styles/legend/Ruta_Azc_ET11_18.png" /> Ruta_Azc_ET11'
            });
var format_Estac_y_Camp_19 = new ol.format.GeoJSON();
var features_Estac_y_Camp_19 = format_Estac_y_Camp_19.readFeatures(json_Estac_y_Camp_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estac_y_Camp_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estac_y_Camp_19.addFeatures(features_Estac_y_Camp_19);
var lyr_Estac_y_Camp_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estac_y_Camp_19, 
                style: style_Estac_y_Camp_19,
                popuplayertitle: 'Estac_y_Camp',
                interactive: false,
    title: 'Estac_y_Camp<br />\
    <img src="styles/legend/Estac_y_Camp_19_0.png" /> 1<br />\
    <img src="styles/legend/Estac_y_Camp_19_1.png" /> 2<br />\
    <img src="styles/legend/Estac_y_Camp_19_2.png" /> 3<br />\
    <img src="styles/legend/Estac_y_Camp_19_3.png" /> 4<br />\
    <img src="styles/legend/Estac_y_Camp_19_4.png" /> 5<br />\
    <img src="styles/legend/Estac_y_Camp_19_5.png" /> 6<br />\
    <img src="styles/legend/Estac_y_Camp_19_6.png" /> 7<br />\
    <img src="styles/legend/Estac_y_Camp_19_7.png" /> 8<br />\
    <img src="styles/legend/Estac_y_Camp_19_8.png" /> 9<br />\
    <img src="styles/legend/Estac_y_Camp_19_9.png" /> 10<br />\
    <img src="styles/legend/Estac_y_Camp_19_10.png" /> 11<br />' });
var format_Campamentos_limpia_20 = new ol.format.GeoJSON();
var features_Campamentos_limpia_20 = format_Campamentos_limpia_20.readFeatures(json_Campamentos_limpia_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campamentos_limpia_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campamentos_limpia_20.addFeatures(features_Campamentos_limpia_20);
var lyr_Campamentos_limpia_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Campamentos_limpia_20, 
                style: style_Campamentos_limpia_20,
                popuplayertitle: 'Campamentos_limpia',
                interactive: false,
                title: '<img src="styles/legend/Campamentos_limpia_20.png" /> Campamentos_limpia'
            });
var format_Estaciones_transferencia_21 = new ol.format.GeoJSON();
var features_Estaciones_transferencia_21 = format_Estaciones_transferencia_21.readFeatures(json_Estaciones_transferencia_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_transferencia_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_transferencia_21.addFeatures(features_Estaciones_transferencia_21);
var lyr_Estaciones_transferencia_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_transferencia_21, 
                style: style_Estaciones_transferencia_21,
                popuplayertitle: 'Estaciones_transferencia',
                interactive: false,
                title: '<img src="styles/legend/Estaciones_transferencia_21.png" /> Estaciones_transferencia'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Infraestruc_agua_potable_1.setVisible(true);lyr_Infraestructurafsica_2.setVisible(true);lyr_formasdelrelieve_3.setVisible(true);lyr_CDMX_Hill_4.setVisible(true);lyr_atlas_de_riesgo_inundaciones_5.setVisible(true);lyr_tiraderos_6.setVisible(true);lyr_Directions_Layer_7.setVisible(true);lyr_Ruta_Azc_ET3_8.setVisible(true);lyr_Ruta_Coy_ET4_9.setVisible(true);lyr_Ruta_Coy_ET7_10.setVisible(true);lyr_Ruta_Coy_ET1_11.setVisible(true);lyr_Ruta_Tlp_ET8_12.setVisible(true);lyr_Ruta_Tlp_ET2_13.setVisible(true);lyr_Ruta_Izt_ET10_14.setVisible(true);lyr_Ruta_Izt_ET10_15.setVisible(true);lyr_Ruta_GAM_ET9_16.setVisible(true);lyr_Ruta_Azc_ET5_17.setVisible(true);lyr_Ruta_Azc_ET11_18.setVisible(true);lyr_Estac_y_Camp_19.setVisible(true);lyr_Campamentos_limpia_20.setVisible(true);lyr_Estaciones_transferencia_21.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Infraestruc_agua_potable_1,lyr_Infraestructurafsica_2,lyr_formasdelrelieve_3,lyr_CDMX_Hill_4,lyr_atlas_de_riesgo_inundaciones_5,lyr_tiraderos_6,lyr_Directions_Layer_7,lyr_Ruta_Azc_ET3_8,lyr_Ruta_Coy_ET4_9,lyr_Ruta_Coy_ET7_10,lyr_Ruta_Coy_ET1_11,lyr_Ruta_Tlp_ET8_12,lyr_Ruta_Tlp_ET2_13,lyr_Ruta_Izt_ET10_14,lyr_Ruta_Izt_ET10_15,lyr_Ruta_GAM_ET9_16,lyr_Ruta_Azc_ET5_17,lyr_Ruta_Azc_ET11_18,lyr_Estac_y_Camp_19,lyr_Campamentos_limpia_20,lyr_Estaciones_transferencia_21];
lyr_Infraestruc_agua_potable_1.set('fieldAliases', {'cve_ent': 'cve_ent', 'alcaldia': 'alcaldia', 'cve_col': 'cve_col', 'colonia': 'colonia', 'pob_2010': 'pob_2010', 'SUP_COL_M2': 'SUP_COL_M2', 'PromFugas': 'PromFugas', 'LongInf_m': 'LongInf_m', 'm_x_hab': 'm_x_hab', 'C_m_x_hab': 'C_m_x_hab', });
lyr_Infraestructurafsica_2.set('fieldAliases', {'cve_ent': 'cve_ent', 'alcaldia': 'alcaldia', 'cve_col': 'cve_col', 'colonia': 'colonia', 'BA1_NoEqSa': 'BA1_NoEqSa', 'BA1_C_NoEq': 'BA1_C_NoEq', 'BA8_NoMerc': 'BA8_NoMerc', 'BA8_NoLoca': 'BA8_NoLoca', 'BA8_Ci_NoM': 'BA8_Ci_NoM', 'BA8_Ci_Loc': 'BA8_Ci_Loc', 'BA8_S_Merc': 'BA8_S_Merc', 'BA8_C_Merc': 'BA8_C_Merc', 'BA9_No_Gua': 'BA9_No_Gua', 'BA9_C_No_G': 'BA9_C_No_G', 'BA3_NoEqEd': 'BA3_NoEqEd', 'BA3_DisEqB': 'BA3_DisEqB', 'BA3_Ci_EqE': 'BA3_Ci_EqE', 'BA3_Ci_Dis': 'BA3_Ci_Dis', 'BA3_S_EqEd': 'BA3_S_EqEd', 'BA3_C_EqEd': 'BA3_C_EqEd', 'P_PorcElec': 'P_PorcElec', 'r_ValElect': 'r_ValElect', 'P_AguaPot': 'P_AguaPot', 'r_Val_Dren': 'r_Val_Dren', 'EPr_POB': 'EPr_POB', 'r_EPr_POB': 'r_EPr_POB', 'resid_ton': 'resid_ton', 'r_resd_ton': 'r_resd_ton', 'AlumP_sum': 'AlumP_sum', 'ALUMP_mean': 'ALUMP_mean', 'r_AlumP_Su': 'r_AlumP_Su', 'r_AlumP_Mn': 'r_AlumP_Mn', 'S_RI_6': 'S_RI_6', 'C_RI_6': 'C_RI_6', 'ID': 'ID', });
lyr_formasdelrelieve_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ENTIDAD': 'ENTIDAD', 'NOMBRE': 'NOMBRE', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_atlas_de_riesgo_inundaciones_5.set('fieldAliases', {'_id': '_id', 'id': 'id', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'fenomen': 'fenomen', 'taxonom': 'taxonom', 'r_p_v_e': 'r_p_v_e', 'intnsdd': 'intnsdd', 'descrpc': 'descrpc', 'fuente': 'fuente', 'cvegeo': 'cvegeo', 'alcaldi': 'alcaldi', 'entidad': 'entidad', 'area_m2': 'area_m2', 'perim_m': 'perim_m', 'perd_rt': 'perd_rt', 'intens_n': 'intens_n', 'intns_nm': 'intns_nm', 'int2': 'int2', });
lyr_tiraderos_6.set('fieldAliases', {'_id': '_id', 'id': 'id', 'column_1': 'column_1', 'fid': 'fid', 'id_sedema': 'id_sedema', 'no_alcaldi': 'no_alcaldi', 'alcaldia': 'alcaldia', 'direccion': 'direccion', 'tipo_tirad': 'tipo_tirad', 'calle': 'calle', 'no_ext': 'no_ext', 'no_int': 'no_int', 'colonia': 'colonia', 'entre_que': 'entre_que', 'geo_point': 'geo_point', });
lyr_Directions_Layer_7.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', });
lyr_Ruta_Azc_ET3_8.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Ruta_Coy_ET4_9.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Ruta_Coy_ET7_10.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Ruta_Coy_ET1_11.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Ruta_Tlp_ET8_12.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Ruta_Tlp_ET2_13.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Ruta_Izt_ET10_14.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Ruta_Izt_ET10_15.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Ruta_GAM_ET9_16.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Ruta_Azc_ET5_17.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Ruta_Azc_ET11_18.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Estac_y_Camp_19.set('fieldAliases', {'fid': 'fid', 'geo_point': 'geo_point', 'ID_2': 'ID_2', 'Nombre': 'Nombre', 'ruta_id': 'ruta_id', 'tipo': 'tipo', });
lyr_Campamentos_limpia_20.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Nombre': 'Nombre', 'X': 'X', 'Y': 'Y', });
lyr_Estaciones_transferencia_21.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Nombre': 'Nombre', 'X': 'X', 'Y': 'Y', 'ruta_id': 'ruta_id', });
lyr_Infraestruc_agua_potable_1.set('fieldImages', {'cve_ent': 'TextEdit', 'alcaldia': 'TextEdit', 'cve_col': 'TextEdit', 'colonia': 'TextEdit', 'pob_2010': 'TextEdit', 'SUP_COL_M2': 'TextEdit', 'PromFugas': 'TextEdit', 'LongInf_m': 'TextEdit', 'm_x_hab': 'TextEdit', 'C_m_x_hab': 'Range', });
lyr_Infraestructurafsica_2.set('fieldImages', {'cve_ent': 'TextEdit', 'alcaldia': 'TextEdit', 'cve_col': 'TextEdit', 'colonia': 'TextEdit', 'BA1_NoEqSa': 'TextEdit', 'BA1_C_NoEq': 'TextEdit', 'BA8_NoMerc': 'TextEdit', 'BA8_NoLoca': 'TextEdit', 'BA8_Ci_NoM': 'TextEdit', 'BA8_Ci_Loc': 'TextEdit', 'BA8_S_Merc': 'TextEdit', 'BA8_C_Merc': 'TextEdit', 'BA9_No_Gua': 'TextEdit', 'BA9_C_No_G': 'TextEdit', 'BA3_NoEqEd': 'TextEdit', 'BA3_DisEqB': 'TextEdit', 'BA3_Ci_EqE': 'TextEdit', 'BA3_Ci_Dis': 'TextEdit', 'BA3_S_EqEd': 'TextEdit', 'BA3_C_EqEd': 'TextEdit', 'P_PorcElec': 'TextEdit', 'r_ValElect': 'TextEdit', 'P_AguaPot': 'TextEdit', 'r_Val_Dren': 'TextEdit', 'EPr_POB': 'TextEdit', 'r_EPr_POB': 'TextEdit', 'resid_ton': 'TextEdit', 'r_resd_ton': 'TextEdit', 'AlumP_sum': 'TextEdit', 'ALUMP_mean': 'TextEdit', 'r_AlumP_Su': 'TextEdit', 'r_AlumP_Mn': 'TextEdit', 'S_RI_6': 'TextEdit', 'C_RI_6': 'TextEdit', 'ID': 'Range', });
lyr_formasdelrelieve_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'NOMBRE': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_atlas_de_riesgo_inundaciones_5.set('fieldImages', {'_id': 'Range', 'id': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'fenomen': 'TextEdit', 'taxonom': 'TextEdit', 'r_p_v_e': 'TextEdit', 'intnsdd': 'TextEdit', 'descrpc': 'TextEdit', 'fuente': 'TextEdit', 'cvegeo': 'TextEdit', 'alcaldi': 'TextEdit', 'entidad': 'TextEdit', 'area_m2': 'TextEdit', 'perim_m': 'TextEdit', 'perd_rt': 'TextEdit', 'intens_n': 'TextEdit', 'intns_nm': 'TextEdit', 'int2': 'Range', });
lyr_tiraderos_6.set('fieldImages', {'_id': 'Range', 'id': 'Range', 'column_1': 'Range', 'fid': 'Range', 'id_sedema': 'Range', 'no_alcaldi': 'Range', 'alcaldia': 'TextEdit', 'direccion': 'TextEdit', 'tipo_tirad': 'TextEdit', 'calle': 'TextEdit', 'no_ext': 'TextEdit', 'no_int': 'TextEdit', 'colonia': 'TextEdit', 'entre_que': 'TextEdit', 'geo_point': 'TextEdit', });
lyr_Directions_Layer_7.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', });
lyr_Ruta_Azc_ET3_8.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Ruta_Coy_ET4_9.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Ruta_Coy_ET7_10.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Ruta_Coy_ET1_11.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Ruta_Tlp_ET8_12.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Ruta_Tlp_ET2_13.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Ruta_Izt_ET10_14.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Ruta_Izt_ET10_15.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Ruta_GAM_ET9_16.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Ruta_Azc_ET5_17.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Ruta_Azc_ET11_18.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Estac_y_Camp_19.set('fieldImages', {'fid': 'TextEdit', 'geo_point': 'TextEdit', 'ID_2': 'Range', 'Nombre': 'TextEdit', 'ruta_id': 'TextEdit', 'tipo': 'TextEdit', });
lyr_Campamentos_limpia_20.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Nombre': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Estaciones_transferencia_21.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Nombre': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'ruta_id': 'Range', });
lyr_Infraestruc_agua_potable_1.set('fieldLabels', {'cve_ent': 'no label', 'alcaldia': 'no label', 'cve_col': 'no label', 'colonia': 'no label', 'pob_2010': 'no label', 'SUP_COL_M2': 'no label', 'PromFugas': 'no label', 'LongInf_m': 'no label', 'm_x_hab': 'no label', 'C_m_x_hab': 'no label', });
lyr_Infraestructurafsica_2.set('fieldLabels', {'cve_ent': 'no label', 'alcaldia': 'no label', 'cve_col': 'no label', 'colonia': 'no label', 'BA1_NoEqSa': 'no label', 'BA1_C_NoEq': 'no label', 'BA8_NoMerc': 'no label', 'BA8_NoLoca': 'no label', 'BA8_Ci_NoM': 'no label', 'BA8_Ci_Loc': 'no label', 'BA8_S_Merc': 'no label', 'BA8_C_Merc': 'no label', 'BA9_No_Gua': 'no label', 'BA9_C_No_G': 'no label', 'BA3_NoEqEd': 'no label', 'BA3_DisEqB': 'no label', 'BA3_Ci_EqE': 'no label', 'BA3_Ci_Dis': 'no label', 'BA3_S_EqEd': 'no label', 'BA3_C_EqEd': 'no label', 'P_PorcElec': 'no label', 'r_ValElect': 'no label', 'P_AguaPot': 'no label', 'r_Val_Dren': 'no label', 'EPr_POB': 'no label', 'r_EPr_POB': 'no label', 'resid_ton': 'no label', 'r_resd_ton': 'no label', 'AlumP_sum': 'no label', 'ALUMP_mean': 'no label', 'r_AlumP_Su': 'no label', 'r_AlumP_Mn': 'no label', 'S_RI_6': 'no label', 'C_RI_6': 'no label', 'ID': 'no label', });
lyr_formasdelrelieve_3.set('fieldLabels', {'OBJECTID': 'no label', 'ENTIDAD': 'no label', 'NOMBRE': 'no label', 'DESCRIPCIO': 'no label', });
lyr_atlas_de_riesgo_inundaciones_5.set('fieldLabels', {'_id': 'no label', 'id': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'fenomen': 'no label', 'taxonom': 'no label', 'r_p_v_e': 'no label', 'intnsdd': 'no label', 'descrpc': 'no label', 'fuente': 'no label', 'cvegeo': 'no label', 'alcaldi': 'no label', 'entidad': 'no label', 'area_m2': 'no label', 'perim_m': 'no label', 'perd_rt': 'no label', 'intens_n': 'no label', 'intns_nm': 'no label', 'int2': 'no label', });
lyr_tiraderos_6.set('fieldLabels', {'_id': 'no label', 'id': 'no label', 'column_1': 'no label', 'fid': 'no label', 'id_sedema': 'no label', 'no_alcaldi': 'no label', 'alcaldia': 'no label', 'direccion': 'no label', 'tipo_tirad': 'no label', 'calle': 'no label', 'no_ext': 'no label', 'no_int': 'no label', 'colonia': 'no label', 'entre_que': 'no label', 'geo_point': 'no label', });
lyr_Directions_Layer_7.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', });
lyr_Ruta_Azc_ET3_8.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Ruta_Coy_ET4_9.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Ruta_Coy_ET7_10.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Ruta_Coy_ET1_11.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Ruta_Tlp_ET8_12.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Ruta_Tlp_ET2_13.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Ruta_Izt_ET10_14.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Ruta_Izt_ET10_15.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Ruta_GAM_ET9_16.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Ruta_Azc_ET5_17.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Ruta_Azc_ET11_18.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Estac_y_Camp_19.set('fieldLabels', {'fid': 'no label', 'geo_point': 'no label', 'ID_2': 'no label', 'Nombre': 'no label', 'ruta_id': 'no label', 'tipo': 'no label', });
lyr_Campamentos_limpia_20.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Nombre': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Estaciones_transferencia_21.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Nombre': 'no label', 'X': 'no label', 'Y': 'no label', 'ruta_id': 'no label', });
lyr_Estaciones_transferencia_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});