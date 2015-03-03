import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n			\n				<span class=\"effective-time items pointer\" rel=\"tooltip\" title=\"Latest member effective time\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "latestEffectiveTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Latest Effective Time</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "latestEffectiveTime", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "latestEffectiveTime", options))));
  data.buffer.push("</span>\n				<span class=\"last-modified items pointer\" rel=\"tooltip\" title=\"Last date refset header or any member was modified\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "modifiedDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Last update date</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "modifiedDate", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "modifiedDate", options))));
  data.buffer.push("</span>\n				<span class=\"last-modified-by pointer items\" rel=\"tooltip\" title=\"User that last modified this refset\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "modifiedBy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Last updated by</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "modifiedBy", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "modifiedBy", options))));
  data.buffer.push("</span>\n	\n		\n				");
  stack1 = helpers['if'].call(depth0, "refsets", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			\n			");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        \n					");
  stack1 = helpers['if'].call(depth0, "filteredRefsets", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n   \n						 ");
  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'contentBinding': ("filteredRefsets"),
    'height': (400),
    'rowHeight': (45),
    'width': ("100%")
  },hashTypes:{'contentBinding': "STRING",'height': "INTEGER",'rowHeight': "INTEGER",'width': "STRING"},hashContexts:{'contentBinding': depth0,'height': depth0,'rowHeight': depth0,'width': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "Ember.ListView", options) : helperMissing.call(depth0, "collection", "Ember.ListView", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n					\n       <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":list-group-item :member-list-item meta.disabled:inactiveConcept")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">   \n								");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "refsets.refset", "uuid", options) : helperMissing.call(depth0, "link-to", "refsets.refset", "uuid", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								<span class=\"refset-id items\">");
  stack1 = helpers._triageMustache.call(depth0, "sctId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  stack1 = helpers['if'].call(depth0, "sctId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"description pointer desc-id items\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("description")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n				\n							\n									<span class=\"lang-id items pointer\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("meta.language")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "languageCode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n									<span class=\"refset-id items pointer\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("meta.type")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "typeId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n									<span class=\"module-id items pointer\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("meta.moduleType")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "moduleId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n									<span class=\"comp-id items pointer\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("meta.componentType")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "componentTypeId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n									<span class=\"status-id items\">");
  stack1 = helpers._triageMustache.call(depth0, "meta.status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n									<span class=\"num-members items\">");
  stack1 = helpers._triageMustache.call(depth0, "totalNoOfMembers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n							\n								\n							\n									<span class=\"effective-time items\">");
  data.buffer.push(escapeExpression((helper = helpers['effective-time-format'] || (depth0 && depth0['effective-time-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "latestEffectiveTime", options) : helperMissing.call(depth0, "effective-time-format", "latestEffectiveTime", options))));
  data.buffer.push("</span>\n									<span class=\"last-modified items\">");
  data.buffer.push(escapeExpression((helper = helpers['date-format'] || (depth0 && depth0['date-format']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "modifiedDate", options) : helperMissing.call(depth0, "date-format", "modifiedDate", options))));
  data.buffer.push("</span>\n									<span class=\"last-modified-by items\">");
  stack1 = helpers._triageMustache.call(depth0, "modifiedBy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n								</div>\n								\n						  ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("<button class=\"btn btn-primary right view-btn\">View Refset</button>");
  }

function program7(depth0,data) {
  
  var buffer = '';
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n					  		No Refset match your search filters\n					  ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n					<p>There are currently no matching refsets available.</p>\n				");
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n				");
  stack1 = helpers['if'].call(depth0, "refsets", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("			\n			");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					");
  stack1 = helpers['if'].call(depth0, "filteredRefsets", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n						 ");
  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'contentBinding': ("filteredRefsets"),
    'height': (400),
    'rowHeight': (45),
    'width': ("100%")
  },hashTypes:{'contentBinding': "STRING",'height': "INTEGER",'rowHeight': "INTEGER",'width': "STRING"},hashContexts:{'contentBinding': depth0,'height': depth0,'rowHeight': depth0,'width': depth0},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "Ember.ListView", options) : helperMissing.call(depth0, "collection", "Ember.ListView", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					  ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n							<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":list-group-item :member-list-item meta.disabled:inactiveConcept")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n								");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "refsets.refset", "uuid", options) : helperMissing.call(depth0, "link-to", "refsets.refset", "uuid", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								<div class=\"\"><span class=\"refset-id items\">");
  stack1 = helpers._triageMustache.call(depth0, "sctId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  stack1 = helpers['if'].call(depth0, "sctId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"description pointer desc-id items\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("description")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n				\n							\n									<span class=\"pointer lang-id items\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("meta.language")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "languageCode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n									<span class=\"refset-id items pointer\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("meta.type")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "typeId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n									<span class=\"module-id items pointer\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("meta.moduleType")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "moduleId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n									<span class=\"comp-id items pointer\" rel=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("meta.componentType")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "componentTypeId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n									<span class=\"status-id items\">");
  stack1 = helpers._triageMustache.call(depth0, "meta.status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n									<span class=\"num-members items\">");
  stack1 = helpers._triageMustache.call(depth0, "totalNoOfMembers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n								</div>\n							</div>\n						  ");
  return buffer;
  }
function program17(depth0,data) {
  
  
  data.buffer.push("<button class=\"btn btn-primary right right view-btn\">View Refset</button>");
  }

function program19(depth0,data) {
  
  
  data.buffer.push("Hide");
  }

function program21(depth0,data) {
  
  
  data.buffer.push("Show");
  }

function program23(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByStatus\">Refset status (active/inactive)</option>");
  }

function program25(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByType\">Refset type</option>");
  }

function program27(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByModuleId\">Module type</option>");
  }

