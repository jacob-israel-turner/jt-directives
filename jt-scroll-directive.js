angular.module('jtScrollDirective', [])
.directive('jtScrollDirective', function(){
	return{
		restrict: 'A',
		link: function(scope, element, attributes){
			$(function() {
				var target = $('#' + attributes.jtScrollTarget);
				element.children('.jt-scroll-from').click(function() {
					console.log(attributes);
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 500);
					return false;
				})
			});
		}
	}
})