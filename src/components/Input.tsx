import {
	Description,
	Field,
	Input as HeadlessInput,
	Label,
} from '@headlessui/react';
import { Controller } from 'react-hook-form';

import { cn } from '@/utils/cn';
import PositiveCheckIcon from '@/assets/icons/positive_check_icon.svg';
import NegativeCheckIcon from '@/assets/icons/negative_check_icon.svg';

type InputProps = {
	name: string;
	label: string;
	description?: string;
	className?: string;
};

export function Input({ name, label, description, className }: InputProps) {
	const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		event.target.setSelectionRange(0, 0);
	};

	return (
		<Controller
			name={name}
			render={({ field, fieldState: { error } }) => (
				<div className="w-full">
					<Field>
						<Label
							className={cn(
								'ml-6 font-bold text-retrowave-futuristic_teal',
								error && 'text-retrowave-neon_pink'
							)}
						>
							{label}
						</Label>
						<div className="relative flex border-2">
							<HeadlessInput
								{...field}
								onFocus={handleOnFocus}
								className={cn(
									'mt-2 block w-full border border-retrowave-dark_violet bg-slate-800 p-4 text-sm leading-4 text-white',
									'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-retrowave-futuristic_teal',
									error && 'border-retrowave-neon_pink',
									className
								)}
							/>
							{field.value && !error ? (
								<PositiveCheckIcon
									className="group pointer-events-none absolute right-1 top-[10px] -translate-y-1/2 text-retrowave-futuristic_teal"
									aria-hidden="true"
								/>
							) : null}
							{error ? (
								<NegativeCheckIcon
									className="group pointer-events-none absolute right-1 top-[10px] -translate-y-1/2 text-retrowave-neon_pink"
									aria-hidden="true"
								/>
							) : null}
						</div>
						{error ? (
							<Description className="ml-6 mt-1.5 text-[10px] text-retrowave-neon_pink">
								{error.message}
							</Description>
						) : null}
						{description && !error ? (
							<Description className="ml-6 mt-1.5 text-[10px] font-bold text-gray-200">
								{description}
							</Description>
						) : null}
					</Field>
				</div>
			)}
		/>
	);
}
