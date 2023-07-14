export const filterEmptyStrings = (arr: string[]): string[] => {
	return arr.filter((item) => item.trim() !== '');
}