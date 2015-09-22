'use strict';
// var UserModel=require('/models/user');

$.get(
	'http://tiyfe.herokuapp.com/collections/profileBob',
	function(response){
		$('#name').val(response[0].name);
		$('#inputEmail3').val(response[0].email);
		$('#role').val(response[0].role);
		$('.navbar-right .dropdown .dropdown-toggle ').text(response[0].name);
		$('.profile-usertitle-name').text(response[0].name);
		$('.profile-usertitle-job').text(response[0].role);
	},
	'json'
	);

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
	}
});

var app = new App();
Backbone.history.start();

$('.form-horizontal').submit(function(e){
	e.preventDefault();
	console.log('hey!');
	user.set({name: $('#name').val(), email: $('#inputEmail3').val(), role: $('#role').val()});
	console.log(user);
	$.post(
		'http://tiyfe.herokuapp.com/collections/profileBob',
		{name: $('#name').val(), email: $('#inputEmail3').val(), role: $('#role').val()},
		'json'
		);
	
});
user.on('change', function(){
	$('.navbar-right .dropdown .dropdown-toggle ').text(user.get('name'));
	$('.profile-usertitle-name').text(user.get('name'));
	$('.profile-usertitle-job').text(user.get('role'));
})
