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

            var db = firebase.firestore();
            db.collection("Marcas")
                .onSnapshot(function (querySnapshot) {
                    $scope.mr = [];
                    querySnapshot.forEach(function (doc) {
                        const data = doc.data()
                        data.id = doc.id;
                        $scope.mr.push(data);
                    });
                });

            var refMarca = firebase.database().ref().child('Marcas');

            var objMarca = $firebaseArray(refMarca);

        }
    ]);

}());