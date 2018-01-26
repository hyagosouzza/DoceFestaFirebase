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

    var app = angular.module("app", ["firebase"]);

    app.controller("MyCtrl", ["$scope", "$firebaseArray",
        function ($scope, $firebaseArray) {

            var ref = firebase.database().ref().child('Produtos');
            var refMarca = firebase.database().ref().child('Marcas');

            var objMarca = $firebaseArray(refMarca);
            var obj = $firebaseArray(ref);

            $scope.marca = objMarca;
            $scope.data = obj;

            $scope.filtrarMarca = function (marca) {
                if (marca != null) {
                    $scope.data = $firebaseArray(ref.orderByChild('marca').equalTo(marca));
                }
                else {
                    $scope.data = obj;
                }
            }

        }
    ]);

}());