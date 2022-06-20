app.controller("changepassCtrl", function ($location, $scope, $http,$rootScope) {
    $scope.oldpass = $rootScope.student.password;
    $scope.studentR = $rootScope.student;
    $scope.Changpass = function() {
        $scope.studentR.password = document.getElementById("passwordchange").value;
        if($scope.studentR.password == $scope.oldpass){
            swal("Mật Khẩu Giống Mật Khẩu Cũ!", "Vui Lòng Không Nhập Trùng", "warning");
            return;
        }
          let req = {
        method: "PUT",
        url: "http://localhost:3000/studentAccounts/"+$rootScope.student.id,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify($scope.studentR)
      };
      $http(req).then(
        function () {
          swal("Thành Công !", "Quay Lại Trang Chủ", "success");
          $location.path("/index.html");
        },
        function () {
          swal("Thất Bại !", "Quay Lại Trang Chủ", "error");
          return;
        }
      );
    };
  });
  