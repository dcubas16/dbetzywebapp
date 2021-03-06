package org.dbetzywebapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/")
public class MainController {


	@RequestMapping(value="home.htm", method=RequestMethod.GET )
	public String home(@RequestParam(required = false) String language, Model model)
	{
		return "home";
	}
	
	@RequestMapping(value="aboutus.htm", method=RequestMethod.GET )
	public String aboutUs(@RequestParam(required = false) String language, Model model)
	{
		
		return "aboutus";
	}
	
	@RequestMapping(value="prueba_angular.htm", method=RequestMethod.GET )
	public String pruebaAngular(@RequestParam(required = false) String language, Model model)
	{
		 
//		model.addAttribute("currentCulture", language); 
		
		return "prueba_angular";
	}
	
	@RequestMapping(value="products.htm", method=RequestMethod.GET )
	public String products(@RequestParam(required = false) String language, Model model)
	{
		 
//		model.addAttribute("currentCulture", language); 
		
		return "products";
	}
	
	
}