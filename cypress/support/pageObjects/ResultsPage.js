class ResultsPage
{

getEmail()
{
    return cy.get('#email')
}

getNextButton()
{
    return cy.get('.index-module--btn--MCDfl')
}

getTitleSection()
{
    return cy.get('.index-module--title--2n3Dv')
}

getCheckOutButton()
{
    return cy.get('.index-module--button-wrapper--gMUhe > .button-0-2-303')
}

getGuaranteeAdvice()
{
    return cy.get('.index-module--tooltipText--Wcywo')
}

getGuaranteeAdvice()
{
    return cy.get('.index-module--tooltipText--Wcywo')
}

getServiceNUmber()
{
    return cy.get('#phone-firstleaf')
}






}

export default ResultsPage;