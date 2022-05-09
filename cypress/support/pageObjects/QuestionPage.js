class QuestionPage
{

getCircleOptions()
{
    return cy.get('.rc-slider-handle')
}

getQuestion()
{
    return cy.get('.index-module--heading--RVbC2')
}


getContinueButton()
{
    return cy.get('[data-testid="continue"]')
}

getThumbsUp()
{
    return cy.get('[data-testid="positiveBtn"]')
}

getThumbsDown()
{
    return cy.get('[data-testid="negativeBtn"]')
}

getSkipQuestion()
{
    return cy.get('[data-testid="next-question"]')
}




}

export default QuestionPage;