function program29(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByComponentType\">Component type</option>");
  }

function program31(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByLanguage\">Language</option>");
  }

function program33(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByEffectiveTime\">Effective time</option>");
  }

function program35(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByLastUpdateDate\">Last update date</option>");
  }

function program37(depth0,data) {
  
  
  data.buffer.push("<option value=\"filterByLastUpdateUser\">Last updater</option>");
  }

function program39(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n			<div class=\"filterItem status\">\n		<div class=\"left-filter\">                                                                         <p class=\"filterItem\">\n				Status:	</p></div>			<div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByStatus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div>\n    <div class=\"filterinputs statusinputs clearfix\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': ("published"),
    'checked': ("filterByStatus")
  },hashTypes:{'value': "STRING",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Published\n				");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': ("unpublished"),
    'checked': ("filterByStatus")
  },hashTypes:{'value': "STRING",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Unpublished\n				");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': ("inactive"),
    'checked': ("filterByStatus")
  },hashTypes:{'value': "STRING",'checked': "ID"},hashContexts:{'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push(" Inactive\n			</div>\n		");
  return buffer;
  }

function program41(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n           <div class=\"filterItem status\">                                    \n			<div class=\"left-filter\"><p class=\"filterItem\">\n				Refset Type:</p></div>		\n              <div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div> \n			<div class=\"filterdropdown\">\n                 ");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("filterByType"),
    'dataType': ("refsetTypesArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n			</div>\n             </div>                                                                        \n		");
  return buffer;
  }

function program43(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"filterItem status\">                                                                         \n			<div class=\"left-filter\"><p class=\"filterItem\">\n				Module Type:</p></div>\n                 <div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByModuleId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a>   </div> <div class=\"filterdropdown\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("filterByModuleId"),
    'dataType': ("moduleTypesArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n			\n              </div> </div>                                                                             \n		");
  return buffer;
  }

function program45(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"filterItem status\">                                                                             \n			<div class=\"left-filter\"><p class=\"filterItem\">Component Type:</p></div>\n              <div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByComponentType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div><div class=\"filterdropdown\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("filterByComponentType"),
    'dataType': ("componentTypesArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n			   </div></div>\n		");
  return buffer;
  }

