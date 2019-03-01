﻿var __env = {};

// Import variables if present (from env.js)
if (window) {
    Object.assign(__env, window.__env);
}

var app = angular.module('single-page-app', ['ngRoute']);


// Register environment in AngularJS as constant
app.constant('__env', __env);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: __env.paginaInicio, title: 'Inicio'
    })
    .when('/predicacion', {
        templateUrl: 'predicacion/predicacion.html', title: 'Predicación'
    })
.when('/salidas', {
    templateUrl: 'predicacion/salidas.html', title: 'Salidas al ministerio del campo'
})
.when('/telefonica', {
    templateUrl: 'predicacion/telefonica.html', title: 'Programa de predicación telefónica'
})
.when('/publica', {
    templateUrl: 'predicacion/publica.html', title: 'Programa de predicación pública'
})
.when('/territorios', {
    templateUrl: 'predicacion/territorios.html', title: 'Territorios'
    //templateUrl: 'predicacion/campaña.html', title: 'Campaña'
})
.when('/campaña', {
    templateUrl: 'predicacion/campaña.html', title: 'Campaña'
})
.when('/grupos', {
    templateUrl: 'predicacion/grupos.html', title: 'Grupos de predicación'
})
.when('/informe', {
    templateUrl: 'predicacion/informe.html', title: 'Informe de predicación'
})
.when('/reuniones', {
    templateUrl: 'reuniones/reuniones.html', title: 'Reuniones'
})
.when('/vivo', {
    templateUrl: 'reuniones/emision.html', title: 'Emisión en directo'
})
.when('/finde', {
    templateUrl: 'reuniones/finde.html', title: 'Co. Churruarín'
})
.when('/semana', {
    templateUrl: 'reuniones/semana.html', title: 'Co. Churruarín'
})

.when('/programa', {
    templateUrl: 'reuniones/programa.html', title: 'Programa de las reuniones semanales'
})

.when('/util', {
    templateUrl: 'util/util.html', title: 'Índice de utilidades'
        })

.when('/informar', {
    templateUrl: 'predicacion/informar.html', title: 'Informar territorios predicados'
});



}]);

app.controller('AppCtrl', ['$scope', '__env', function ($scope, __env) {
    $scope.$on('$routeChangeSuccess', function (event, data) {
        $scope.pageTitle = data.title + ' - ' + __env.nombreCongregacion;
    });
}]);


app.controller('cfgController', function ($scope, __env) {

    $scope.congregacion = __env.nombreCongregacion; //"Co. Churruarín";
    $scope.urlfinde = "Hello world";
    $scope.mnuPredicacion = __env.mnuPredicacion;
    //$scope.mnuPredicacion = __env.Salidas;
    $scope.mnuSalidas = __env.mnuSalidas;
    $scope.mnuTelefonica = __env.mnuTelefonica;
    $scope.mnuPublica = __env.mnuPublica;
    $scope.mnuTerritorios = __env.mnuTerritorios;
    $scope.mnuCampana = __env.mnuCampana;
    $scope.mnuGrupos = __env.mnuGrupos;
    $scope.mnuInforme = __env.mnuInforme;
    $scope.mnuReuniones = __env.mnuReuniones;
    $scope.mnuPrograma = __env.mnuPrograma;
    $scope.mnuEmision = __env.mnuEmision;
    $scope.pageTitle = __env.nombreCongregacion;
});


app.controller('transmision', ['$scope', '$sce', '__env', function ($scope, $sce, __env) {
    var videosemana = __env.videoIdSemana //"x4a2fbi";
    var videofinde = __env.videoIdFinde //"x4jw7bs";
    var hoy = new Date();
    var videohoy
    if (hoy.getDay() == 6 || hoy.getDay() == 0) {
        videohoy = videofinde;
    } else {
        videohoy = videosemana;
    };

    var urldigestor1 = __env.videoUrlDigestor1; //"http://www.dailymotion.com/embed/video/";
    var urldigestor2 = __env.videoUrlDigestor2; //"?api=postMessage&id=player&syndication=lr:175159&autoplay=1&mute=0&info=0&logo=0&related=0&social=0&controls=1&quality=auto&html=1&chromeless=0&theme=dark";
    var urldigestor2Flash = __env.videoUrlDigestor2Flash; //"http://www.dailymotion.com/embed/video/";
    var videoUrlStream = __env.videoUrlStream
    $scope.urlvideo = $sce.trustAsResourceUrl(urldigestor1 + videohoy + urldigestor2);
    $scope.urlvideoflash = $sce.trustAsResourceUrl(urldigestor1 + videohoy + urldigestor2Flash);
    $scope.urlvideostream = videoUrlStream + videohoy;
    $scope.urlvideoflashfinde = $sce.trustAsResourceUrl(urldigestor1 + videofinde + urldigestor2Flash);
    $scope.urlvideostreamfinde = videoUrlStream + videofinde;
    $scope.urlvideoflashsemana = $sce.trustAsResourceUrl(urldigestor1 + videosemana + urldigestor2Flash);
    $scope.urlvideostreamsemana = videoUrlStream + videosemana;
    $scope.urlvideoDM = "http://www.dailymotion.com/video/" + videosemana;
    $scope.test = hoy.getDay();
    console.log(hoy.getDay());
    //$scope.oscuro = false;
    console.log(hoy);
    $scope.emisionAsistencia = __env.emisionAsistencia;
    //$scope.show = true;

    //$scope.closeAlert = function (index) {
    //    $scope.show = false;
    //};
}]);

