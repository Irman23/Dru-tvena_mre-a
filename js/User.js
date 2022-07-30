class User{
	user_id = '';
	username = '';
	email = '';
	password = '';
	api_url = 'https://62c4718babea8c085a75f2c4.mockapi.io';

	create() {
		let data = {
			username: this.username,
			email: this.email,
			password: this.password
		}

		data = JSON.stringify(data);

		fetch(this.api_url + '/users',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: data
		})
		.then(response => response.json())
		.then(data=> {
			let session = new Session();
			session.user_id = data.id;
			session.startSession();
			
			window.location.href = 'hexa.html';
		})
	}

	async get(user_id)
	{
		let api_url = this.api_url + '/users/' + user_id;

		let response = await fetch(api_url);
		let data = await response.json();

		return data;
	}

	login(){
		fetch(this.api_url + '/users')
		.then(response=>response.json())
		.then(data=>{

			let login_s = 0;
			data.forEach(db_user =>{
				if(db_user.email === this.email && db_user.password === this.password)
				{
					let session = new Session();
					session.user_id = db_user.id;
					session.startSession();

					login_s = 1;

					window.location.href = 'hexa.html';

				}
			});

			if(login_s === 0)
			{
				alert('Pogrešan email ili lozinka');
			}
		});
	}
}