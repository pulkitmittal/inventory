angular.module('starter.controllers', [])

.controller('WarehousesCtrl', function($scope) {
    $scope.warehouses = [
    {
        id: 0,
        name: 'Warehouse A',
        address: 'Daresi No. 2, Agra',
        totalBags: 110,
        maxBags: 150,
        approxWeight: 110*40,
        lastAccessed: '05-10-2015 03:00PM',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }
    ];
})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
