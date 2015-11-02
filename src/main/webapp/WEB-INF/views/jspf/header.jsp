<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="f" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@	taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<header style="text-align: center;">
	<div style="width: 100%">
		<h1>
			<a href="#!/page_main" id="logo">DBetzy</a>
		</h1>
		<nav class="menu">
			<ul id="menu" class="sf-js-enabled">
				<li class="active"><a href="#!/page_main"><span
						style="color: rgb(186, 139, 58);"><spring:message code="label.home"/></span>
						<div style="top: 14px; opacity: 1;"></div></a></li>
				<li class=""><a href="#!/page_about"><span
						style="color: rgb(37, 37, 37);"><spring:message code="label.aboutus"/></span>
						<div style="top: 24px; opacity: 0;"></div></a></li>
				<li class="with_ul"><a href="#!/page_catalogue"><span
						style="color: rgb(37, 37, 37);"><spring:message code="label.products"/></span>
						<div style="top: 24px; opacity: 0;"></div></a>
					<ul class="submenu_1" style="display: none; visibility: visible;">
						<li><a href="#!/page_more"><spring:message code="label.newJewerly"/></a></li>
						<li><a href="#!/page_more"><spring:message code="label.bracelets"/></a></li>
						<li><a href="#!/page_more"><spring:message code="label.brooches"/></a></li>
						<li><a href="#!/page_more"><spring:message code="label.charms"/></a>
							<ul class="submenu_2" style="display: none;">
								<li><a href="#!/page_more"><spring:message code="label.earrings"/></a></li>
								<li><a href="#!/page_more"><spring:message code="label.necklacesAndPendants"/></a></li>
								<li><a href="#!/page_more"><spring:message code="label.rings"/></a></li>
							</ul></li>
					</ul></li>
				<li><a href="#!/page_shop"><span
						style="color: rgb(37, 37, 37);"><spring:message code="label.services" /></span>
						<div style="top: 24px; opacity: 0;"></div></a></li>
				<li class="last"><a href="#!/page_contacts"><span
						style="color: rgb(37, 37, 37);"><spring:message code="label.contact" /></span>
						<div style="top: 24px; opacity: 0;"></div></a></li>
			</ul>
		</nav>
		<ul class="follow-icon">
			<li><a href="#" style="opacity: 1;"><img
					src="resources/images/follow_icon1.png" alt=""></a></li>
			<li><a href="#" style="opacity: 1;"><img
					src="resources/images/follow_icon2.png" alt=""></a></li>
			<li class="last"><a href="#" style="opacity: 1;"><img
					src="resources/images/follow_icon3.png" alt=""></a></li>
		</ul>

<%-- 		<form id="form1" --%>
<%-- 			class="form-style jqtransformdone ng-pristine ng-valid" method="post"> --%>
<!-- 			<label> <strong class="select1"> -->
<!-- 					<div class="jqTransformSelectWrapper" style="z-index: 10;"> -->
<!-- 						<div>&nbsp;</div> -->
<!-- 						<a href="#" class="jqTransformSelectOpen"></a> -->
<!-- 						<ul -->
<!-- 							style="width: 160px; display: none; visibility: visible; height: 60px; overflow: hidden; top: 25px;"> -->
<!-- 							<li><a href="#" index="0" class="selected">&nbsp;</a></li> -->
<!-- 							<li><a href="#" index="1">...</a></li> -->
<!-- 						</ul> -->
<!-- 						<select name="select" class="jqTransformHidden"> -->
<!-- 							<option value="&nbsp;">&nbsp;</option> -->
<!-- 							<option value="...">...</option> -->
<!-- 						</select> -->
<!-- 					</div> -->
<!-- 			</strong> -->
<!-- 			</label> -->
<%-- 		</form> --%>
	</div>
</header>