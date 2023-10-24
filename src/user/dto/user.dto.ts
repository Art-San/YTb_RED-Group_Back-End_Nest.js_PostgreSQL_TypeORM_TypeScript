import { IsEmail, IsString } from 'class-validator'


//UserDto описываем данные которые приходят из вне на обновление и создание
export class UserDto {
	@IsEmail()
	email: string

	password?: string

	@IsString()
	name: string

	@IsString()
	address: string

	@IsString()
	avatarPath: string
}

// export class UserDto {
// 	email: string
// 	password?: string
// }
