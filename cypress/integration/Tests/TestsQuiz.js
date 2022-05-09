/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/HomePage'
import QuestionPage from '../../support/pageObjects/QuestionPage'
import ResultsPage from '../../support/pageObjects/ResultsPage'

 
describe('Client Quiz Test Suite', function() 
{{
    before(function() {
        cy.fixture('example').then(function(data)
       {
           this.data= data
       })
    })
}

beforeEach('visit url', function() {
    cy.visit("https://www.firstleaf.club/")
})
 
it('First Case',function() {

const homePage=new HomePage()
const questionPage=new QuestionPage()
const resultsPage=new ResultsPage()

cy.wait(2000)
homePage.getHamburguerMenu().should('be.visible')
homePage.getHamburguerMenu().click({ force: true })
cy.get('.button-d26-0-2-62').click()
homePage.getTakeTheQuiz().click()
cy.wait(2000)
questionPage.getCircleOptions().should('be.visible')
questionPage.getQuestion().should('be.visible')
questionPage.getQuestion().should('have.text', 'Do you usually drink red, white or both?');
questionPage.getCircleOptions().click({multiple: true,force: true});
questionPage.getCircleOptions().type("{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}",{force: true})
questionPage.getCircleOptions().type("{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}",{force: true})
questionPage.getContinueButton().click()
//Step 2
questionPage.getQuestion().should('have.text', 'How sweet do you like your wine?');
questionPage.getCircleOptions().click({multiple: true,force: true});
questionPage.getCircleOptions().type("{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}",{force: true})
questionPage.getCircleOptions().type("{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}",{force: true})
questionPage.getContinueButton().click()
//Step 3
questionPage.getQuestion().should('have.text', 'What do you think about these types of wine?');
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
// Step 4
questionPage.getQuestion().should('have.text', 'How adventurous are you when you look for wine?');
questionPage.getCircleOptions().click({multiple: true,force: true});
questionPage.getCircleOptions().type("{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}",{force: true})
questionPage.getCircleOptions().type("{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}",{force: true})
questionPage.getContinueButton().click()
// Step 5
questionPage.getQuestion().should('have.text', 'Where are you on your wine journey?');
questionPage.getCircleOptions().click({multiple: true,force: true});
questionPage.getCircleOptions().type("{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}",{force: true})
questionPage.getCircleOptions().type("{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}",{force: true})
questionPage.getContinueButton().click()
// Step 6
questionPage.getQuestion().should('have.text', 'What do you think about these wines?');
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
// Step 7
questionPage.getQuestion().should('have.text', 'Do you like these foods?');
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
// Step 8
questionPage.getQuestion().should('have.text', 'How do you feel about these flavors in your wine?');
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsDown().click({ force: true })
cy.wait(2000)
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
// Step 9
questionPage.getQuestion().should('have.text', 'How many bottles of wine do you drink a month?');
questionPage.getCircleOptions().click({multiple: true,force: true});
questionPage.getCircleOptions().type("{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}",{force: true})
questionPage.getCircleOptions().type("{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}",{force: true})
questionPage.getContinueButton().click()
//Step 10
questionPage.getQuestion().should('have.text', 'Do you like rosé?');
questionPage.getThumbsUp().click({ force: true })
cy.wait(2000)
// Final advice
cy.wait(4000)
resultsPage.getEmail().type(this.data.email)
resultsPage.getNextButton().click()
// Checkout section
resultsPage.getTitleSection().should('have.text', 'Your custom wines');
resultsPage.getCheckOutButton().should('be.visible')
resultsPage.getGuaranteeAdvice().should('include','Satisfaction Guarantee.')
resultsPage.getServiceNUmber().scrollIntoView().should('be.visible')


} )

it('Second Case',function() {

const homePage=new HomePage()
const questionPage=new QuestionPage()
const resultsPage=new ResultsPage()
   
 
 
//cy.visit("https://www.firstleaf.club/")
cy.wait(2000)
homePage.getHamburguerMenu().should('be.visible')
homePage.getHamburguerMenu().click({ force: true })
cy.get('.button-d26-0-2-62').click()
homePage.getTakeTheQuiz().click()
cy.wait(2000)
questionPage.getCircleOptions().should('be.visible')
questionPage.getQuestion().should('be.visible')
questionPage.getQuestion().should('have.text', 'Do you usually drink red, white or both?');
questionPage.getCircleOptions().click({multiple: true,force: true});
questionPage.getCircleOptions().type("{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}",{force: true})
questionPage.getCircleOptions().type("{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}",{force: true})
questionPage.getContinueButton().click()
//Step 2
questionPage.getQuestion().should('have.text', 'How sweet do you like your wine?');
questionPage.getCircleOptions().click({multiple: true,force: true});
questionPage.getCircleOptions().type("{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}",{force: true})
questionPage.getCircleOptions().type("{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}",{force: true})
questionPage.getContinueButton().click()
    //Step 3
questionPage.getQuestion().should('have.text', 'What do you think about these types of wine?');
questionPage.getSkipQuestion().click({force: true})
    //Step 4
questionPage.getQuestion().should('have.text', 'How adventurous are you when you look for wine?');
questionPage.getCircleOptions().click({multiple: true,force: true});
questionPage.getCircleOptions().type("{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}",{force: true})
questionPage.getCircleOptions().type("{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}",{force: true})
questionPage.getContinueButton().click()
    //Step 5
questionPage.getQuestion().should('have.text', 'Where are you on your wine journey?');
questionPage.getCircleOptions().click({multiple: true,force: true});
questionPage.getCircleOptions().type("{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}",{force: true})
questionPage.getCircleOptions().type("{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}",{force: true})
questionPage.getContinueButton().click()
    //Step 6
questionPage.getQuestion().should('have.text', 'What do you think about these wines?');
questionPage.getSkipQuestion().click({force: true})
    // Step 7
questionPage.getQuestion().should('have.text', 'Do you like these foods?');
questionPage.getSkipQuestion().click({force: true})
    // Step 8
questionPage.getQuestion().should('have.text', 'How do you feel about these flavors in your wine?');
questionPage.getSkipQuestion().click({force: true})
    // Step 9
questionPage.getQuestion().should('have.text', 'How many bottles of wine do you drink a month?');
questionPage.getCircleOptions().click({multiple: true,force: true});
questionPage.getCircleOptions().type("{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}",{force: true})
questionPage.getCircleOptions().type("{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}",{force: true})
questionPage.getContinueButton().click()
    // Step 10
questionPage.getQuestion().should('have.text', 'Do you like rosé?');
questionPage.getThumbsDown().click({ force: true })
    // Final advice
cy.wait(4000)
resultsPage.getEmail().type(this.data.email)
resultsPage.getNextButton().click()
    // Checkout section
resultsPage.getTitleSection().should('have.text', 'Your custom wines');
resultsPage.getCheckOutButton().should('be.visible')
resultsPage.getServiceNUmber().scrollIntoView().should('be.visible')   
    
    } )

})