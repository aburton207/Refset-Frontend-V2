import ajax from 'ic-ajax';
import { raw as icAjaxRaw } from 'ic-ajax';

export default Ember.Object.extend({
	
	getHeaders : function(user)
	{
		var headers =
		{
			'X-REFSET-PRE-AUTH-USERNAME'	: user.name,
			'X-REFSET-PRE-AUTH-TOKEN'		: user.token
		};

		return headers;
	},

	
	returnErrorResponse : function(response)
	{
		if (typeof response.jqXHR.responseJSON !== "undefined")
		{
			// We have an error generated by the API
			return {meta:response.jqXHR.responseJSON.meta};
		}
		else
		{
			// We've failed to speak to the API...
			return {meta:{errorInfo:{message:response.jqXHR.statusText,code:response.jqXHR.status.toString()}}};
		}
	},
	
	findAll : function (user)
	{
		Ember.Logger.log("adapters.refsets:findAll (user)",user);
		
		var _this = this;
		
		var result = ajax(RefsetENV.APP.refsetApiBaseUrl, {headers:this.getHeaders(user)}).then(function(response)
		{
			return response;
		},
		function (response)
		{
			return _this.returnErrorResponse(response);
		});
		
		return result;
	},
	
	find : function (user,id)
	{
		Ember.Logger.log("adapters.refsets:find (user,id)",user,id);
		
		var _this = this;
		
		var result = ajax(RefsetENV.APP.refsetApiBaseUrl + '/' + id, {headers:this.getHeaders(user)}).then(function(response)
		{	
			return response;
		},
		function (response) 
		{
			return _this.returnErrorResponse(response);
		});	
		
		return result;
	},

	findHeader : function (user,id)
	{
		Ember.Logger.log("adapters.refsets:findHeader (user,id)",user,id);
		
		var _this = this;
		
		var result = ajax(RefsetENV.APP.refsetApiBaseUrl + '/' + id + '/header', {headers:this.getHeaders(user)}).then(function(response)
		{	
			return response;
		},
		function (response) 
		{
			return _this.returnErrorResponse(response);
		});	
		
		return result;
	},
	
	findMembers : function (user,id,from,to)
	{
		Ember.Logger.log("adapters.refsets:findMembers (user,id)",user,id);
		
		var _this = this;
		
		var result = ajax(RefsetENV.APP.refsetApiBaseUrl + '/' + id + '/members?from=' + from + '&to=' + to, {headers:this.getHeaders(user)}).then(function(response)
		{	
			return response;
		},
		function (response) 
		{
			return _this.returnErrorResponse(response);
		});	
		
		return result;
	},
	
	create : function (user,refset)
	{
		Ember.Logger.log("adapters.refsets:create",user,refset);
		
		var _this = this;

		var jsonFormatRefset = JSON.stringify(refset);

		var result = ajax(RefsetENV.APP.refsetApiBaseUrl + '/new', {headers:this.getHeaders(user), type:'post', data: jsonFormatRefset, processData: false, contentType: 'application/json'}).then(function(response)
		{
			return response;	
		},
		function (response)
		{
			return _this.returnErrorResponse(response);
		});	
		
		return result;
	},
	
	update : function (user,refset)
	{
		Ember.Logger.log("adapters.refsets:update",user,refset);
		
		var _this = this;

		var jsonFormatRefset = JSON.stringify(refset);

		var result = ajax(RefsetENV.APP.refsetApiBaseUrl + '/update', {headers:this.getHeaders(user), type:'post', data: jsonFormatRefset, processData: false, contentType: 'application/json'}).then(function(response)
		{
			return response;	
		},
		function (response)
		{
			return _this.returnErrorResponse(response);
		});	
		
		return result;
	},
	
	addMember : function (user,refsetId,referencedComponentId)
	{
		Ember.Logger.log("adapters.refsets:addMember (user,refsetId,referencedComponentId)",user,refsetId,referencedComponentId);

		var _this = this;

		var member = {referencedComponentId : referencedComponentId, active:true};
			
		var jsonFormatMemberData = JSON.stringify(member);
		
		var result = ajax(RefsetENV.APP.refsetApiBaseUrl + '/' + refsetId + '/add/member', {headers:this.getHeaders(user), method:"post", data: jsonFormatMemberData, processData: false, contentType: 'application/json'}).then(function(response)
		{			
			return response;
		},
		function (response)
		{
			return _this.returnErrorResponse(response);
		});

		return result;	
	},
	
	addMembers : function (user,refsetId,members)
	{
		Ember.Logger.log("adapters.refsets:addMembers (user,refsetId,members)",user,refsetId,members);

		var _this = this;
		
		var importMembers = members.map(function(member)
		{
			var myMember = $.extend(true, {}, member);
			delete myMember["meta"];
			return myMember;
		});
			
		var jsonFormatMemberData = JSON.stringify(importMembers);

		var result = ajax(RefsetENV.APP.refsetApiBaseUrl + '/' + refsetId + '/add/members', {headers:_this.getHeaders(user), method:"post", data: jsonFormatMemberData, processData: false, contentType: 'application/json'}).then(function(response)
		{			
			return response;
		},
		function (response)
		{
			return _this.returnErrorResponse(response);
		});
		
		return result;	
	},
	
	deleteMembers : function(user,refsetid,members)
	{
		var _this = this;
		
		var data = members.map(function(member)
		{
			return member.referencedComponentId;
		});
		
		var jsonFormatMemberData = JSON.stringify(data);

		var result = ajax(RefsetENV.APP.refsetApiBaseUrl + '/delete/' + refsetid + '/members', {headers:this.getHeaders(user), method:"delete", data: jsonFormatMemberData, processData: false, contentType: 'application/json'}).then(function(response){
			return response;	
		},
		function (response)
		{
			return _this.returnErrorResponse(response);
		});	
		
		return result;
	},
	
	getRefsetExport : function(user,id)
	{
		var _this = this;

		var result = icAjaxRaw(RefsetENV.APP.refsetApiBaseUrl + '/' + id + '/export', {headers:this.getHeaders(user)}).then(function(response)
		{
			return response;	
		},
		function (response)
		{
			return _this.returnErrorResponse(response);
		});	
		
		return result;
	},
	
	deleteRefset : function(user,id)
	{
		var _this = this;

		var result = ajax(RefsetENV.APP.refsetApiBaseUrl + '/delete/' + id , {headers:this.getHeaders(user), method:"delete", processData: false, contentType: 'application/json'}).then(function(response){
			return response;	
		},
		function (response)
		{
			return _this.returnErrorResponse(response);
		});	
		
		return result;
	},
	
});

