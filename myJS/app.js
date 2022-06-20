var app = angular.module("myApp", ['ngRoute']);

app.run(function ($rootScope) {
  $rootScope.student = null;
  $rootScope.logout = function () {
    $rootScope.student = null;
    $rootScope.indexStudent = -1;
    window.location.href = "#!index";
    swal("Đăng Xuất Thành Công", "Quay Lại Trang Chủ!", "success");
  }
  $rootScope.begin =0;
  $rootScope.first = function () {
    $rootScope.begin = 0;
  }
  $rootScope.back = function () {
    if ($rootScope.begin > 0) {
      $rootScope.begin -= 4;
    }
  }
  $rootScope.next = function () {
    if ($rootScope.begin < 16) {
      $rootScope.begin += 4;
    }
  }
  $rootScope.last = function () {
    $rootScope.begin = 16;
  }
});

app.controller("subjectCtrl", function ($scope, $http) {
  $scope.list_subject = [];
  $http.get('db/Subjects.js').then(function (reponse) {
    $scope.list_subject = reponse.data;
  })
});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "chucnang/Core.html",
      controller: "subjectCtrl"
    })
    .otherwise({
      templateUrl: "chucnang/Core.html",
      controller: "subjectCtrl"
    })
    .when("/GioiThieu", {
      templateUrl: "chucnang/GioiThieu.html"
    })
    .when("/LienHe", {
      templateUrl: "chucnang/LienHe.html"
    })
    .when("/GopY", {
      templateUrl: "chucnang/GopY.html"
    })
    .when("/HoiDap", {
      templateUrl: "chucnang/HoiDap.html"
    }).when("/DangNhap", {
      templateUrl: "chucnang/DangNhap.html",
      controller: "loginCrtl"
    }).when("/DangKy", {
      templateUrl: "chucnang/DangKy.html",
      controller: "registerCtrl"
    }).when("/QuenMatKhau", {
      templateUrl: "chucnang/QuenMatKhau.html",
      controller: "forgotpasswordCtrl"
    }).when("/DoimatKhau", {
      templateUrl: "chucnang/DoiMatKhau.html",
      controller : "changepassCtrl"
    }).when("/CapNhatTaiKhoan", {
      templateUrl: "chucnang/CapNhatTaiKhoan.html",
      controller : "updateCtrl"
    }).when("/Quiz/:id/:name", {
      templateUrl: "chucnang/quiz.html",
      controller : "startquizCtrl"
    })
    ;

});
