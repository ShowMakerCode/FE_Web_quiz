app.controller("registerCtrl", function ($location, $scope, $http) {
  $scope.studentR = {};
  $scope.register = function () {
    $scope.studentR.birthday =document.getElementById("date").value;
    let req = {
      method: "POST",
      url: "http://localhost:3000/studentAccounts",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify($scope.studentR)
    };
    $http(req).then(
      function () {
        $scope.repassword = "";
        swal("Thành Công !", "Quay Lại Trang Chủ", "success");
        $location.path("/index.html");
      },
      function () {
        swal("Thất Bại !", "Quay Lại Trang Chủ", "error");
      }
    );
  };
});
