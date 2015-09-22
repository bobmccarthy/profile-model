'use strict';
// var UserModel=require('/models/user');



var user = new UserModel();
var App = Backbone.Router.extend({
	routes: {
		'': 'profile',
		'edit': 'edit'
	},
	profile: function() {
		$('.page').hide();
		$('#profile').show();
	},
	edit: function() {
		$('.page').hide();
		$('#edit').show();
		$('#name').val(user.get('name'));
		$('#inputEmail3').val(user.get('email'));
		$('#role').val(user.get('role'));
	}
});

var app = new App();
Backbone.history.start();

$('.form-horizontal').submit(function(e){
	e.preventDefault();
	console.log('hey!');
	user.set({name: $('#name').val(), email: $('#inputEmail3').val(), role: $('#role').val()});
	console.log(user);
	$('.navbar-right .dropdown a').text(user.get('name'));
	$('.profile-usertitle-name').text(user.get('name'));
	$('.profile-usertitle-job').text(user.get('role'));
})