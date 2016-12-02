'use strict';

let app = angular.module('myApp', ['ui.router', 'firebase']);



/*
auth.signInWithEmailAndPasswor(email, pass);
auth.createUserWithEmailAndPassword(email, pass);
auth.onAuthStateChanged(firebase => { });*/

app.service("FirebaseLogic", ["$firebaseObject", function($firebaseObject) {
    
    // var rootRef = new Firebase('https://mailbox-87bdf.firebaseio.com');  

    

  }
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/login',
        template: '<login />'
    })/*.state('box', {
        url: '/box',
        template: `<box box-id="boxId"/>`,
        controller: function($stateParams, $scope) {
            $scope.boxId = $stateParams.boxId;
        }
    })*/;

    $urlRouterProvider.otherwise('/login');
    
});

app.component('login', {
    templateUrl: 'components/login/login.html',
    controller: function(FirebaseLogic, $firebaseAuth) { 

        // console.log(firebase.auth());

        // console.log($scope.authObj);
        // const auth = firebase.auth();
     
        // var firebaseObj = new Firebase("https://mbox-91430.firebaseio.com");
        // var loginObj = $firebaseSimpleLogin(firebaseObj);

        // console.log($firebaseAuth);
        
        this.user = {
            email: '',
            password: ''
        }
        this.submitForm = () => { 
            
            var username = this.user.email;
            var password = this.user.password;

            const auth = firebase.auth();
            // console.log(auth);
            
            var test = auth.signInWithEmailAndPassword(email, password);

            console.log(test);
            
            /*
            if (username == 'dante5000@mail.ru' && password == '111') {
                alert('You\'re logged in!');
            } else {
                alert('Please try again!');
            }*/

            /*
            loginObj.$login('password', {
                email: username,
                password: password
            })
            .then(function(user) {
                // колбэк запустится при успешной аутентификации аутентификацииSuccess callback
                console.log('Authentication successful');
            }, function(error) {
                // колбэк при неудаче
                console.log('Authentication failure');
            });*/
            
        }
    }

    /*controller: function() {
        var testos = userForm.email;
        alert(userForm.email != ''?'empty':'full');
    }*/
});


/*app.controller('mainController', function($scope) {

    // function to submit the form after all validation has occurred
    $scope.submitForm = function() {

        // check to make sure the form is completely valid
        if ($scope.userForm.$valid) {
            alert('You\'re logged in!');
        }

    };

});*/

/*app.component('box', {
    // template: `<p>test</p>`
    templateUrl: 'components/login/login.html',
    bindings: {
        boxId: '<',
    }
});*/

/*.run(function($rootScope, $state){
 if(!$rootScope.user && $state.current.name !== 'signup'){
 $state.go('signin');
 }
 })*/

/*app.component('auth', {
    templateUrl: 'components/login/login.html'
});*/

/*app.config(function($stateProvider) {

});*/

/*let app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider) {
  $stateProvider.state('home', {
    // url: '/'
    $routeProvider.otherwise({redirectTo: '/'});
  }).state('box', {
    url: '/box',
    template: `<box box-id="boxId"/>`,
    controller: function($stateParams, $scope) {
      $scope.boxId = $stateParams.boxId;
    }
  });
});

app.component('box', {
  templateUrl: 'mailbox/box.tpl.html',
  bindings: {
    boxId: '<',
  }
});*/

// Old info

// Declare app level module which depends on views, and components
/*angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/
