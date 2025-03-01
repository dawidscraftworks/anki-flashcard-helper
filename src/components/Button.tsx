import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	className?: string;
}
export const Button = ({ children, className, ...rest }: Button) => {
	return (
		<button
			{...rest}
			className={cn(
				'flex items-center justify-center border-2 border-retrowave-deep_magenta bg-retrowave-midnight_blue px-20 py-2 font-orbitron text-3xl text-retrowave-cyber_blue hover:cursor-pointer',
				className
			)}
		>
			{children}
		</button>
	);
};
