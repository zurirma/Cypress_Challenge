class HomePage
{

getHamburguerMenu()
{
    return cy.get('.index-module--burger-btn--jYRH4 > svg')
}

getTakeTheQuiz()
{
    return cy.get('.button-d26-0-2-62')
}

}

export default HomePage;
