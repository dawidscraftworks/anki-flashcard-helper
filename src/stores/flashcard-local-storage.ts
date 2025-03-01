import {
	FlashcardSet,
	flashcardSetSchema,
} from '@/schema/flashcard-form.schema';

export class FlashcardLocalStorage {
	private static storageKey = 'anki_flashcard_helper';

	public static clear() {
		localStorage.removeItem(FlashcardLocalStorage.storageKey);
	}

	public static save(dataset: FlashcardSet) {
		localStorage.setItem(
			FlashcardLocalStorage.storageKey,
			JSON.stringify(dataset)
		);
	}

	public static get = () => {
		try {
			const data = JSON.parse(
				localStorage.getItem(FlashcardLocalStorage.storageKey) ?? ''
			);

			return flashcardSetSchema.parse(data);
		} catch (error) {
			FlashcardLocalStorage.clear();

			return [];
		}
	};
}
