describe('TODOMVC_CHECK_AS_DONE', function() {

 it('checks_a_todo_as_done', function() {

    cy.viewport(1440, 763)
 
    cy.visit('/')
 
    cy.get('body > .todoapp > .header > .new-todo').type('buy groceries')
 
    cy.get('body > .todoapp > .header > .new-todo').click()
 
    cy.get('body > .todoapp > .header > .new-todo').type('fill petrol')
 
    cy.get('.main > .todo-list > .todo:nth-child(2) > .view > .toggle').click()
 
    cy.get('.main > .todo-list > .todo:nth-child(2) > .view > .toggle').check('on')
 
    cy.get('.main > .todo-list > .todo:nth-child(1) > .view > .toggle').click()
 
    cy.get('.main > .todo-list > .todo:nth-child(1) > .view > .toggle').check('on')
 
 })

})
