app.controller("subjectCtrl", function ($scope, $http) {
    $scope.list_subject = [];
    $http.get('db/Subjects.js').then(function (reponse) {
        $scope.list_subject = reponse.data;
    })

    $scope.begin;
    $scope.pageCount = 5;
    $scope.first = function(){
        $scope.begin = 0;
    }
    $scope.back = function(){
        if($scope.begin > 0){
            $scope.begin -= 4;
        }
    }
    $scope.next = function(){
        if($scope.begin < 16){
            $scope.begin += 4;
        }
    }
    $scope.last = function(){
        $scope.begin = 16;
    }

});