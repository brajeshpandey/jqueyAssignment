$(document).ready(() =>{
 	$(".collapseOne").click(function(){ //first div click
 		$(".collapseOneDropDown").show(500);
 		$(".collapseTwoDropDown").hide(700);
 		$(".collapseThreeDropDown").hide(900);
 	});
 	$(".collapseTwo").click(function(){ //Second div click
 		$(".collapseOneDropDown").hide(500);
 		$(".collapseTwoDropDown").show(700);
 		$(".collapseThreeDropDown").hide(900);
 	});
 	$(".collapseThree").click(function(){ //Third div click
 		$(".collapseOneDropDown").hide(500);
 		$(".collapseTwoDropDown").hide(700);
 		$(".collapseThreeDropDown").show(900);
 	});
});