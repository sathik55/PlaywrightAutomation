class LoginPage {
  constructor(page) {
    this.page = page;
  }

  // Email field selector
  EmailField() {
    return this.page.locator('[placeholder="Email or Username"]');
  }

  // Password field selector
  PasswordField() {
    return this.page.locator('[placeholder="Password"]');
  }

  // Login button selector
  LoginButton() {
    return this.page.locator("//button[text()='Login']");
  }

  // Setting link selector
  SettingLink() {
    return this.page.locator("//*[text()='Settings']");
  }

  // Logout button selector
  AsideLogoutButton() {
    return this.page.locator("//*[text()='sathik.a@vuedata.in']/following::div[1]");
  }

  // Empty Email Validation message
  EmptyEmailValidationMessage() {
    return this.page.locator("//*[text()=\"Email or Username\" is not allowed to be empty]");
  }

  // Empty Password Validation message
  EmptyPasswordValidationMessage() {
    return this.page.locator("//*[text()='\"password\" is not allowed to be empty']");
  }

  EmptyEmailValidationMessage() {
    return this.page.locator("//*[text()='\"email\" is not allowed to be empty']");
  }
//*[text()='"password" is not allowed to be empty']
  // Forgot Password link
  ForgetPasswordLink() {
    return this.page.locator("//*[text()='Forgot your password?']");
  }

  // Send Password Reset Email button
  SendpasswordButton() {
    return this.page.locator("//button[text()='Send Password Reset Email']");
  }

  // Reset email field
  ResetEmailBox() {
    return this.page.locator("//input[@placeholder='Email']");
  }

  // Captcha related frame handling
  RecaptchaCheckbox() {
    return this.page.locator('iframe[name="ifmail"]').contentFrame().locator('iframe[name="a-b2cf5vl277aa"]').contentFrame().getByText("I'm not a robot");
  }
}

module.exports = LoginPage;
