app.controller('ProviderCtrl', function($rootScope, $scope, $http, $location) {
	$rootScope.profileactive = 'provider';
	$scope.porfile_status = localStorage.getItem("profile_status");
	$rootScope.userprofile = JSON.parse(localStorage.getItem("userprofile"));
	$rootScope.token = localStorage.getItem("token");
	
	$scope.searchjob = function(){
		$scope.dataset = {};
		
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;

		$scope.dataset.Key = $rootScope.search.text;
		$scope.gigseekers = [];
		$rootScope.loader = true;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'providerapi/search_seekers', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				$scope.gigseekers = responsedata.data.data;
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	$scope.get_profile_status = function(){
		$scope.dataset = {};
		$scope.showerror = false;
		$rootScope.loader = true;
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		$http.post($rootScope.baseurl_main + 'providerapi/get_profile_status', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			$rootScope.profile_status = responsedata.data.data;
			localStorage.setItem("profile_status",$rootScope.profile_status);
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
	
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	if($rootScope.profile_status != 1){
		$scope.get_profile_status();
		
	}
	$scope.get_all_skills = function(){
		$scope.dataset = {};
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'api/get_all_skills_seeker', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			$scope.skills = responsedata.data.skills;
			
			
			console.log($scope.skills);
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.role = ""; 
			$scope.$apply();
   
		});
	}
	//$scope.get_all_skills();
	$scope.get_my_gigs = function(){
		$scope.dataset = {};
		
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		
		$scope.joblist = [];
		$rootScope.loader = true;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'providerapi/get_my_gigs', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				$scope.joblist = responsedata.data.data;
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.get_top_gigseekers = function(){
		$scope.dataset = {};
		
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		
		$scope.gigseekers = [];

		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'providerapi/get_top_gigseekers', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				$scope.gigseekers = responsedata.data.data;
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.successful_gig_seekers = function(){
		$scope.dataset = {};
		

		
		$scope.gigseekers = [];
		$rootScope.loader = true;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'providerapi/successful_gig_seekers', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				$scope.gigseekers = responsedata.data.data;
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.provider_feed = function(){
		$scope.dataset = {};
		
		$scope.dataset.ProviderId = $rootScope.userprofilep.Id;
		
		$scope.gigseekers = [];
		$rootScope.loader = true;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'providerapi/provider_feed', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				$scope.gigseekers = responsedata.data.data;
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.get_saved_profile = function(){
		$scope.dataset = {};
		
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		
		$scope.gigseekers = [];
		$rootScope.loader = true;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'providerapi/get_saved_profile', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				$scope.gigseekers = responsedata.data.data;
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	
	
	
	
	
	$scope.get_country = function(){
		$scope.dataset = {};
		$scope.showerror = false;
		
		$http.post($rootScope.baseurl_main + 'api/get_all_country', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			$scope.codelist = responsedata.data;
			if($scope.workprofile.City == null || $scope.workprofile.City == ''){
				$scope.getmyaddress();
			}
		}, function errorCallback(response) {
			$scope.showerror = true;
			//console.log($scope.workprofile);
			
   
		});
	}
	
	$scope.get_company_profile = function(){
		$scope.dataset = {};
		
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		
		$scope.gigseekers = [];
		$rootScope.loader = true;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'providerapi/get_company_profile', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				$scope.companyprofile = responsedata.data.data;
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.contact_info = function(){
		$scope.dataset = {};
		
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		$scope.dataset.companyprofile = $scope.companyprofile;
		
		$scope.gigseekers = [];
		$rootScope.loader = true;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'providerapi/contact_info', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				//$scope.companyprofile = responsedata.data.data;
				$location.path('/provider_landing');
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.company_info = function(){
		$scope.dataset = {};
		
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		$scope.dataset.companyprofile = $scope.companyprofile;
		
		$scope.gigseekers = [];
		$rootScope.loader = true;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'providerapi/company_info', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				//$scope.companyprofile = responsedata.data.data;
				$location.path('/provider_industry');
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	$scope.skills = {};
	$scope.sub_skills = {};
	$scope.showindustry = true;
	$scope.showerror = false;
	$scope.get_proovider_skills = function(){
		$scope.dataset = {};
		$scope.showerror = false;
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		$http.post($rootScope.baseurl_main + 'providerapi/get_proovider_skills', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			$scope.skills = responsedata.data.data;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.role = "";
			$scope.$apply();
   
		});
	}
	
	$scope.submit_companyindustry = function(skill){
		$scope.dataset = {};
		$scope.showerror = false;
		$scope.dataset.Industry = skill;
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		$http.post($rootScope.baseurl_main + 'providerapi/company_industry', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			$scope.showmessage = true;
			$scope.get_proovider_skills();
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.role = "";
			$scope.$apply();
   
		});
	}
	
	$scope.company_location = function(){
		$scope.dataset = {};
		
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		$scope.dataset.companyprofile = $scope.companyprofile;
		
		$scope.gigseekers = [];
		$rootScope.loader = true;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'providerapi/company_location', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				//$scope.companyprofile = responsedata.data.data;
				$location.path('/provider_contact_info');
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			$scope.$apply();
   
		});
	}
	
	
	//Image
	$scope.submitimage = function(){
		$scope.dataset = {};
		$scope.showerror = false;
		//$scope.employemnt.Company = $scope.CompanyName.title;
		$scope.dataset.image = $scope.base64img; 
		$scope.dataset.SeekerId = $rootScope.userprofile.Id;
		$scope.submitted = true;
		$http.post($rootScope.baseurl_main + 'seekerapi/submitimage', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			console.log(responsedata);
			
			$scope.submitted = false;
			$('#closeeducationpoup').click();
			$location.path('/provider_location');
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.role = "";
			$scope.submitted = false;
			$scope.$apply();
   
		});
	}
	
	
	$scope.getimage = function(){
		 var input = document.getElementById('exampleInputFile');
        if (input.files && input.files[0]) {
            var fn = input.files[0];
            var size = fn.size/1024;
            
            if(size > 2000){
                $('#alertsizeerror').click();
                return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function(e) {
                $scope.base64img = e.target.result;

              
               
               

                $scope.$apply();
            }
        }
       

    
	}
	//Image
	
	
	//POST JOB
	$scope.postjob = {};
	
	$scope.postjob.selected_template  = 0;
	$scope.postjob.screening_type  = 'old';
	$scope.postjob.screening_question  = [{'title':''},{'title':''},{'title':''}];
	$scope.skills = {};
	$scope.sub_skills = {};
	$scope.tab = 1;
	$scope.showerror = false;
	$scope.get_all_skills_postjob = function(){
		$scope.dataset = {};
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'api/get_all_skills_postjob', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			$scope.skills = responsedata.data.skills;
			$scope.payment_type = responsedata.data.payment_type;
			$scope.jobtype = responsedata.data.jobtype;
			$scope.timeperiod = responsedata.data.timeperiod;
			$scope.workplace = responsedata.data.workplace;
			$scope.worktime = responsedata.data.worktime;
			$scope.screening_templates = responsedata.data.screening_templates;
			$scope.postjob.job_city = responsedata.data.companyprofile.City;
			$scope.postjob.job_state = responsedata.data.companyprofile.State;
			$scope.postjob.job_country = responsedata.data.companyprofile.Country;
			if($scope.screening_templates.length > 0){
				$scope.postjob.screening_type  = 'old';
			}else{
				$scope.postjob.screening_type  = 'new';
			}
			$scope.level = responsedata.data.level;
			
			console.log($scope.skills);
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.role = "";
			$scope.$apply();
   
		});
	}
	
	$scope.get_subskills = function(){
		$scope.dataset = {};
		$scope.showerror = false;
		$('#industrytab').click();
		$scope.dataset = $scope.postjob.skill
		$http.post($rootScope.baseurl_main + 'api/get_subskills', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			$scope.sub_skills = responsedata.data.sub_skills;
			$('#gigtypespage').click();
			console.log($scope.skills);
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.role = "";
			$scope.$apply();
   
		});
	}
	
	
	$scope.select_skill = function(skill){
		$scope.postjob.skill = skill;
		$scope.postjob.sub_skill = {};
		$scope.get_subskills();
	}
	$scope.select_subskill = function(subskill){
		$scope.postjob.sub_skill = subskill;
		$scope.postjob.gigtype_new = '';
		$('#gigtypespage').click();
		$('#gigdetailsection').click();
		$scope.new_gigtype = false;
	}
	$scope.select_jobtype = function(jobtype){
		$scope.postjob.jobtype = jobtype;
	}
	$scope.select_payment_type = function(payment_type){
		$scope.postjob.payment_type = payment_type;
	}
	
	$scope.select_joblevel = function(joblevel){
		$scope.postjob.joblevel = joblevel;
	}
	$scope.select_timeperiod = function(timeperiod){
		$scope.postjob.timeperiod = timeperiod;
	}
	$scope.new_gigtype = false;
	$scope.add_new_gig_type = function(){
		$scope.new_gigtype = true;
	}
	$scope.select_worktime = function(worktime){
		$scope.postjob.worktime = worktime;
	}
	$scope.select_workplace = function(workplace){
		$scope.postjob.workplace = workplace;
	}
	
	$scope.selelect_template = function(ScreeningID){
		$scope.postjob.selected_template = ScreeningID;
	}
	$scope.add_new_template = function(){
		$scope.postjob.selected_template  = '';
		$scope.postjob.screening_type  = 'new';
		
	}
	$scope.add_new_question = function(){
		$scope.postjob.screening_question.push({'title':''})
	}
	$scope.remove_question = function(index){
		console.log($scope.postjob.screening_question);
		$scope.postjob.screening_question.splice(index,1);
		
	}
	
	$scope.gonext_jobparameter = function(){
		console.log();
		if($scope.postjob.jobtitle){
			if($scope.postjob.jobtitle == ''){
				alert("Please select Gig Title");
				return false;
			}
		}else{
			alert("Please select Gig Title");
			return false;
		}
		if($scope.postjob.jobdescription){
			if($scope.postjob.jobdescription == ''){
				alert("Please select Gig Description");
				return false;
			}
		}else{
			alert("Please select Gig Description");
			return false;
		}
		if($scope.postjob.job_city){
			if($scope.postjob.job_city == ''){
				alert("Please select Gig City");
				return false;
			}
		}else{
			alert("Please select Gig City");
			return false;
		}
		if($scope.postjob.job_state){
			if($scope.postjob.job_state == ''){
				alert("Please select Gig State");
				return false;
			}
		}else{
			alert("Please select Gig State");
			return false;
		}
		if($scope.postjob.job_country){
			if($scope.postjob.job_country == ''){
				alert("Please select Gig Country");
				return false;
			}
		}else{
			alert("Please select Gig Country");
			return false;
		}
		
		$('#gigdetailsection').click();
		$('#jobparameter').click();
		
	}
	
	$scope.gonext_jobpost_screeningtab = function(){
		if($scope.postjob.jobtype){
			if($scope.postjob.jobtype.length > 0){
				alert("Please Select Gig Type");
				return false;
			}
		}else{
			alert("Please Select Gig Type");
			return false;
		}
		if($scope.postjob.payment_type){
			if($scope.postjob.payment_type.length > 0){
				alert("Please Select Payment Method of Gig");
				return false;
			}
		}else{
			alert("Please Select Payment Method of Gig");
			return false;
		}
		if($scope.postjob.payment_type){
			if($scope.postjob.payment_type.length > 0){
				alert("Please Select Payment Method of Gig");
				return false;
			}
		}else{
			alert("Please Select Payment Method of Gig");
			return false;
		}
		if($scope.postjob.joblevel){
			if($scope.postjob.joblevel.length > 0){
				alert("Please Select Level of required of Gig");
				return false;
			}
		}else{
			alert("Please Select Level of required of Gig");
			return false;
		}
		if($scope.postjob.timeperiod){
			if($scope.postjob.timeperiod.length > 0){
				alert("Please Select Time Period of Gig");
				return false;
			}
		}else{
			alert("Please Select Time Period of Gig");
			return false;
		}
		if($scope.postjob.worktime){
			if($scope.postjob.worktime.length > 0){
				alert("Please Select Working timeof Gig");
				return false;
			}
		}else{
			alert("Please Select Working time of Gig");
			return false;
		}
		if($scope.postjob.workplace){
			if($scope.postjob.workplace.length > 0){
				swal("Please Select Working Places of Gig");
				return false;
			}
		}else{
			alert("Please  Select  Working Places of Gig");
			return false;
		}
		
		$('#jobparameter').click();
		$('#screeningtab').click();
		
	}
	
	$scope.gonext_jobpost_review = function(){
		$('#screeningtab').click();
		$('#jobpost_review').click();
		
	}
	
	$scope.submitproject = function(){
		$scope.dataset = {};
		$scope.showerror = false;
		$scope.dataset.postjob = $scope.postjob;
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		$http.post($rootScope.baseurl_main + 'api/submit_job_app', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			if(responsedata.data.status == 'success'){
				$location.path('/provider_my_gigs');
			}
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.role = "";
			$scope.$apply();
   
		});
	}
	//POST JOB
	
	
	//Shorting proces 
	$scope.rejectprofileid = '';
	$scope.setrejectprofileid = function(Userid){
		$scope.rejectprofileid = Userid;
	}
	$scope.selectprofileid = '';
	$scope.setselectprofileid = function(Userid){
		$scope.selectprofileid = Userid;
	}
	//Shorting proces 
	$scope.reject_seeker = function(Comment){
		$scope.dataset = {};
		$scope.showerror = false;
		$scope.dataset.EmployeeId = $scope.rejectprofileid;
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		$scope.dataset.Comment = Comment;
		$http.post($rootScope.baseurl_main + 'api/reject_jobseeker', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			if(responsedata.data.status == 'success'){
				$('#rejectseeker'+$scope.rejectprofileid).hide('slow');
				$('#closerejectionpopup').click();
			}
		}, function errorCallback(response) {
			$scope.showerror = true;
			
			$scope.$apply();
   
		});
	}
	
	
	$scope.save_gigseeker_profile = function(UserId){
		$scope.dataset = {};
		$scope.showerror = false;
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		$scope.dataset.user_id = UserId;
		
		$http.post($rootScope.baseurl_main + 'api/save_gigseeker_app', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			if(responsedata.data.status == 'success'){
				$('#hidethesavebutton'+UserId).hide(800);
				//swal('profile saved successfully');
				//$('#closeselectionpopup').click();
			}
		}, function errorCallback(response) {
			$scope.showerror = true;
			//$scope.role = "";
			$scope.$apply();
   
		});
	}
	
	$scope.save_gigseeker = function(JobId){
		$scope.dataset = {};
		$scope.showerror = false;
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		$scope.dataset.user_id = $scope.selectprofileid;
		$scope.dataset.JobId = JobId;
		$http.post($rootScope.baseurl_main + 'api/save_gigseeker_app_job', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			if(responsedata.data.status == 'success'){
				//$('#myprofile'+user_id).hide();
				//swal('profile saved successfully');
				$('#rejectseeker'+$scope.selectprofileid).hide('slow');
				$('#closeselectionpopup').click();
				if(responsedata.data.match == 'yes'){
				
					alert('Profile Matched');
				}
			}
		}, function errorCallback(response) {
			$scope.showerror = true;
			//$scope.role = "";
			$scope.$apply();
   
		});
	}
	
	$scope.activejob = function(job){
		$rootScope.jobdetail = job;
		$location.path('/view_applistlist');
	}
	$scope.job_status = 'applied';
	
	$scope.get_appliedlist = function(){ 
		$scope.dataset = {};
		$scope.showerror = false;
		$scope.dataset.JobId = $rootScope.jobdetail.Id;
		$scope.dataset.type = $scope.job_status;

		$http.post($rootScope.baseurl_main + 'providerapi/get_appliedlist', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			if(responsedata.data.status == 'success'){
				//$('#myprofile'+user_id).hide();
				//swal('profile saved successfully');
				$scope.gigseekers = responsedata.data.data;
			}
		}, function errorCallback(response) {
			$scope.showerror = true;
			//$scope.role = "";
			$scope.$apply();
   
		});
	}
	
	$scope.takeaction = function(status,aId,statusSeeker,message){
	   $scope.dataset = {};
	   $scope.showerror = false;
	   
	   $scope.dataset.aId = aId;
	   $scope.dataset.status = status;
	   $scope.dataset.statusSeeker = statusSeeker;
	   $http.post($rootScope.baseurl_main + 'api/takeaction_applied_app', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
		   if(responsedata.data.status == 'success'){
				$('#rejectseeker'+aId).hide(500);
				//$('#shorlistid').hide();
				alert(message);
		   }
	   }, function errorCallback(response) {
			$scope.showerror = true;
	   
			$scope.$apply();
	   
	   });
   }
   
   $scope.get_my_notification = function(){
		$scope.dataset = {};
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		
		$scope.notifications = [];
		$rootScope.loader = true;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'providerapi/get_my_notification', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				$scope.notifications = responsedata.data.data;
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			
			$scope.$apply();
   
		});
	}
	
	$scope.get_user_list_message = function(){
		$scope.dataset = {};
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		
		$scope.userlist = [];
		$rootScope.loader = true;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'providerapi/get_user_list_message', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				$scope.userlist = responsedata.data.data;
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			
			$scope.$apply();
   
		});
	}
	
	$scope.starchat = function(activechat){
		$rootScope.activechat_d = activechat;
		setTimeout(function(){ 
			setInterval(function(){ $scope.get_active_message(); }, 5000);
			$location.path('/provider_chat_message');
		},1000);
	}
	
	$scope.get_active_message = function(){
		$scope.dataset = {};
		$scope.dataset.ProviderId = $rootScope.userprofile.Id;
		$scope.dataset.message_session = $rootScope.activechat_d.Message_session;
		
		
		$rootScope.loader = true;
		$scope.showerror = false;
		$http.post($rootScope.baseurl_main + 'api/get_messages', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			
			if(responsedata.data.status == 'success'){
				$scope.messagelist = responsedata.data.messagelist;
				$scope.scrollchattobottom();
			}
			$rootScope.loader = false;
			
		}, function errorCallback(response) {
			$scope.showerror = true;
			$rootScope.loader = false;
			
			$scope.$apply();
   
		});
	}
	$scope.message_text = '';
	$scope.submit_message = function(){
		$scope.dataset = {};
		$scope.showerror = false;
		if($scope.message_text.length == 0){
			return false;
		}
		$scope.dataset.message_session = $rootScope.activechat_d.Message_session; 
		$scope.dataset.message_text = $scope.message_text; 
		$http.post($rootScope.baseurl_main + 'api/submit_messages', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			$scope.message_text = '';
			$scope.get_active_message();
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.role = "";
			$scope.$apply();
   
		});
	}
	
	$scope.delete_conversation = function(){
		$scope.dataset = {};
		$scope.showerror = false;
		
		$scope.dataset.message_session = $rootScope.activechat_d.Message_session; 
		//$scope.dataset.message_text = $scope.message_text; 
		$http.post($rootScope.baseurl_main + 'api/delete_conversation', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			$location.path('/provider_massages');
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.role = "";
			$scope.$apply();
   
		});
	}
	
	$scope.report_spam = function(){
		$scope.dataset = {};
		$scope.showerror = false;
		
		$scope.dataset.message_session = $rootScope.activechat_d.Message_session; 
		//$scope.dataset.message_text = $scope.message_text; 
		$http.post($rootScope.baseurl_main + 'api/report_spam', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			$location.path('/provider_massages');
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.role = "";
			$scope.$apply();
   
		});
	}
	
	$scope.block_user = function(tvalue){
		$scope.dataset = {};
		$scope.showerror = false;
		
		$scope.dataset.message_session = $rootScope.activechat_d.Message_session; 
		$scope.dataset.tvalue = tvalue; 
		$scope.dataset.type = 'provider'; 
		//$scope.dataset.message_text = $scope.message_text; 
		$http.post($rootScope.baseurl_main + 'api/block_user', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
			$location.path('/provider_massages');
		}, function errorCallback(response) {
			$scope.showerror = true;
			$scope.role = "";
			$scope.$apply();
   
		});
	}
	
	$scope.StartChat_Applied =  function(UserId){
   
		   $scope.dataset = {};
		   $scope.showerror = false;
		   $scope.dataset.userID = UserId;
		   $scope.dataset.ProviderId = $rootScope.userprofile.Id;
		   $http.post($rootScope.baseurl_main + 'api/start_chat_api', $scope.dataset, {headers: {"Content-Type": "application/json"},timeout: 15000}).then(function(responsedata) {
		   console.log(responsedata.data);
				
				$rootScope.activechat_d = responsedata.data;
				$location.path('/provider_chat_message');
				
		   //$scope.userlist = responsedata.data.userlist; 
		   }, function errorCallback(response) {
		   $scope.showerror = true;
		   $scope.role = "";
		   $scope.$apply();
		   
		   });
	   
	   }
	
	$scope.scrollchattobottom = function() {
	  setTimeout(function() {
		
			$('div.mydivboxscroll').animate({
				scrollTop: $('div.mydivboxscroll').prop("scrollHeight")
			}, 2000);
		
		
	  },100);
	};
	
});