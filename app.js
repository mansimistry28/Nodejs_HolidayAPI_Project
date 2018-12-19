var app = angular.module('myApp', []);

app.controller('holidayCtrl', function($scope, $http) {

$scope.submitHoliday = function(){
  
$scope.searchHearder = "";    
    
	   
    $scope.urlsearch = "https://holidayapi.com/v1/holidays?key=c8bc3635-5905-4d96-89d8-1166e72d29a2&country="+ $scope.countryDDL +"&year="+ $scope.yearDDL + "&month=" + $scope.monthDDL;
 
    
    $http.get($scope.urlsearch).then(function (response) {        
    $scope.myData = response.data;
      
     var dataAvail = true;
        var check = false; 
   
        if($scope.myData.holidays != "" || check==true)
            {
               dataAvail = true;
               $scope.holidayList = $scope.myData.holidays;
        
               $scope.name = "Name: ";
               $scope.date = "Date: ";
            }
        else
            {
                dataAvail = false;
            }
       
        if(!dataAvail)
            {
              document.getElementById("DataOuter").innerHTML = "No Holidays!!!!";
              $scope.holidayList = "Single";
              $scope.name = "";
              $scope.date = "";
                  
              check=true;
            }
        else
            {
                    
                $scope.myData = response.data;
                $scope.holidayList = $scope.myData.holidays;
        
                $scope.name = "Name: ";
                $scope.date = "Date: ";
            }
    
  });
}
});