function program47(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"filterItem status\">                                                                                     \n			<div class=\"left-filter\"><p class=\"filterItem\">Language:</p></div>		\n                <div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByLanguage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div> \n				<div class=\"filterdropdown\"> ");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("filterByLanguage"),
    'dataType': ("languagesArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n			   </div>\n            </div>                                                                           \n		");
  return buffer;
  }

function program49(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"filterItem status\">                                                                           \n			<div class=\"left-filter\"><p class=\"filterItem\">Effective Time:</p> </div>\n            <div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByEffectiveTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div><div class=\"filterdropdown\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("filterByEffectiveTime"),
    'dataType': ("refsetEffectiveTimesArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n			   </div>\n           </div>                                                                                            \n		");
  return buffer;
  }

function program51(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n			<div class=\"filterItem status\"> \n                <div class=\"left-filter\">  <p class=\"filterItem\">              \n				Modified since:</p></div> \n                <div class=\"right-filter\"> <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByLastUpdateDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div>\n				");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Em.TextField", {hash:{
    'placeholder': ("Pick date..."),
    'valueBinding': ("filterByLastUpdateDate"),
    'data-provide': ("datepicker"),
    'data-date-format': ("MM d, yyyy"),
    'data-date-clear-btn': ("true"),
    'data-date-autoclose': ("true"),
    'class': ("form-control")
  },hashTypes:{'placeholder': "STRING",'valueBinding': "STRING",'data-provide': "STRING",'data-date-format': "STRING",'data-date-clear-btn': "STRING",'data-date-autoclose': "STRING",'class': "STRING"},hashContexts:{'placeholder': depth0,'valueBinding': depth0,'data-provide': depth0,'data-date-format': depth0,'data-date-clear-btn': depth0,'data-date-autoclose': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("	\n			\n               </div>                          \n		");
  return buffer;
  }

