<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="f" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@	taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html lang="en" ng-app="productsListApp">
<c:import url="../views/jspf/resources.jsp" />
<body>
	<div class="container">
		<article class="col4" ng-controller="productsCtrl">
			<div id="sort-form">
				<p>
					<spring:message code="label.orderBy" />
				</p>
				<form id="form1" class="form-style" method="post">
					<label> <strong class="select1"> <select
							name="select">
								<option>Cadenas</option>
								<option>Aretes</option>
						</select>
					</strong>
					</label>
				</form>
			</div>
			<h3>
				<spring:message code="label.products" />
			</h3>
			<ul class="list4 products ">
				<li ng-repeat="product in products"
					ng-class="{'last': ($index + 1)%4 == 0}"><a rel="Index"
					href="{{product.imageUrl}}"> <span></span> <img
						ng-src="{{product.imageUrl}}" alt="">
				</a>
					<p class="text2">{{product.description}}</p> <a href="#"
					class="text1">{{product.price}}</a></li>
			</ul>
		</article>
		<article class="col5">
			<div class="box1">
				<p class="descrip">25% off</p>
				<ul>
					<li>selected</li>
					<li>diamond</li>
					<li>jewelry</li>
				</ul>
				<a href="#!/page_more" class="more">Shop now</a>
			</div>
			<div class="box2">
				<p class="descrip">JiJey</p>
				<p class="descrip2">your life - your style</p>
				<a href="#!/page_more" class="more">Shop now</a>
			</div>
		</article>
	</div>
	<script type="text/javascript">
		var productsListApp = angular.module('viewProduct', []);

		productsListApp.controller('viewProductCtrl', function($scope) {
			$scope.mainProduct = {
				
				'id' : '1',
				'name' : 'resources/images/page4_pic1.jpg',
				'images' :  [ {'id':'1', 'url':'resources/images/page4_pic1.jpg'} ],
				'description' : 'Fast just got faster with Nexus S.',
				'materials' : [ {'id':'1', 'name':'gold'} ],
				'sizes' :  [ {'id':'1', 'name':'small', 'abbreviture':'s' } ],
				'price' : '150.00'
				
			};
		});
	</script>
</body>
</html>