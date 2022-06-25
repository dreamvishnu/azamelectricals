app.controller('SeekerCtrl', function($rootScope, $scope, $http, $location) {
	$rootScope.profileactive = 'seeker';
	$rootScope.userprofile = JSON.parse(localStorage.getItem("userprofile"));
	
	$scope.postjob = {};
	$scope.skills = {};
	$scope.sub_skills = {};
	$scope.showindustry = true;
	
	
	$scope.get_job_feed = function(){
		$scope.dataset = {};
	
		
		$scope.dataset.params = $rootScope.userprofile;
		$scope.joblist = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main+'projects.php' , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			//if(responsedata.data.status == 1){
				$scope.joblist = responsedata.data.data;
			//}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	
	
	
	$scope.get_project_item = function(){
		$scope.dataset = {};
	
		
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		$scope.joblist = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main+'project_item.php' , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			//if(responsedata.data.status == 1){
				$scope.joblist = responsedata.data;
			//}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	
	$scope.get_all_product_unit = function(){
		$scope.dataset = {};
	
	
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		$scope.joblist = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main+'getProductUnit.php' , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			//if(responsedata.data.status == 1){
				$scope.ProductUnit = responsedata.data;
			//}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	$scope.link_item = function(x){
		$scope.LinkItem = x;
	}
	$scope.saveproduct_added = function(){
		$scope.dataset = {};
	
		
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		$scope.dataset.params.items = $scope.listitem_added;
		$scope.dataset.params.LinkItem = $scope.LinkItem;
		$scope.joblist = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main+'saveProducts.php' , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			//console.log(responsedata);
			//if(responsedata.data.status == 1){
				//$scope.ProductUnit = responsedata.data;
			//}
			$('#clickmetoclose').click();
			$scope.listitem_added ={};
			$scope.get_project_item();
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	
	$scope.linkproduct = {};
	$scope.get_selected_item = function(){
		console.log($scope.ProductUnit);
		console.log($scope.linkproduct.product_id);
		$scope.listitem_added = [];
		angular.forEach($scope.ProductUnit.product, function (value, key) {
			angular.forEach($scope.linkproduct.product_id, function (v, k) {
				if(value.product_id == v){
					$scope.listitem_added.push(value);
				}
			})
        }); 
		
	}
	
	
	$scope.get_project_task = function(){
		$scope.dataset = {};
	
		$scope.dataset.class = 'TaskBoard';
		$scope.dataset.method = 'getTaskBoardData';
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		$scope.joblist = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main+'getTaskBoardData.php' , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			//if(responsedata.data.status == 1){
				$scope.joblist = responsedata.data;
			//}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	
	$scope.get_my_task = function(){
		$scope.dataset = {};
	
		$scope.dataset.class = 'TaskBoard';
		$scope.dataset.method = 'getMyTask';
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		$scope.joblist = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main+'getMyTask.php' , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			//if(responsedata.data.status == 1){
				$scope.joblist = responsedata.data;
			//}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.get_today_task = function(){
		$scope.dataset = {};
	
		
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		$scope.joblist = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main+'getTodayTask.php' , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			//if(responsedata.data.status == 1){
				$scope.joblist = responsedata.data;
			//}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.add_task = function(){
		$location.path('/add_task');
	}
	
	$scope.get_all_employee_inproject = function(){
		$scope.dataset = {};
	
		$scope.dataset.class = 'TaskBoard';
		$scope.dataset.method = 'getEmplyeeProject';
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		$scope.employlist = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main+'getEmplyeeProject.php' , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			//if(responsedata.data.status == 1){
				$scope.employlist = responsedata.data;
			//}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	$scope.workprofile = {};
	$scope.submit_task = function(){
		$scope.dataset = {};
	
		$scope.dataset.class = 'TaskBoard';
		$scope.dataset.method = 'AddTaskMobile';
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		$scope.dataset.params.task = $scope.workprofile;
		$scope.employlist = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main+'AddTaskMobile.php' , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			$location.path('/seeker_education');
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
		
	$scope.get_complted_task = function(){
		$scope.dataset = {};
	
		
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		$scope.joblist = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main+'CompletedTask.php' , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			//if(responsedata.data.status == 1){
				$scope.joblist = responsedata.data;
			//}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	$scope.punchin = 0;
	$scope.punch_attandance = function(type){
		$scope.dataset = {};
		var r = confirm("Are you Sure!");
		if(r == true){
			
			$scope.dataset.params = $rootScope.userprofile;
			$scope.dataset.params.type = type;
			$scope.dataset.params.latid = localStorage.getItem('lat');
			$scope.dataset.params.longid = localStorage.getItem('log');
			$scope.joblist = [];
			$scope.showerror = false;
			$rootScope.loader = true;
			$http.post($rootScope.baseurl_main +'PunchAttandance.php', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
				console.log(responsedata);
				$scope.get_punch_data();
				$rootScope.loader = false;
				
			}, function errorCallback(response) {
				$scope.showerror = true;
				$rootScope.loader = false;
				$scope.$apply();
	   
			});
		}
	}
	
	
	
	
	$scope.get_punch_data = function(){
		$scope.dataset = {};
	
		
		$scope.dataset.params = $rootScope.userprofile;
		
		$scope.joblist = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main+'GetAttandance.php' , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			if(responsedata.data.status == 'success'){
				$scope.punchin = 1;
				cordova.plugins.foregroundService.start('AZAM ELECTRICAL', 'PUNCH IN');
			}else{
				$scope.punchin = 0;
				cordova.plugins.foregroundService.start('AZAM ELECTRICAL', 'PUNCH OUT');
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.submit_request = function(){
		
		$scope.dataset = {};
	
		$scope.dataset.class = 'Payments';
		$scope.dataset.method = 'SubmitRequestData';
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		$scope.dataset.params.items = $scope.joblist.data;
		$scope.dataset.params.request_message = $scope.request_message;
		$scope.dataset.params.request_date = $scope.request_date;
	
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			if(responsedata.data.status == 'success'){
				$location.path('/request_items');
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	
	$scope.update_request = function(d){
		$scope.dataset = {};
	
		$scope.dataset.class = 'Payments';
		$scope.dataset.method = 'UpdateRequestData';
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		$scope.dataset.params.data = d;
		
	
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			if(responsedata.data.status == 'success'){
				$location.path('/request_items');
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.accept_request = function(){
		$scope.dataset = {};
	
		$scope.dataset.class = 'Payments';
		$scope.dataset.method = 'MangerApproveRequestData';
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		
	
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			if(responsedata.data.status == 'success'){
				$location.path('/request_items');
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.approve_request = function(){
		$scope.dataset = {};
	
		$scope.dataset.class = 'Payments';
		$scope.dataset.method = 'AproveRequestData';
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.project_id = $rootScope.ProjectId;
		
	
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			if(responsedata.data.status == 'success'){
				$location.path('/request_items');
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.get_requested_item =function(){
		$scope.dataset = {};
	
		$scope.dataset.class = 'Payments';
		$scope.dataset.method = 'ViewRequestData';
		$scope.dataset.params = $rootScope.userprofile;
		
		$scope.reqest_list = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			//if(responsedata.data.status == 'success'){
				$scope.reqest_list = responsedata.data;
			//}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	$scope.get_requested_item_data =function(){
		$scope.dataset = {};
	
		$scope.dataset.class = 'Payments';
		$scope.dataset.method = 'ViewRequestDataItem';
		$scope.dataset.params = $rootScope.userprofile;
		$scope.dataset.params.request_id = $rootScope.ProjectId;
		
		$scope.reqest_list = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			//if(responsedata.data.status == 'success'){
				$scope.reqest_list = responsedata.data;
			//}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	//Shorting proces 
	$scope.rejectprofileid = '';
	$scope.view_project_item = function(Id){
		$rootScope.ProjectId = Id;
		$location.path('/seeker_chat_message');
	}
	
	$scope.viewitems = function(Id){
		$rootScope.ProjectId = Id;
		$location.path('/seeker_hour_rate');
	}
	$scope.view_project_task = function(Id){
		$rootScope.ProjectId = Id;
		$location.path('/seeker_education');
	}
	
	
	$scope.swith_task = function(item,list){
		$scope.selecteitem = item;
	}
	$scope.movetaskitem = function(item,task){
		$scope.dataset = {};
	
		$scope.dataset.class = 'Projects';
		$scope.dataset.method = 'moveProjectsData';
		$scope.dataset.params_item = item;
		$scope.dataset.params_task = task;
		
		$scope.reqest_list = [];
		$scope.showerror = false;
		$rootScope.loader = true;
		$http.post($rootScope.baseurl_main , $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			//if(responsedata.data.status == 'success'){
				$scope.get_project_task();
			//}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
});