<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="f" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@	taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<header style="text-align: center;">
	<div style="width: 100%">
		<h1>
			<a href="#!/page_main" id="logo">jijey</a>
		</h1>
		<nav class="menu">
			<ul id="menu" class="sf-js-enabled">
				<li class="active"><a href="#!/page_main"><span
						style="color: rgb(186, 139, 58);">Inicio</span>
						<div style="top: 14px; opacity: 1;"></div></a></li>
				<li class=""><a href="#!/page_about"><span
						style="color: rgb(37, 37, 37);">Nosotros</span>
						<div style="top: 24px; opacity: 0;"></div></a></li>
				<li class="with_ul"><a href="#!/page_catalogue"><span
						style="color: rgb(37, 37, 37);">Productos</span>
						<div style="top: 24px; opacity: 0;"></div></a>
					<ul class="submenu_1" style="display: none; visibility: visible;">
						<li><a href="#!/page_more">New Jewelry</a></li>
						<li><a href="#!/page_more">Bracelets</a></li>
						<li><a href="#!/page_more">Brooches</a></li>
						<li><a href="#!/page_more">Charms</a>
							<ul class="submenu_2" style="display: none;">
								<li><a href="#!/page_more">Earrings</a></li>
								<li><a href="#!/page_more">Necklaces &amp; Pendants</a></li>
								<li><a href="#!/page_more">Rings</a></li>
							</ul></li>
					</ul></li>
				<li><a href="#!/page_shop"><span
						style="color: rgb(37, 37, 37);">Servicios</span>
						<div style="top: 24px; opacity: 0;"></div></a></li>
				<li class="last"><a href="#!/page_contacts"><span
						style="color: rgb(37, 37, 37);">Contacto</span>
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
	</div>
</header>