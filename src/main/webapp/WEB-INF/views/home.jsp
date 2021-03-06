<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="f" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@	taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html lang="en">
<c:import url="../views/jspf/resources.jsp" />
<body>
	<div class="glob">
		<div class="page_spinner"></div>
		<div id="bg_glob"></div>
		<div class="spinner"></div>
		
		<!--header-->
		<c:import url="../views/jspf/header.jsp" />
		<!--end header-->
		<c:import url="../views/jspf/carousel.jsp" />
		<!--content -->
		<div class="main">
			<div class="center">
				<div id="content">
					<ul>
						<li id="page_main"></li>
						<li id="page_about"><c:import url="../views/aboutus.jsp" />
						</li>
						<li id="page_catalogue"><c:import url="../views/products.jsp" />
						</li>
						<li id="page_shop"><c:import url="../views/services.jsp" />
						</li>
						<li id="page_contacts"><c:import url="../views/contact.jsp" />
						</li>
						<li id="page_privacy"><c:import url="../views/privacy.jsp" />
						</li>
						<li id="page_more"><c:import url="../views/more.jsp" /></li>
					</ul>
				</div>
			</div>
		</div>
		<!--content end-->
	</div>
	<!--footer-->
	<c:import url="../views/jspf/footer.jsp" />
	<!--footer end-->
	<script>
		$(window).load(function() {
			$('.page_spinner').delay(650).fadeOut(800);
			$('body').stop().delay(650).css({
				overflow : 'visible'
			})
		})
	</script>
	
	<!--coded by Lynx-->
</body>
</html>

