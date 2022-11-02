package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.LoginPage;
import page.TestBase;

public class LoginStepDefinations extends TestBase { 

	LoginPage loginPageObj;
	
	@Before
	public void setUp()
	{
		initDriver();
		loginPageObj = PageFactory.initElements(driver, LoginPage.class); 
		
	} 
	
	@Given ("^User is on the techfios login page$")
	public void User_is_on_the_techfios_login_page()
	{
		driver.get("https://techfios.com/billing/?ng=admin/");
	}
	
	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username){
	    
		loginPageObj.insertUserName(username);
	    
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void  user_enters_password_as(String password){
	    
		loginPageObj.insertPassword(password);
	}

	@When("^User clicks on signin button$")
	public void user_clicks_on_signin_button(){
	   
		loginPageObj.clickSignIn();
		
	}
	
	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		String expectedTitle = "Dashboard- iBilling";
		String actuleTitle = loginPageObj.getPageTitle(driver);
		Assert.assertEquals("Page not found ",expectedTitle, actuleTitle);

	}
	

//	@Then("^User should land on Dashboard page$")
//	public void user_should_land_on_Dashboard_page(){
//		String expectedText = "Dashboard";
//		String actualText = loginPageObj.getPage();
//		Assert.assertEquals("Page not found " , expectedText, actualText);
//	}


	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

	
	
}
