app.controller('registerCtrl', function($scope,$http) {
    $scope.register = function() {
        swal("Đăng ký Thành Công !", "You clicked the button!", "success");
        window.location.href = "#!index";
    }
});