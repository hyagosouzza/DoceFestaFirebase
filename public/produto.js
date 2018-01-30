(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDVBEzqjKMUj-3cYynIFmKmqxb9BUcs8Cc",
        authDomain: "doce-e-festa.firebaseapp.com",
        databaseURL: "https://doce-e-festa.firebaseio.com",
        projectId: "doce-e-festa",
        storageBucket: "doce-e-festa.appspot.com",
        messagingSenderId: "497695728329"
    };
    firebase.initializeApp(config);

    var app = angular.module("app", ["ngRoute", "firebase"]);

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/balas", {
                templateUrl: "./balas.html"
            })
            .when("/chocolates", {
                templateUrl: "./chocolates.html"
            })
            .when("/jujubas", {
                templateUrl: "./jujubas.html"
            })
            .when("/amendoins", {
                templateUrl: "./amendoins.html"
            })
            .otherwise({
                templateUrl: "./geral.html"
            });
        $locationProvider.html5Mode(true);
    });

    app.controller("MyCtrl", ["$scope", "$firebaseArray",
        function ($scope, $firebaseArray) {

            var ref = firebase.database().ref().child('Produtos');
            var refMarca = firebase.database().ref().child('Marcas');

            var objMarca = $firebaseArray(refMarca);
            var obj = $firebaseArray(ref);

            $scope.marca = objMarca;
            $scope.data = obj;

            $scope.filtrarPorMarca = function (marca) {
                if (marca != null) {
                    $scope.data = $firebaseArray(ref.orderByChild('marca').equalTo(marca));
                    $scope.filtro = marca;
                }
                else {
                    $scope.data = obj;
                }
            }

            $scope.rmFiltro = function () {
                $scope.data = obj;
                $scope.filtro = null;
            }

        }
    ]);


}());