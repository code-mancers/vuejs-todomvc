describe('TODOMVC_ADD_TODO', function() {

 it('adds_three_todo_entries', function() {

    cy.viewport(1440, 763)
 
    cy.visit('http://localhost:8080/')
 
    cy.get('body > .todoapp > .header > .new-todo').click()
 
    cy.get('body > .todoapp > .header > .new-todo').type('meet John tomorrow')
 
    cy.get('body > .todoapp > .header > .new-todo').click()
 
    cy.get('body > .todoapp > .header > .new-todo').type('buy groceries')
 
    cy.get('body > .todoapp > .header > .new-todo').click()
 
    cy.get('body > .todoapp > .header > .new-todo').type('buy notebook for son')
 
 })

})
