describe('Los estudiantes login correcto', function() {
    it('Visits los estudiantes and login correctly', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()
	cy.contains('Ingresar').click()
      	cy.get('.cajaLogIn').find('input[name="correo"]').click().type("j.rodriguez19@uniandes.edu.co")
	cy.get('.cajaLogIn').find('input[name="password"]').click().type("j.rodriguez19")
      	cy.get('.cajaLogIn').contains('Ingresar').click()      	
    })
})
