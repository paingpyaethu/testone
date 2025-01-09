// describe('Login API', () => {
// 	const apiUrl = `http://0.0.0.0:8080/login`;

// 	it('should successfully log in with valid credentials', () => {
// 		cy.request({
// 			method: 'POST',
// 			url: apiUrl,
// 			body: {
// 				email: 'paingpyaethu@gmail.com',
// 				password: 'pAingpyaeThu556$$$',
// 			},
// 		}).then((response) => {
// 			expect(response.status).to.eq(200);
// 		});
// 	});

// 	// it('should fail to log in with invalid credentials', () => {
// 	// 	cy.request({
// 	// 		method: 'POST',
// 	// 		url: apiUrl,
// 	// 		failOnStatusCode: false,
// 	// 		body: {
// 	// 			email: 'invaliduser@example.com',
// 	// 			password: 'wrongpassword',
// 	// 		},
// 	// 	}).then((response) => {
// 	// 		expect(response.status).to.eq(400);
// 	// 		expect(response.body).to.have.property('error');
// 	// 	});
// 	// });
// });

describe('Login API', () => {
	const apiUrl = `http://0.0.0.0:8080/api/v1/login`;

	it('should successfully log in with valid credentials', () => {
		cy.request({
			method: 'POST',
			url: apiUrl,
			body: {
				email: 'paingpyaethu@gmail.com',
				password: 'pAingpyaeThu556$$$',
			},
		}).then((response) => {
			expect(response.status).to.eq(200);
		});
	});

	it('should fail to log in with invalid credentials', () => {
		cy.request({
			method: 'POST',
			url: apiUrl,
			failOnStatusCode: false,
			body: {
				email: 'invaliduser@example.com',
				password: 'wrongpassword',
			},
		}).then((response) => {
			expect(response.status).to.eq(401);
			// expect(response.body).to.have.property('error');
		});
	});
});
