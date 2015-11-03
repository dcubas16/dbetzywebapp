<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="f" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@	taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html lang="en" ng-app="phonecatApp">
<c:import url="../views/jspf/resources.jsp" />
<body>
	<div ng-controller="PhoneListCtrl">

		<ul>
			<li ng-repeat="phone in phones"><span>{{phone.name}}</span>
				<p>{{phone.snippet}}</p></li>
		</ul>

	</div>
	<script type="text/javascript">
		var phonecatApp = angular.module('phonecatApp', []);

		phonecatApp.controller('PhoneListCtrl', function($scope) {
			$scope.phones = [ {
				'name' : 'Nexus S',
				'snippet' : 'Fast just got faster with Nexus S.'
			}, {
				'name' : 'Motorola XOOM™ with Wi-Fi',
				'snippet' : 'The Next, Next Generation tablet.'
			}, {
				'name' : 'MOTOROLA XOOM™',
				'snippet' : 'The Next, Next Generation tablet.'
			} ];
		});
	</script>
</body>

</html>

