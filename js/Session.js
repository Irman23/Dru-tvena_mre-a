class Session{
	user_id = '';

	startSession()
	{
		/*
		const d = new Date();
		let today = d.getTime();
		let expires = 2*24*60*60*1000;
		d.setTime(today+expires);
		let new_date = d.toUTCString();
		//d.setTime(d.getTime() + (2*24*60*60*1000));
		//let expires = "expires=" + d.toUTCString();
		//document.cookie = "user_id=" + this.user_id + ";" + expires;
		document.cookie = ` user_id=  ${this.user_id};   expires=${new_date}`;
		console.log(new_date);
		*/

		const d = new Date();
		d.setTime(d.getTime() + (1*24*60*60*1000));
		let expires = "expires=" + d.toUTCString();
		document.cookie = "user_id=" + this.user_id + ";" + expires;
		
	}

	getSession()
	{
		let name = 'user_id=';
		let ca = document.cookie.split(';');

		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while(c.charAt(0) == ' '){
				c=c.substring(1);
			}
			if(c.indexOf(name)==0)
			{
				return c.substring(name.length, c.length);
			}
		}

		return "";
	}
	destroySession()
	{
		let cookies = document.cookie.split(';');

		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i];
			let eqpos = cookie.indexOf('=');
			let name = eqpos > -1 ? cookie.substr(0,eqpos) : cookie;
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		}
	}
}
