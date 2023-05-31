// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import './commands'
require('@cypress/xpath');

// //save session data at the end od an it()
let LOCAL_STORAGE_MEMROY={};
Cypress.Commands.add("saveLocalStorage",(()=>{
    Object.keys(localStorage).forEach((key)=>{
        LOCAL_STORAGE_MEMROY[key]=localStorage[key];
    });
}));

//restore session data at the beginning of an it()
Cypress.Commands.add("restoreLocalStorage",()=>{
    Object.keys(LOCAL_STORAGE_MEMROY).forEach((key)=>{
        localStorage.setItem(key,LOCAL_STORAGE_MEMROY[key]);
    });
});
import 'cypress-file-upload'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
