var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  // $scope.records = [
  // {FCode:"F001",FItem:"Amazing Italian Sauces",price:400,img:"italina.jpg"},
  // {FCode:"F002",FItem:"Indian traditional food ",price:200,img:"indian.jpg"},
  // {FCode:"F003",FItem:"Spicy Green  Salad ",price:300,img:"thai.jpg"},
  // {FCode:"F004",FItem:"Pasta E Basilico ",price:150,img:"pasta.jpg"},
  // {FCode:"F005",FItem:"Khao Pad (Fried Rice) ",price:250,img:"Khao_Pad.jpg"},
  // {FCode:"F006",FItem:"Rice Pudding (Kheer)",price:50,img:"kheer.jpg"},
  // ]
initializeItems();


  function initializeItems() {
      $scope.items = [
      {FCode:"F001",FItem:"Amazing Italian Sauces",price:400,img:"italian.jpg"},
      {FCode:"F002",FItem:"Indian traditional food ",price:200,img:"indian.jpg"},
      {FCode:"F003",FItem:"Spicy Green  Salad ",price:300,img:"thai.jpg"},
      {FCode:"F004",FItem:"Pasta E Basilico ",price:150,img:"pasta.jpg"},
      {FCode:"F005",FItem:"Khao Pad (Fried Rice) ",price:250,img:"Khao_Pad.jpg"},
      {FCode:"F006",FItem:"Rice Pudding (Kheer)",price:50,img:"kheer.jpg"},
   ];

   $scope.records =$scope.items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
   // $scope.records=$scope.items;//.filter(p => p.price)
   }




});
