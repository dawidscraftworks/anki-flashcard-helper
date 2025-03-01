import { Table } from '@/components/FlashcardTable/Table';
import { Title } from '@/components/Title';
import { useFlashcardStoreState } from '@/stores/flashcard.store';

export const FlashcardTable = () => {
	const { dataset } = useFlashcardStoreState();

	return (
		<div>
			<Title>Flashcard Table</Title>
			<Table data={dataset} />
		</div>
	);
};
