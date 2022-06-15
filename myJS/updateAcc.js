app.controller("updateCtrl", function ($scope,$rootScope) {
    $scope.register = function(){
        swal("Cập Nhật Thành Công!", "", "success");
        window.location.href = "#!index";
    }
});