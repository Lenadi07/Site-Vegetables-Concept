'use strict';
angular.module('vege', [])
.controller('MenuController', ['$scope', function($scope) {

 $scope.li = 1;
 $scope.filtText= '';

 $scope.dishes=[
 {
   name:'SMOKED RICOTTA TERRINE.......................................................',
   category:'main',
   price:'12$',
   description:' ricotta, shallots, cheddar, capers'
 },
 {
   name:'SAMPHIRE FRITTERS WITH FENNEL CEVICHE......................',
   category: 'desserts',
   price: '19$',
   description:' fresh samphire, plain flour, cornflower, eggs, fennel'
 },
 {
   name:'PAN FRIED COURGETTE FLOWERS...........................................',
   category:'drinks',
   price:'13$',
   description:' courgette flowers, goats cheese, red onion, pine nuts'
 },
 {
   name:'SMOKED RICOTTA TERRINE.......................................................',
   category:'main',
   price:'17$',
   description:' ricotta, shallots, cheddar, capers'
 },
 {
   name:'PAN FRIED COURGETTE FLOWERS...........................................',
   category:'drinks',
   price:'12$',
   description:' courgette flowers, goats cheese, red onion, pine nuts'
 },
 {
   name:'SMOKED RICOTTA TERRINE.......................................................',
   category:'drinks',
   price:'16$',
   description:' ricotta, shallots, cheddar, capers'
 },
 {
   name:'SMOKED RICOTTA TERRINE.......................................................',
   category:'desserts',
   price:'17$',
   description:' ricotta, shallots, cheddar, capers'
 }
 ];


$scope.select = function(setLi) {
           $scope.li = setLi;
                        if (setLi === 2) {
                          $scope.filtText = "main";
                        }
                        else if (setLi === 3) {
                          $scope.filtText = "desserts";
                        }
                        else if (setLi === 4) {
                          $scope.filtText = "drinks";
                        }

                        else {
                          $scope.filtText = "";
                        }


       };

$scope.isSelected = function (checkLi) {
                   return ($scope.li === checkLi);
               };
}])
.controller('FeedbackController', ['$scope', function($scope)
{
  $scope.feedback = {mychannel:"", firstname:"",email:"" };

}])
;
