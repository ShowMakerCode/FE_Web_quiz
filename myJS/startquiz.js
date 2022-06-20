// var app = angular.module("myApp", []);
app.controller("startquizCtrl", function ($scope, $http, $routeParams, $rootScope) {
  $scope.questions = [];
  $scope.NameAnswer = $routeParams.name;
  $rootScope.checkedtrue;
  $scope.coreID=$routeParams.id;
  $scope.questions_list_true = [10];
  $scope.question_list_checked = [10];
  $scope.submit_check = true;
  $scope.showdiem = false;
  $http.get('db/Quizs/' + $routeParams.id + '.js').then(function (reponse) {
    $scope.questions = reponse.data;
  });
  // hourse
  var hours = 0,
    minutes = 15,
    seconds = 10,
    target = new Date(),
    timerDiv = document.getElementById("timer"),
    handler;
  function init() {
    if ($rootScope.student == null) {
      return;
    }
    // set the target date time with the counter values
    // counters more then 24h should have a date setup or it wont work
    target.setHours(hours);
    target.setMinutes(minutes);
    target.setSeconds(seconds);
    target.setMilliseconds(0); // make sure that miliseconds is 0
    timerDiv.innerHTML = target.toTimeString().split(" ")[0]; // print the value
  }
  function updateTimer() {
    var time = target.getTime();
    target.setTime(time - 1000); // subtract 1 second with every thick
    timerDiv.innerHTML = target.toTimeString().split(" ")[0];
    if (
      target.getHours() === 0 &&
      target.getMinutes() === 0 &&
      target.getSeconds() === 0
    ) { // counter should stop
      clearInterval(handler);
      swal("Bạn Đã Hết Thời Gian Làm Bài", "You clicked the button!", "info");
    }
  }
  handler = setInterval(updateTimer, 1000);
  document.getElementById("start-button").addEventListener("click", function () {
    clearInterval(handler);
    handler = setInterval(updateTimer, 1000);
    init();
  });

  $scope.start = function () {
    if ($rootScope.student == null) {
      swal("Bạn Cần Đăng Nhập Để làm Bài!", "Vui Lòng Đăng Nhập!", "error");
      return;
    }
    $scope.id = 0;
    $scope.inProgess = true;
    $scope.getQuestion();
  }
  $scope.reset = function () {
    $scope.inProgess = false;
  }
  $scope.rand = Math.floor(Math.random() * 20);
  $scope.getQuestion = function () {
    $scope.question = $scope.questions[$scope.id + $scope.rand ].Text;
    $scope.options = $scope.questions[$scope.id + $scope.rand ].Answers;
    $scope.questions_list_true[$scope.id] = $scope.questions[$scope.id + $scope.rand ].AnswerId;
  }
  $scope.nextQuestion = function () {
    if (
      target.getHours() === 0 &&
      target.getMinutes() === 0 &&
      target.getSeconds() === 0
    ) { // counter should stop
      clearInterval(handler);
      swal("Bạn Đã Hết Thời Gian Làm Bài", "You clicked the button!", "info");
      return
    }
    if ($scope.id == 10) return;
    var rates = document.getElementsByName('answer');
    for (var i = 0; i < rates.length; i++) {
      if (rates[i].checked) {
        $scope.question_list_checked[$scope.id] = rates[i].value;
      }
    }
    // $scope.checkedpick = false;
    $scope.id++;
    if($scope.question_list_checked[$scope.id] != undefined){
      setTimeout(() => {document.getElementById($scope.question_list_checked[$scope.id]).checked = true;}, 200);
    }
    $scope.getQuestion();
    
  }
  $scope.backQuestion = function () {
    if (
      target.getHours() === 0 &&
      target.getMinutes() === 0 &&
      target.getSeconds() === 0
    ) { // counter should stop
      clearInterval(handler);
      swal("Bạn Đã Hết Thời Gian Làm Bài", "You clicked the button!", "info");
    }
    if ($scope.id == 0) return;
    $scope.id--;
    console.log($scope.question_list_checked[$scope.id]);
    if($scope.question_list_checked[$scope.id] != undefined){
      setTimeout(() => {document.getElementById($scope.question_list_checked[$scope.id]).checked = true;}, 200);
    }
    $scope.getQuestion();
  }

  $scope.diemso = 0;
  $scope.checkAnswer = function () {
    if ($scope.id == 10) {
      target.setHours() === 0;
      target.setMinutes() === 0;
      target.setSeconds() === 0;
    }
    $scope.ChamDiem();
    swal("Chúc Mừng!", "Mày Đã Được :" + $scope.diemso, "success");
    $scope.submit_check = false;
    $scope.showdiem = true;
  }

 $scope.ChamDiem = function(){
  var diemso = 0 
  for (let i = 0; i < 10; i++) {
    console.log($scope.question_list_checked[i]);
      console.log($scope.questions_list_true[i]);
    if($scope.question_list_checked[i] == $scope.questions_list_true[i]){
      diemso++;
    }
}
  $scope.diemso = diemso;
 }
  $scope.reset();
});


