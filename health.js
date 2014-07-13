var app = angular.module("myapp", ["firebase"]);
function TodoCtrl($scope, $firebase) {
var FB = "";
$scope.hidden = false;
      var ref = new Firebase(FB);
      $scope.todos = $firebase(ref);

   $scope.addTodo = function() {
      $scope.todos.$add({text: $scope.todoText, "date" : new Date(), "measurement" : $scope.measurement, done: false});
      $scope.todoText = '';
   };
$scope.done = function(key) {
      
      // Figure out how to "edit the current entry"
      var ref2 = new Firebase(FB + key);
      $scope.update = $firebase(ref2);
      $scope.update.$update({done: $scope.todos[key].done});
      $scope.todoText = '';
   };
   $scope.archive = function(){
      $scope.todos.$update({hidden : true});
      $scope.todos.hidden = true;
   };
$scope.showAll = function(){
       $scope.todos.$update({hidden : false});
   };
$scope.hide = function(value) {
        if (value != null)
	{
		if ($scope.todos.hidden)
		{
		  return value;
		}
		else
		{
		   return false;
		}
	}
else
{
return true;
}
};
}

