app.controller("forgotpasswordCtrl", function ($scope, $http,$location) {
    $scope.student = {};
    $scope.list_students = [];
    $http.get('db/Students.js').then(function (reponse) {
        $scope.list_students = reponse.data;
    })
   $scope.getPass = function(){
    for (let i = 0; i <$scope.list_students.length; i++) {
        if($scope.username == $scope.list_students[i].username){
            if($scope.email == $scope.list_students[i].email){
                swal("Thành Công !", "Mật Khẩu Của Bạn Là : " + $scope.list_students[i].password, "success");
                $scope.student = $scope.list_students[i];
                return;
            }
        }else{
            swal("Sai Tài Khoản Hoặc Email!");
            return;
        }
      }
}
});

