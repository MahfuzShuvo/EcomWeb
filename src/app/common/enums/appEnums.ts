export enum RecordStatus {
	Active = 1,
	Inactive = 2,
	Deleted = 3,
}

export enum ResponseStatus {
	success = 200,
	internalServerError = 500,
	fail = 404,
	warning = 400,
	info = 300,
	unAuthorize = 401,
}

export enum DataType {
	Image = 1,
	Text = 2,
	Stream = 3,
	Video = 4,
}

export enum UserRole {
	SuperAdmin = 1,
	CompanyAdmin = 2,
	Agent = 3,
	Participant = 4,
}

export enum CommonAction {
	Active = 1,
	Inactive = 2,
	Remove = 3,
	View = 4,
	Edit = 5,
}

export let monthList = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

export const NO_OF_AUTO_COMPLETE_DATA = 100;
export const NO_OF_ROW_DATA = 20;
