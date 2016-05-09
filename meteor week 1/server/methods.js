// methodes kun je overal in je code aanroepen (zowel client als serverside) een soort globalen functies 
Meteor.methods({
	addResolution: function(title) {
		console.log(Resolutions.insert({
			title: title, 
			createdAt: new Date()
		}));
	},
	updateResolution: function(id, checked){
		Resolutions.update(id, {$set: {checked: checked}});
	},
	deleteResolution: function(id) {
		deleteResolutions.remove(id);
	}
});





// Resolutions.update(this._id, {$set: {checked: !this.checked}});