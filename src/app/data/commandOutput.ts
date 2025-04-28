export interface CommandOutput {
	element: string;
	className?: string;
	children?: CommandOutput[];
	innerText?: string;
	attributes?: { [key: string]: string };
	hostStyle?: { [key: string]: string };
}
