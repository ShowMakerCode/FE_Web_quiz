app.controller("loginCrtl", function ($scope,$rootScope, $http,$location) {
    $scope.list_students = [];
    $http.get('db/Students.js').then(function (reponse) {
        $scope.list_students = reponse.data;
    })
   $scope.clickstuden = function(){
    for (let i = 0; i <$scope.list_students.length; i++) {
        if($scope.username == $scope.list_students[i].username){
            if($scope.password == $scope.list_students[i].password){
                swal("Đăng Nhập Thành Công !", "", "success");
                $rootScope.student = $scope.list_students[i];
                $rootScope.indexStudent = i;
                $location.path("/index.html");
                return;
            }
        }else{
            swal("Sai Tài Khoản Hoặc Mật Khẩu !");
            return;
        }
      }
}
});

