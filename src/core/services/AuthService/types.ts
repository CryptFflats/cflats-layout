export interface IAuth {
	login: string,
	password: string
}

export interface IAuthResponse {
	user: IUser
	refreshToken: string
	accessToken: string
}

export interface IUser {
	_id: string
	login: string
}