function program53(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n         	<div class=\"filterItem status\"> \n			<div class=\"left-filter\">  <p class=\"filterItem\">\n				Last Updater:  </p> </div> <div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "filterByLastUpdateUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/closetab.png\" width=\"40\" height=\"40\" alt=\"\"/></a></div>\n                                                                                                                                                <div class=\"filterdropdown\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['snomed-data-dropdown'] || (depth0 && depth0['snomed-data-dropdown']),options={hash:{
    'value': ("filterByLastUpdateUser"),
    'dataType': ("refsetUpdatersArray")
  },hashTypes:{'value': "ID",'dataType': "STRING"},hashContexts:{'value': depth0,'dataType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "snomed-data-dropdown", options))));
  data.buffer.push("\n			 </div> \n             </div>   \n		");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n	<div>\n	<div class=\"col-md-9\">\n	<span class=\"right subtext\">(hover over anything in <span class=\"lightblue\">blue</span> for more info)</span>\n		<h1>Browse Reference Sets</h1>\n\n\n				\n                <span class=\"pointer refset-id items first\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "sctId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Refset Id</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "sctId", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "sctId", options))));
  data.buffer.push("</span> \n                                                                                                      \n				<span class=\"pointer desc-id items\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer  \">Description</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "description", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "description", options))));
  data.buffer.push("</span>\n				\n\n				<span class=\"pointer lang-id items\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "languageCode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer \">Language</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "languageCode", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "languageCode", options))));
  data.buffer.push("</span>\n				<span class=\"refset-id items pointer\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "typeId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Refset Type Id</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "typeId", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "typeId", options))));
  data.buffer.push("</span>\n				<span class=\"module-id items pointer\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "moduleId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Module Id</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "moduleId", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "moduleId", options))));
  data.buffer.push("</span>\n				<span class=\"comp-id items pointer\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "componentTypeId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Component Type Id</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "componentTypeId", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "componentTypeId", options))));
  data.buffer.push("</span>\n				<span class=\"status-id items pointer\" rel=\"tooltip\" title=\"A Refset can have status: Published, Unpublished or Inactive\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "meta.status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Status</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "meta.status", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "meta.status", options))));
  data.buffer.push("</span>\n				<span class=\"num-members items pointer\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSortCriteria", "totalNoOfMembers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"pointer\">Member Count</a> ");
  data.buffer.push(escapeExpression((helper = helpers['sort-icon'] || (depth0 && depth0['sort-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data},helper ? helper.call(depth0, "sortBy", "sortOrder", "totalNoOfMembers", options) : helperMissing.call(depth0, "sort-icon", "sortBy", "sortOrder", "totalNoOfMembers", options))));
  data.buffer.push("</span>\n			\n			\n			");
  stack1 = helpers['if'].call(depth0, "showMetaData", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n	\n	</div>\n	\n	<div class=\"col-md-3\">\n		<button class=\"btn btn-default btn-side-menu icon-btn metadata-btn\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :icon showHeaderMetaData:hideinfo:info")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMetaData", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"btn-text\">");
  stack1 = helpers['if'].call(depth0, "showMetaData", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(21, program21, data),fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Metadata</span><span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pointer :icon showHeaderMetaData:hideinfo:info")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span></button>\n\n		<h2>Filter Refsets</h2>\n		\n		<select id=\"filterSelect\" class=\"btn btn-default btn-side-menu\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addFilter", {hash:{
    'on': ("change")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n			<option value=\"0\">Filter refsets...</option>\n			");
  stack1 = helpers.unless.call(depth0, "filterByStatusIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  stack1 = helpers.unless.call(depth0, "filterByTypeIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  stack1 = helpers.unless.call(depth0, "filterByModuleIdIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  stack1 = helpers.unless.call(depth0, "filterByComponentTypeIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  stack1 = helpers.unless.call(depth0, "filterByLanguageIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(31, program31, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  stack1 = helpers.unless.call(depth0, "filterByEffectiveTimeIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(33, program33, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("			\n			");
  stack1 = helpers.unless.call(depth0, "filterByLastUpdateDateIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(35, program35, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  stack1 = helpers.unless.call(depth0, "filterByLastUpdateUserIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(37, program37, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</select>\n		\n		<div class=\"filterItem sctid\">\n                                     <div class=\"left-filter\">\n			<p class=\"filterItem\">Filter by Refset description or SCTID:  </p></div><div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearDescriptionFilter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/trashbin.png\" width=\"35\" height=\"43\" alt=\"\"/></a></div>\n<div class=\"filterinputs clearfix\"> ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("filterByDescription"),
    'placeholder': ("type filter here..."),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" </div>\n		</div>\n<div class=\"filterItem component-id\">\n      \n		<div class=\"left-filter\">\n        <p class=\"filterItem\">\n			Filter by Member description or Referenced Component Id:</p> </div><div class=\"right-filter\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearMemberDescriptionFilter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"right pointer\"><img src=\"assets/img/trashbin.png\" width=\"35\" height=\"43\" alt=\"\"/></a></div>\n		<div class=\"filterinputs clearfix\">	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("filterByMemberDescription"),
    'placeholder': ("type filter here..."),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" </div>\n		\n                                                                                                                      </div>\n			\n		");
  stack1 = helpers['if'].call(depth0, "filterByStatusIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(39, program39, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				\n		");
  stack1 = helpers['if'].call(depth0, "filterByTypeIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(41, program41, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		");
  stack1 = helpers['if'].call(depth0, "filterByModuleIdIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(43, program43, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		");
  stack1 = helpers['if'].call(depth0, "filterByComponentTypeIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(45, program45, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		");
  stack1 = helpers['if'].call(depth0, "filterByLanguageIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(47, program47, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		");
  stack1 = helpers['if'].call(depth0, "filterByEffectiveTimeIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(49, program49, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				\n		");
  stack1 = helpers['if'].call(depth0, "filterByLastUpdateDateIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(51, program51, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		");
  stack1 = helpers['if'].call(depth0, "filterByLastUpdateUserIsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(53, program53, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					\n		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "refresh", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-side-menu right refresh-btn\">Refresh Refsets</button>\n	</div>\n</div>");
  return buffer;
  
});