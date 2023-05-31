class Login{
    //locators for login page
    login_email = '#ctl00_CPHContainer_txtUserLogin'
    login_password = '#ctl00_CPHContainer_txtPassword'
    login_btn = '#ctl00_CPHContainer_btnLoginn'
    
    testYou_logo = '.header_main > :nth-child(1) > .grid_7'

    home_header = '#ctl00_CPHHeader_dvHome > .menu_unselected > a'
    onlineTest_header = '#ctl00_CPHHeader_HyperLink1'
    testSerise_header = '#ctl00_CPHHeader_HyperLink5'
    pricing_header = '#ctl00_CPHHeader_HyperLink2'
    aboutUS_header = '#ctl00_CPHHeader_hpr4 > span'
    help_header = '#ctl00_CPHHeader_dvHowToUse > .menu_unselected > a > span'
    search_header = '.search_icon_header'

    socialMedia_link = '.social_normal>div>a'
    what_we_offer_footer_links = '.footer_wrapper>div>div>div:nth-child(2)>div>ul>li'

    notification_bar = '#notificationba'
    close_notifi_bar = '.nbar_close'

    forgot_email_textfield='#ctl00_CPHContainer_txtEmailId'
    
    forgot_password_link='#ctl00_CPHContainer_hprlnkForgetPassword'
    
    submit_btn = '#ctl00_CPHContainer_btnChangePassword'
    forgetPassword_errorMsg = '#ctl00_CPHContainer_lblOutput'
    signUp_link = '.signup_link>a'
    

    //action methods
    verify_testYou_logo()
    {
        cy.get(this.testYou_logo).should('be.visible')
    }
    enter_email_loginPage(email)
    {
        cy.get(this.login_email).type(email)
    }
    set_forget_email(email)
    { 
        cy.get(this.forgot_email_textfield).type(email)
    }
    enter_password_loginPage(password)
    {
        cy.get(this.login_password).type(password)
    }
    click_login()
    {
        cy.get(this.login_btn).click()
    }
    verify_pageTitle(title)
    {
        cy.title().should('eq', title)
    }
    verify_home_header()
    {
        cy.get(this.home_header).should('be.visible')
        cy.get(this.home_header).should('have.text', 'Home ')
    }
    verify_onlineTests_header()
    {
        cy.get(this.onlineTest_header).should('be.visible')
        cy.get(this.onlineTest_header).should('have.text', 'Online Tests  ')
    }
    verify_testSerise_header()
    {
        cy.get(this.testSerise_header).should('be.visible')
        cy.get(this.testSerise_header).should('have.text', 'Test Series ')
    }
    verify_pricing_header()
    {
        cy.get(this.pricing_header).should('be.visible')
        cy.get(this.pricing_header).should('have.text', 'Pricing ')
    }
    verify_aboutUs_header()
    {
        cy.get(this.aboutUS_header).should('be.visible')
        cy.get(this.aboutUS_header).should('have.text', 'About Us')
    }
    verify_help_header()
    {
        cy.get(this.help_header).should('be.visible')
        cy.get(this.help_header).should('have.text', 'Help')
    }
    verify_search_header()
    {
        cy.get(this.search_header).should('be.visible')
    }
    click_close_notification_bar()
    {
        cy.get(this.close_notifi_bar).click()
        cy.get(this.notification_bar).should('not.exist')
    }
    click_submitBtn()
    {
        cy.get(this.submit_btn).click()
    }
    verify_signUp_link()
    {
        cy.get(this.signUp_link).eq(1).should('be.visible')
    }
    verify_signUp_page()
    {
        cy.get(this.signUp_link).eq(1).click()
        cy.title().should('eq', 'SignUp Page | Test Creator - TestYou')
        cy.url().should('eq', 'https://www.testyou.in/SignUp.aspx')
    }
    verify_forgetPassword()
    {
        cy.get(this.forgetPassword_errorMsg).should('have.text','Incorrect Email-ID / LoginId OR Your Account Not Activated Please do activate your account !')
    }
    click_forgot_password()
    {
        cy.get(this.forgot_password_link).click()
    }
    getiiting_termsandCondition_footer()
    { 
        const url = 'https://www.testyou.in/'
        cy.viewport(1024, 768)
        cy.get('.footer_wrapper>div>div>div:nth-child(2)>div>ul>li:nth-child(6)>a').should('have.text', 'Terms & Conditions ')
        cy.get('.footer_wrapper>div>div>div:nth-child(2)>div>ul>li:nth-child(6)>a')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit(url + href)
        })
        cy.title().should('eq', 'Terms & Condition Page | Test Maker - TestYou')
        cy.url().should('eq', 'https://www.testyou.in/TermsAndCondition.aspx')
    }
    getiiting_facebook_social_link(text)
    { 
        cy.viewport(1024, 768)
        cy.get(this.socialMedia_link).first().should('have.text', text)
        cy.get(this.socialMedia_link)
        .first()
        .invoke('attr', 'href')
        .should('eq', 'https://www.facebook.com/TestYou.in ')
    }
    getiiting_twitter_link(text)
    { 
        cy.viewport(1024, 768)
        cy.get(this.socialMedia_link).eq(1).should('have.text', text)
        cy.get(this.socialMedia_link)
        .eq(1)
        .invoke('attr', 'href')
        .should('eq', 'https://twitter.com/TestYou_In')
    }
    getiiting_linkedin_link(text)
    { 
        cy.viewport(1024, 768)
        cy.get(this.socialMedia_link).eq(2).should('have.text', text)
        cy.get(this.socialMedia_link)
        .eq(2)
        .invoke('attr', 'href')
        .should('eq', 'https://www.linkedin.com/company/testyou')
    }
    getiiting_google_social_link(text)
    { 
        cy.viewport(1024, 768)
        cy.get(this.socialMedia_link).last().should('have.text', text)
        cy.get(this.socialMedia_link)
        .last()
        .invoke('attr', 'href')
        .should('eq', 'https://plus.google.com/u/0/+TestyouIn-Online-Exam-Partner/posts')
    }
    getting_what_we_offer_footer()
    {
        cy.get(this.what_we_offer_footer_links).should('have.length', 8)
    }
}
export default Login;