import Papa from 'papaparse';
import { saveAs } from 'file-saver';

import { Button } from '@/components/Button';
import { useFlashcardStoreState } from '@/stores/flashcard.store';
import FloppyIcon from '@/assets/icons/floppy.svg';

export const FileDownload = () => {
	const { dataset } = useFlashcardStoreState();
	const handleDownloadCSV = () => {
		const csv = Papa.unparse(dataset, { delimiter: ';' });
		const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
		saveAs(blob, 'flashcards.csv');
	};

	return (
		<Button onClick={handleDownloadCSV} className="w-full max-w-[750px]">
			DOWNLOAD COMPUTER DATA <FloppyIcon height={32} className="ml-4" />
		</Button>
	);
};
