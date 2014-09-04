import ajax from 'ic-ajax';

var AllRefsets;

export default Ember.Object.extend({
	
	getHeaders : function(user)
	{
		var headers =
		{
			'X-REFSET-PRE-AUTH-USERNAME'	: user.username,
			'X-REFSET-PRE-AUTH-TOKEN'		: user.token
		};

		return headers;
	}, 
	
	findAll : function (user,reinit)
	{
		var forceReinit = typeof reinit === "undefined" ? 0 : reinit;

		if (forceReinit || typeof AllRefsets === "undefined")
		{
			var result = ajax(RefsetENV.APP.refsetApiBaseUrl, {headers:this.getHeaders(user)}).then(function(result)
			{
				
				result.content.refsets.map(function(item)
				{
					
					if (typeof item.members !== "undefined")
					{
						item.numMembers = item.members.length;
					}
					else
					{
						item.numMembers = 0;
					}
				});
				
				return result.content.refsets;
			},
			function (error)
			{
				Ember.Logger.log("refsets findAll error",error);
				return {};	
			});

			AllRefsets =  result;
		}

		return AllRefsets;
	},
	
	find : function (user,id)
	{
		var result = ajax(RefsetENV.APP.refsetApiBaseUrl + '/' + id, {headers:this.getHeaders(user)}).then(function(result){
			
			var refset = result.content.refset;

			if (typeof refset.members === "undefined")
			{
				refset.members = [];	
			}

			result.content.refset.numMembers = result.content.refset.members.length;

			return refset;	
		},
		function (error)
		{
			Ember.Logger.log("refsets find error",error);
			return {authError : true};
		});	
		
		return result;
	},
});

