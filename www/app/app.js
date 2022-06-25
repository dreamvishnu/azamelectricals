/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */
/**
 * Main AngularJS Web Application
 */
var app = angular.module('GigApp', ['ngRoute']);

/**
 * Configure the Routes
 */
//alert($( window ).width());
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		// Home
		.when("/", {
			templateUrl: "views/application/landing.html",
			controller: "ProfileCtrl"
		})
		.when("/forgot_password", {
			templateUrl: "views/users/forgot_password.html",
			controller: "ProfileCtrl"
		}).
		when("/register", {
			templateUrl: "views/users/register.html",
			controller: "ProfileCtrl"
		}).
		when("/user_role", {
			templateUrl: "views/users/user_role.html",
			controller: "ProfileCtrl"
		}).
		when("/user_gender", {
			templateUrl: "views/users/user_gender.html",
			controller: "ProfileCtrl" 
		}).
		when("/registration_otp", {
			templateUrl: "views/users/registration_otp.html",
			controller: "ProfileCtrl"
		}).
		when("/dashboard", {
			templateUrl: "views/botman/dashboard.html",
			controller: "ApplicatioCtrl"

		}).
		when("/registration-success", {
			templateUrl: "views/users/registration-success.html",
			controller: "ProfileCtrl"

		}).
		when("/edit-profile", {
			templateUrl: "views/users/edit-profile.html",
			controller: "EditApplicatioCtrl"

		}).
		when("/login", {
			templateUrl: "views/users/login.html",
			controller: "ProfileCtrl"
		}).
		when("/seeker_landing", {
			templateUrl: "views/seekers/landing.html",
			controller: "SeekerCtrl"
		}).
		when("/seeker_title_overview", {
			templateUrl: "views/seekers/seeker_title_overview.html",
			controller: "SeekerCtrl"
		}).
		when("/request_items", {
			templateUrl: "views/seekers/request_itmes.html",
			controller: "SeekerCtrl"
		}).
		when("/seeker_expertise", {
			templateUrl: "views/seekers/seeker_expertise.html",
			controller: "SeekerCtrl"
		}).
		when("/seeker_expertise_level", {
			templateUrl: "views/seekers/seeker_expertise_level.html",
			controller: "SeekerCtrl"
		}).
		when("/seeker_education", {
			templateUrl: "views/seekers/seeker_education.html",
			controller: "SeekerCtrl"
		}).
		when("/seeker_employement", {
			templateUrl: "views/seekers/seeker_employement.html",
			controller: "SeekerCtrl"
		}).
		when("/seeker_languages", {
			templateUrl: "views/seekers/seeker_languages.html",
			controller: "SeekerCtrl"
		}).
		when("/seeker_hour_rate", {
			templateUrl: "views/seekers/seeker_hour_rate.html",
			controller: "SeekerCtrl"
		}).
		when("/seeker_location", {
			templateUrl: "views/seekers/seeker_location.html",
			controller: "SeekerCtrl"
		}).
		when("/seeker_phone", {
			templateUrl: "views/seekers/seeker_phone.html",
			controller: "SeekerCtrl"
		}).
		when("/seekers_my_gigs", {
			templateUrl: "views/seekers/seekers_my_gigs.html",
			controller: "SeekerCtrl"
		}).
		when("/seekers_my_application", {
			templateUrl: "views/seekers/seekers_my_application.html",
			controller: "SeekerCtrl"
		}).
		when("/seekers_saved_gigs", {
			templateUrl: "views/seekers/seekers_saved_gigs.html",
			controller: "SeekerCtrl"
		}).
		when("/seekers_notification", {
			templateUrl: "views/seekers/seekers_notification.html",
			controller: "SeekerCtrl"
		}).
		when("/seekers_search_by_category", {
			templateUrl: "views/seekers/seekers_search_by_category.html",
			controller: "SeekerCtrl"
		}).
		when("/seekers_chat", {
			templateUrl: "views/seekers/seekers_chat.html",
			controller: "SeekerCtrl"
		}).
		when("/seekers_messages", {
			templateUrl: "views/seekers/seeker_messages.html",
			controller: "SeekerCtrl"
		}).
		
		when("/seeker_chat_message", {
			templateUrl: "views/seekers/seeker_chat_message.html",
			controller: "SeekerCtrl"
		}).
		when("/add_task", {
			templateUrl: "views/seekers/add_task.html",
			controller: "SeekerCtrl"
		}).
		when("/provider_company_info", {
			templateUrl: "views/provider/provider_company_info.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_industry", {
			templateUrl: "views/provider/provider_industry.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_company_logo", {
			templateUrl: "views/provider/provider_company_logo.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_location", {
			templateUrl: "views/provider/provider_location.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_contact_info", {
			templateUrl: "views/provider/provider_contact_info.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_my_gigs", {
			templateUrl: "views/provider/provider_my_gigs.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_massages", {
			templateUrl: "views/provider/provider_massages.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_contact_info", {
			templateUrl: "views/provider/provider_contact_info.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_top_gig_seekers", {
			templateUrl: "views/provider/provider_top_gig_seekers.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_successful_gig_seekers", {
			templateUrl: "views/provider/provider_successful_gig_seekers.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_notification", {
			templateUrl: "views/provider/provider_notification.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_search_by_cat", {
			templateUrl: "views/provider/provider_search_by_cat.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_chat_message", {
			templateUrl: "views/provider/provider_chat_message.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_chat", {
			templateUrl: "views/provider/provider_chat.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_new_gig", {
			templateUrl: "views/provider/provider_new_gig.html",
			controller: "ProviderCtrl"
		}).
		when("/provider_saved_profile", {
			templateUrl: "views/provider/provider_saved_profile.html",
			controller: "ProviderCtrl"
		}).
		when("/view_applistlist", {
			templateUrl: "views/provider/view_applistlist.html",
			controller: "ProviderCtrl"
		})
		
		
		.otherwise("/", {
			templateUrl: "partials/404.html",
			ontroller: "PageCtrl"
		});
}]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", "$location", "$window", function ($rootScope, $http, $browser, $timeout, $route, $location, $window) {
	

	//Test Region 
	$rootScope.baseurl_main = 'https://95.111.227.224/ProjectManagement/mobileapi/index.php';
	$rootScope.baseurl = 'https://95.111.227.224/ProjectManagement/';
	$rootScope.profileactive = 'NOLOGIN';
	$rootScope.version = '1.0.1';
	$rootScope.type = 'Android';
	$rootScope.search = {};
	$rootScope.internetcheck = function(){
		return true;
	}
	
	$rootScope.checklogin = function(){
		
		if (localStorage.getItem("userprofile")) {

			$rootScope.userprofile = JSON.parse(localStorage.getItem("userprofile"));
			$rootScope.token = localStorage.getItem("token");
			$rootScope.checkpage_login();
		}else{
			//$location.path('/');
			$rootScope.loader = false;
		}
	}
	
	$rootScope.checkpage_login = function(){
		$location.path('/seeker_landing');
	}
	
	
	
	$rootScope.logout = function(){
		$rootScope.userprofile = {};
		$rootScope.token = '';
		$rootScope.profileactive = '';
		localStorage.setItem("userprofile",'')
		localStorage.setItem("profile_status",'')
		localStorage.setItem("token",'')
		$location.path('/login');
	}
	
	$rootScope.hidemenu = function () {
		$('body.layout-fixed').removeClass('sidebar-open');
	}
	
	
	$rootScope.push_attandance = function(){
		$rootScope.datasett = {};
		
		if (localStorage.getItem("userprofile")) {
			$rootScope.userprofile = JSON.parse(localStorage.getItem("userprofile"));
			//if($rootScope.userprofile.Role == 0){
				$rootScope.datasett.class = 'TaskBoard';
				$rootScope.datasett.method = 'PushAttandance';
				$rootScope.datasett.params = $rootScope.userprofile;
		
				$rootScope.datasett.marked = JSON.parse(localStorage.getItem("mytime"));
			
				
				$http.post($rootScope.baseurl_main , $rootScope.datasett, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
					if(responsedata.data.status == 1){
						localStorage.setItem("mytime",'[]');
					}
				}, function errorCallback(response) {
					$rootScope.showerror = true;
					$rootScope.loader = false;
					$rootScope.$apply();
		   
				});
			//}
		}
	}
	$rootScope.push_attandance();
}]);
app.config(['$locationProvider', function ($locationProvider) {
	$locationProvider.hashPrefix('!');
}]);
app.config(['$qProvider', function ($qProvider) {
	$qProvider.errorOnUnhandledRejections(false);
}]);