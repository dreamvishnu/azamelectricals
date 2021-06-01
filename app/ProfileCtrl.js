app.controller('ProfileCtrl', function($rootScope, $scope, $http, $location) {

    $scope.userprofile = {};
    
	
	
	$scope.login = function() {
		$scope.loginerror = '';
        var intstatus = $rootScope.internetcheck();
        if (intstatus == false) {
            return false;
        }
		$scope.dataset = {};
        $rootScope.loader = true;
        $scope.loginvar.type = $rootScope.type;
        $scope.loginvar.version = $rootScope.version;
		$scope.dataset.class = 'Login';
		$scope.dataset.method = 'getLoginResult';
		$scope.dataset.data =  $scope.loginvar;
        $http.post($rootScope.baseurl_main, $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 10000}).then(function(response) {
			console.log(response);
            $scope.trycount = 0;
			$scope.loginerror = '';
			$rootScope.loader = false;
			if(response.data.status == 1){
				
				localStorage.setItem("userprofile", JSON.stringify(response.data));
				
				$rootScope.userprofile = response.data;
				console.log($rootScope.userprofile);
				
				$rootScope.loginuser = true;
				$rootScope.checkpage_login();
			}else{
				$scope.loginerror = response.data.msg;
			}
         
			
        },function errorCallback(response) {
            if ($scope.trycount < 4) {
                $scope.trycount = $scope.trycount + 1;
                $scope.login();
            } else {
                $scope.trycount = 0;
                $rootScope.loader = false;
                $scope.loginerror = $rootScope.interneterror;
            }
        });
    }
	$scope.showotpnewpassword=false;
	$scope.forgotpassword = function() {
		$scope.loginerror = '';
        var intstatus = $rootScope.internetcheck();
        if (intstatus == false) {
            return false;
        }
        $rootScope.loader = true;
        $scope.loginvar.type = $rootScope.type;
        $scope.loginvar.version = $rootScope.version;
       
        $http.post($rootScope.baseurl_main + 'api_controller/forget_password', $scope.loginvar, {headers: {"Content-Type": "application/json"},timeout: 10000}).then(function(response) {
			
            $scope.trycount = 0;
			$scope.loginerror = '';
			$rootScope.loader = false;
			if(response.data.status == 'success'){
				$scope.showotpnewpassword=true;
				
				$scope.successmessage = response.data.dataset;
			}else{
				$scope.loginerror = response.data.dataset;
			}
         
			
        },function errorCallback(response) {
            if ($scope.trycount < 4) {
                $scope.trycount = $scope.trycount + 1;
                $scope.forgotpassword();
            } else {
                $scope.trycount = 0;
                $rootScope.loader = false;
                $scope.loginerror = $rootScope.interneterror;
            }
        });
    }
	
	$scope.changepassword = function() {
		$scope.loginerror = '';
        var intstatus = $rootScope.internetcheck();
        if (intstatus == false) {
            return false;
        }
        $rootScope.loader = true;
        $scope.loginvar.type = $rootScope.type;
        $scope.loginvar.version = $rootScope.version;
       
        $http.post($rootScope.baseurl_main + 'api_controller/changepassword', $scope.loginvar, {headers: {"Content-Type": "application/json"},timeout: 10000}).then(function(response) {
			
            $scope.trycount = 0;
			$scope.loginerror = '';
			$rootScope.loader = false;
			if(response.data.status == 'success'){
				$scope.showotpnewpassword=true;
				$location.path('/login');
			}else{
				$scope.loginerror = response.data.dataset.message;
			}
         
			
        },function errorCallback(response) {
            if ($scope.trycount < 4) {
                $scope.trycount = $scope.trycount + 1;
                $scope.changepassword();
            } else {
                $scope.trycount = 0;
                $rootScope.loader = false;
                $scope.loginerror = $rootScope.interneterror;
            }
        });
    }
	
	
	
	$scope.register = function() {
		$scope.loginerror = '';
        var intstatus = $rootScope.internetcheck();
        if (intstatus == false) {
            return false;
        }
        $rootScope.loader = true;
        $scope.loginvar.type = $rootScope.type;
        $scope.loginvar.version = $rootScope.version;
        $rootScope.R_EMAIL = $scope.loginvar.Email;
        $http.post($rootScope.baseurl_main + 'api_controller/register', $scope.loginvar, {headers: {"Content-Type": "application/json"},timeout: 10000}).then(function(response) {
			
            $scope.trycount = 0;
			$scope.loginerror = '';
			$rootScope.loader = false;
			if(response.data.status == 'success'){
				$location.path('/registration_otp');
			}else{
				$scope.loginerror = response.data.message;
			}
         
			
        },function errorCallback(response) {
           
                $scope.trycount = 0;
                $rootScope.loader = false;
               
            
        });
    }
	
	$scope.register_otp = function() {
		$scope.loginerror = '';
        var intstatus = $rootScope.internetcheck();
        if (intstatus == false) {
            return false;
        }
        $rootScope.loader = true;
        $scope.loginvar.type = $rootScope.type;
        $scope.loginvar.version = $rootScope.version;
        $scope.loginvar.email = $rootScope.R_EMAIL;
        
        $http.post($rootScope.baseurl_main + 'api_controller/verify_register', $scope.loginvar, {headers: {"Content-Type": "application/json"},timeout: 10000}).then(function(response) {
			
            $scope.trycount = 0;
			$scope.loginerror = '';
			$rootScope.loader = false;
			if(response.data.status == 'success'){
				$location.path('/registration-success');
			}else{
				$scope.loginerror = response.data.message;
			}
         
			
        },function errorCallback(response) {
           
                $scope.trycount = 0;
                $rootScope.loader = false;
               
            
        });
    }
	$scope.role = '';
	
	$scope.select_role = function(role){
		$scope.dataset = {};
		$rootScope.userprofile = JSON.parse(localStorage.getItem("userprofile"));
		$scope.dataset.role = role;
		$scope.dataset.UserId = $rootScope.userprofile.Id;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'api_controller/set_role', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			$rootScope.userprofile.Role = role;
			
			$scope.role = role;
			localStorage.setItem('userprofile',JSON.stringify($rootScope.userprofile));
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.role = "";
			$scope.$apply();

		});
	}
	$scope.gender = '';
	$scope.select_gender = function(gender){ 
		$scope.dataset = {};
		$rootScope.userprofile = JSON.parse(localStorage.getItem("userprofile"));
		$scope.dataset.gender = gender;
		$scope.dataset.UserId = $rootScope.userprofile.Id;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'api_controller/set_gender', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			$rootScope.userprofile.Gender = gender;
			
			$scope.gender = gender;
			localStorage.setItem('userprofile',JSON.stringify($rootScope.userprofile));
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.gender = "";
			$scope.$apply();

		});
	}
	
	
	
	$scope.googlelogin =  function(){

		window.plugins.googleplus.login(
			{},
			function (obj) {
			     $scope.userprofile_google = {};
			     $scope.userprofile_google = obj;
                 $scope.userprofile_google.provider = 'google';
                 $rootScope.loader = true;
                 $http.post($rootScope.baseurl_main + 'api_controller/login_google', $scope.userprofile_google, {headers: {"Content-Type": "application/json"},timeout: 10000}).then(function(response) {
                 		$scope.trycount = 0;
                        $scope.loginerror = '';
                        $rootScope.loader = false;
                         //alert(JSON.stringify(response));
                 		if(response.data.status == 'success'){
                            localStorage.setItem("token", response.data.key);
                            localStorage.setItem("userprofile", response.data.dataset);

                            $rootScope.userprofile = JSON.parse(response.data.dataset);
                            console.log($rootScope.userprofile);
                            $rootScope.token = response.data.key;
                            $rootScope.loginuser = true;
                            $rootScope.checkpage_login();
                 		}else{
                 			$scope.loginerror = response.data.dataset.message;
                 		}


                         },function errorCallback(response) {
                            //alert(JSON.stringify(response));
                             if ($scope.trycount < 4) {
                                 $scope.trycount = $scope.trycount + 1;
                                 $scope.googlelogin();
                             } else {
                                 $scope.trycount = 0;
                                 $rootScope.loader = false;
                                 $scope.loginerror = $rootScope.interneterror;
                             }
                         });
			},
			function (msg) {
			  alert('error: ' + msg);
			}
		);
			
	}


});
