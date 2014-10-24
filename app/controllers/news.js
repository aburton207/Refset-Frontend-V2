export default Ember.ArrayController.extend({
	
	model : 
	[
		{
	    	"id": "first_demo",
	    	"title": "First Public Demonstration : IHTSDO Business Meeting - Amsterdam",
	    	"published": "2014-10-24T10:00:00",
	    	"description": "The new Refset Tool will be publicly demonstrated for the first time at IHTSDO Business Meeting - Amsterdam"
	    },
		{
	    	"id": "developers",
	    	"title": "Refset Tools Developers",
	    	"published": "2014-10-24T09:00:00",
	    	"description": "This new Refset Tool, comissioned by JHTSDO is being built by an experienced and capable development team : <ul>" +
	    			"<li>Robert Turnbull : IHTSDO</li>" +
	    			"<li>Adam Flinton : IHTSDO</li>" +
	    			"<li>Rory Davidson : IHTSDO</li>" +
	    			"<li>Ian Bale : <a href='http://www.hazardousfrog.com' target='_blank'>Hazardous Frog</a></li>" +
	    			"<li>Prashant Nema : Episteme Partners Ltd</li>" +
	    			"</ul>." +
	    			"<p>These experienced developers are taking an agile approach to the development of the Refset Tool. " +
	    			"Daily stand-ups and short sprints mean we will have regular updates as we add new features." +
	    			"Many improvement and new features are already being developed but are not quite ready to show you yet.</p>"
	    },
		{
	    	"id": "authentication",
	    	"title": "Infinite Scroller - Lists with Turbo Power!",
	    	"published": "2014-10-23T09:00:00",
	    	"description": "We have identified a brilliant infinite scroller widget to put in place of the member lists. Performance is improved significantly for any refset with more than 50 members.The more members, the better the performance improvement. However, we do have a small issue with it which mean sit has not been included in this release. Look out for it in the next release of the Refset Tool."
	    },
		{
	    	"id": "export",
	    	"title": "We can export an RF2 file!",
	    	"published": "2014-09-15T09:00:00",
	    	"description": "Another important milestone. We have now completed the circle by exporting a refset created in the tool back out as an RF2 file. A future task will be to allow import of these RF2 files."
	    },
		{
	    	"id": "import",
	    	"title": "Today we imported the first flat file of concept IDs using the new tool",
	    	"published": "2014-09-10T09:00:00",
	    	"description": "Only a small milestone, but today we used the tool for the first time to import a list of concept IDs in a file. " +
	    			"We then collected the concept details via the API and displayed a list of concept labels for review by the user. " +
	    			"The final step was to send those to the database via the API."
	    },
    ],
   
    latestNews : [],
    
    init : function()
    {
    	this.getLatestNews();
    },
    
	getLatestNews : function()
	{
		var allNews = Ember.copy(this.model);
		this.latestNews.setObjects(allNews.splice(0,3));
	},

});