app.controller('transmisionfull', ['$scope', '$sce', '__env', function ($scope, $sce, __env) {
    var videosemana = __env.videoIdSemana //"x4a2fbi";
    var videofinde = __env.videoIdFinde //"x4jw7bs";
    var hoy = new Date();
    var videohoy
    if (hoy.getDay() == 6 || hoy.getDay() == 0) {
        videohoy = videosemana;
    } else {
        videohoy = videofinde;
    };

    var urldigestor1 = __env.videoUrlDigestor1; //"http://www.dailymotion.com/embed/video/";
    var urldigestor2 = __env.videoUrlDigestor2; //"?api=postMessage&id=player&syndication=lr:175159&autoplay=1&mute=0&info=0&logo=0&related=0&social=0&controls=1&quality=auto&html=1&chromeless=0&theme=dark";
    var urldigestor2Flash = __env.videoUrlDigestor2Flash; //"http://www.dailymotion.com/embed/video/";
    var videoUrlStream = __env.videoUrlStream
    $scope.urlvideo = $sce.trustAsResourceUrl(urldigestor1 + videohoy + urldigestor2);
    $scope.urlvideoflash = $sce.trustAsResourceUrl(urldigestor1 + videohoy + urldigestor2Flash);
    $scope.urlvideostream = videoUrlStream + videohoy;
    var urlvideostream = videoUrlStream + videohoy;
    //$window.location.href = urlvideostream;

}]);

app.controller('programa', ['$scope', '$sce', '__env', function ($scope, $sce, __env) {
    $scope.urlPrograma = $sce.trustAsResourceUrl(__env.programaUrl1 + __env.programaIdSheets + __env.programaUrl2);
    $scope.urlProgramaDescargaPdf = $sce.trustAsResourceUrl(__env.programaUrl1 + __env.programaIdSheets + __env.programaUrlDescargaPdf);

}]);

app.controller('salidas', ['$scope', '$sce', '__env', function ($scope, $sce, __env) {
    $scope.urlSalidas = $sce.trustAsResourceUrl(__env.salidasUrl1 + __env.salidasIdSheets + __env.salidasUrl2);
    $scope.urlSalidas2 = $sce.trustAsResourceUrl(__env.salidas2Url1 + __env.salidasIdSheets + __env.salidas2Url2);


}]);
app.controller('telefonica', ['$scope', '$sce', '__env', function ($scope, $sce, __env) {
    $scope.urlTelefonica = $sce.trustAsResourceUrl(__env.telefonicaUrl1 + __env.telefonicaIdSheets + __env.telefonicaUrl2);
    $scope.urlTelefonica2 = $sce.trustAsResourceUrl(__env.telefonica2Url1 + __env.telefonicaIdSheets + __env.telefonica2Url2);


}]);

app.controller('publica', ['$scope', '$sce', '__env', function ($scope, $sce, __env) {
    $scope.urlPublica = $sce.trustAsResourceUrl(__env.publicaUrl1 + __env.publicaIdSheets + __env.publicaUrl2);
    $scope.urlPublica2 = $sce.trustAsResourceUrl(__env.publica2Url1 + __env.publicaIdSheets + __env.publica2Url2);


}]);

app.controller('territorios', ['$scope', '__env', function ($scope, __env) {


//    cartodb.createVis('$scope', 'https://abelbour.cartodb.com/api/v2/viz/b9ead05c-da2c-11e4-b0ec-0e853d047bba/viz.json', {
//        shareable: true,
//        title: false,
//        description: false,
//        search: false,
//        tiles_loader: true,
//        center_lat: -31.749299255325756,
//        center_lon: -60.479693412780755,
//        zoom: 15,
//        cartodb_logo: false,
//        mobile_layout: true,
//        layer_selector: true
//    })
//.done(function (vis, layers) {
//    // layer 0 is the base layer, layer 1 is cartodb layer
//    // setInteraction is disabled by default
//    layers[1].setInteraction(true);
//    var sublayer = layers[1].getSubLayer(2);


//    //layers[1].on('featureOver', function(e, latlng, pos, data) {
//    //  cartodb.log.log(e, latlng, pos, data);
//    //});
//    // you can get the native map to work with it
//    var map = vis.getNativeMap();
//    // now, perform any operations you need
//    // map.setZoom(3);
//    // map.panTo([50.5, 30.5]);
//})
//.error(function (err) {
//    console.log(err);
//});


}]);

app.controller('grupos', ['$scope', '__env', function ($scope, __env) {


//    cartodb.createVis('$scope', 'https://abelbour.carto.com/api/v2/viz/508e2eb2-a2bf-11e6-9874-0ecd1babdde5/viz.json', {
//        shareable: true,
//        title: false,
//        description: false,
//        search: false,
//        tiles_loader: true,
//        center_lat: -31.749299255325756,
//        center_lon: -60.479693412780755,
//        zoom: 15,
//        cartodb_logo: false,
//        mobile_layout: true,
//        layer_selector: true
//    })
//.done(function (vis, layers) {
//    // layer 0 is the base layer, layer 1 is cartodb layer
//    // setInteraction is disabled by default
//    layers[1].setInteraction(true);
//    var sublayer = layers[1].getSubLayer(2);


//    //layers[1].on('featureOver', function(e, latlng, pos, data) {
//    //  cartodb.log.log(e, latlng, pos, data);
//    //});
//    // you can get the native map to work with it
//    var map = vis.getNativeMap();
//    // now, perform any operations you need
//    // map.setZoom(3);
//    // map.panTo([50.5, 30.5]);
//})
//.error(function (err) {
//    console.log(err);
//});


}]);

