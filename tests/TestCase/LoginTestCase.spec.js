
const { expect } = require('@playwright/test');
const test = require('../common/commonFunction.js');
const inputData = require('../../Inputdata.json');

test('Verify if the user can log in with valid credentials and then sign out', async ({ loginpage }) => {
  await loginpage.EmailField().fill(inputData.Login.Email);
  await loginpage.PasswordField().fill(inputData.Login.Password);
  await loginpage.LoginButton().click();

  await loginpage.SettingLink().click();
  await loginpage.AsideLogoutButton().click();
});

test('Verify if the user can click on the login button without entering the Email and Password, then validate the warning message', async ({ loginpage }) => {
  await loginpage.LoginButton().click();
  const validationMessage = await loginpage.EmptyPasswordValidationMessage().textContent();
  console.log('Validation message:', validationMessage);
  await expect(validationMessage).toBe('"password" is not allowed to be empty');
});

test('Verify if the user can click on the Send Password Reset Email button without entering an email, then check the warning message on the Reset Password page', async ({ loginpage }) => {
  await loginpage.ForgetPasswordLink().click();
  await loginpage.SendpasswordButton().click();

  const validationMessage = await loginpage.EmptyEmailValidationMessage().textContent();
  console.log('Validation message:', validationMessage);

   await expect(validationMessage).toBe('"email" is not allowed to be empty');
  
});

test('Verify if the user can enter the email, then click on the Send Password Reset Email button', async ({ loginpage }) => {
  
  await loginpage.ResetEmailBox().fill('automation@yopmail.com');
  await loginpage.SendpasswordButton().click();
});
