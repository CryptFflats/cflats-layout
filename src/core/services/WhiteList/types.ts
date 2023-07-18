export type WlType = 'free' | 'discount';

export interface IWhiteList {
	_id: string
	type: WlType
	name: string
	addresses: string[]
	createdAt: Date
	updatedAt: Date
	__v: number
}

export interface IGetWhiteList {
	name: string
	type: WlType
}

export interface IPutWhiteList {
	name: string
	type: WlType
	addresses: string[]
}