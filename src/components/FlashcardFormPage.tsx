import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { mapValues } from 'lodash';

import PlusIcon from '@/assets/icons/plus.svg';
import { Input } from '@/components/Input';
import { Flashcard, flashcardSchema } from '@/schema/flashcard-form.schema';
import { useFlashcardStoreActions } from '@/stores/flashcard.store';
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';

export const FlashcardFormPage = () => {
	const { addRow } = useFlashcardStoreActions();
	const methods = useForm<Flashcard>({
		defaultValues: {
			frontFlash: '',
			backFlash: '',
			exampleForeign1: '',
			exampleNative1: '',
			exampleForeign2: '',
			exampleNative2: '',
			exampleForeign3: '',
			exampleNative3: '',
		},
		resolver: zodResolver(flashcardSchema),
	});

	const onSubmit = (data: Flashcard) => {
		addRow(mapValues(data, (item) => item.trim()));
		methods.reset();
	};

	return (
		<div className="border-2 border-solid border-retrowave-dark_violet">
			<Title>Flashcard form</Title>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} className="p-4">
					{/* Base */}
					<div>
						<h2>Base Front & Back</h2>
						<div className="flex w-full gap-4">
							<div className="w-full max-w-[400px]">
								<Input
									name="frontFlash"
									label="Front Flashcard"
									description="Word in native language"
								/>
							</div>
							<div className="w-full max-w-[400px]">
								<Input
									name="backFlash"
									label="Back Flashcard"
									description="Word in native language"
								/>
							</div>
						</div>
					</div>
					{/* Translation Examples*/}
					<div>
						<h2>Translation Examples</h2>
						<div>
							<h3>#1</h3>
							<div className="flex w-full flex-row gap-4">
								<Input
									name="exampleForeign1"
									label="Foreign language sentence example"
									description="#1 Example foreign sentence"
								/>
								<Input
									name="exampleNative1"
									label="Native language sentence example"
									description="#1 Example native sentence"
								/>
							</div>
						</div>
						<div>
							<h3>#2</h3>
							<div className="flex w-full flex-row gap-4">
								<Input
									name="exampleForeign2"
									label="Foreign language sentence example"
									description="#2 Example foreign sentence"
								/>
								<Input
									name="exampleNative2"
									label="Native language sentence example"
									description="#2 Example native sentence"
								/>
							</div>
						</div>
						<div>
							<h3>#3</h3>
							<div className="flex w-full flex-row gap-4">
								<Input
									name="exampleForeign3"
									label="Foreign language sentence example"
									description="#3 Example foreign sentence"
								/>
								<Input
									name="exampleNative3"
									label="Native language sentence example"
									description="#3 Example native sentence"
								/>
							</div>
						</div>
					</div>
					{/* //button */}
					<div className="my-4 mt-12">
						<Button>
							ADD DATA <PlusIcon height={32} className="ml-4" />
						</Button>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};
