import Papa from 'papaparse';

import { useFlashcardStoreActions } from '@/stores/flashcard.store';
import { flashcardSetSchema } from '@/schema/flashcard-form.schema';
import { Button } from '@/components/Button';
import GlobeIcon from '@/assets/icons/globe.svg';

export default function FileLoader() {
	const { updateDataSet } = useFlashcardStoreActions();
	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;

		Papa.parse(file, {
			complete: (result) => {
				if (result.data.length > 0) {
					try {
						const parsedData = flashcardSetSchema.parse(result.data);
						updateDataSet(parsedData);
					} catch (error) {
						alert('FILE INTERRUPTED');
					}
				}
			},
			delimiter: ';',
			header: true,
			skipEmptyLines: true,
		});
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const fileInput = document.getElementById(
			'file-upload'
		) as HTMLInputElement;
		fileInput?.click();
	};

	return (
		<div className="flex w-full max-w-[750px]">
			<input
				id="file-upload"
				type="file"
				accept=".csv"
				onChange={handleFileUpload}
				className="mb-4 hidden"
			/>
			<Button type="button" onClick={handleClick} className="w-full">
				UPLOAD DATA
				<GlobeIcon height={32} className="ml-4" />
			</Button>
		</div>
	);
}
