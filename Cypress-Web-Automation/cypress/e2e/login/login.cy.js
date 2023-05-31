import Login from "../../page_objects/login/login_page"
describe('Verify login test cases',()=>{
    beforeEach(()=>{
        cy.visit('https://www.testyou.in/Login.aspx')
        
    })

    //Create object for Login class where all methods are define
    const ln=new Login();

    //verfiy application logo
    it('Verify the TestYou main logo', ()=>{
        
        ln.verify_testYou_logo();
    })

    //verify login with valid user email and password
    it('Verify the login functionality', ()=>{
        cy.fixture('login').then((data)=>{
            ln.enter_email_loginPage(data.all_valid_inputs.email);
            ln.enter_password_loginPage(data.all_valid_inputs.password);
            ln.click_login();
            ln.verify_pageTitle('Student Dashboard | Test Maker - TestYou');
        })
    })

    //verify all headers on application
    it('Verify All header menus', ()=>{
        ln.verify_home_header();
        ln.verify_onlineTests_header();
        ln.verify_testSerise_header();
        ln.verify_pricing_header();
        ln.verify_aboutUs_header();
        ln.verify_help_header();
        ln.verify_search_header();
    })
    
    //verify keep connected links with there text in footer
    it('Verify the Keep Connected links', ()=>{
        ln.getiiting_facebook_social_link('Like us on Facebook');
        ln.getiiting_twitter_link('Follow us on Twitter');
        ln.getiiting_linkedin_link('Follow us on Linkedin');
        ln.getiiting_google_social_link('Follow us on Google+');
        
    })

    //verify what we offer links with there conuts in footer
    it('Verify What we Offer links', ()=>{
        ln.getting_what_we_offer_footer()

    })

    //verify notification arrow and its functionality
    it('Verify the Downward arrow icon at Right upper corner/notification bar.', ()=> {
        ln.click_close_notification_bar();
    })

    //verify footer is visible on website or not with 'term and condition' link
    it('view the terms and conditions.',()=>{
            ln.getiiting_termsandCondition_footer();
    })

    //verify signup page link and after that verify user redirected on right page
    it('Verify the Signup link on login page', ()=>{
        ln.verify_signUp_link();
        ln.verify_signUp_page();
    })

    //verify forgot passwprd functionality with enter vaild email id
    it('Verify sighup page funcationality',()=>{
        cy.fixture('login').then((data)=>{
            ln.click_forgot_password();
            ln.set_forget_email(data.all_valid_inputs.email);
            ln.click_submitBtn();
            ln.verify_forgetPassword();
        })
    })

})