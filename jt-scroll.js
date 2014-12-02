angular.module('jtDirective', [])
.directive('jtScroll', function(){
	return{
		restrict: 'A',
		link: function(scope, element, attributes){
			$(function() {
				var target = $('#' + attributes.jtScroll);
				element.click(function() {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 500);
					return false;
				})
			});
		}
	}
})