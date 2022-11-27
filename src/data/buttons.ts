interface IButton {
	name: string,
	value: string,
	filter: boolean
}

export const buttons: IButton[] = [
	{
		name: "All",
		value: 'a', //all
		filter: true
	},
	{
		name: "Done",
		value: 'd', //done
		filter: true
	},
	{
		name: 'Undone',
		value: 'u', //undone
		filter: true
	},
	{
		name: 'Remove',
		value: 'r', //remove
		filter: false
	}
]
