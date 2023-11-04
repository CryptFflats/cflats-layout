export interface SwapSectionProps {
	title: string;
	amount: number;
	TokenComponent: React.FC;
	maxLabel?: boolean;
	onChange: (value: number | string) => void;
}
