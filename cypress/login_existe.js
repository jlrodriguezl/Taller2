describe('Los estudiantes login correcto', function() {
    it('Visits los estudiantes and login correctly', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()
	cy.contains('Ingresar').click()
      	cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Jose")
	cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Rodriguez")
	cy.get('.cajaSignUp').find('input[name="correo"]').click().type("j.rodriguez19@uniandes.edu.co")
	cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Arte")	
	cy.get('.cajaSignUp').find('input[name="password"]').click().type("j.rodriguez19")
	cy.get('.cajaSignUp').find('input[name="acepta"]').click()
      	cy.get('.cajaSignUp').contains('Registrarse').click()      	
    })
})
