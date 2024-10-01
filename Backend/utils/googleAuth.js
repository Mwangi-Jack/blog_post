import axios from "axios";

export async function getGoogleAccessToken(code) {
	try {
		const response = await axios.post('https://oauth2.googleapis.com/token', {
			code: code,
			client_id: process.env.GOOGLE_CLIENT_ID,
			client_secret: process.env.GOOGLE_CLIENT_SECRET,
			redirect_uri: 'http://localhost:3000',
			grant_type: 'authorization_code'
		})
		return response.data;

	} catch(err) {
		console.error('Error getting access token', error.response.data)
		throw new Error('Failed to get access token')
	}
}

export async function getGoogleUserInfo(accessToken) {
	try {
		const response = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},

		});
		return response.data;
	} catch (err) {
		console.error('Error getting user info', err.response.data)
		throw new Error('Failed to get user info')
	}
}

// async function saveUser(userInfo) {
// 	const user = await User.findOne({ googleId: userInfo.id });
// 	if (!user) {
// 		const newUser = new User({
// 			googleId: userInfo.id,
// 			email: userInfo.email,
// 			Fname: userInfo.name,
// 			profile_url: userInfo.picture,
// 		});

// 		await newUser.save();
// 		console.log('User saved to DB')
// 	}
// }
