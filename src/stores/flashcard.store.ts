import { create } from 'zustand';

import { Flashcard, FlashcardSet } from '@/schema/flashcard-form.schema';
import { FlashcardLocalStorage } from '@/stores/flashcard-local-storage';

interface Actions {
	updateDataSet: (dataset: FlashcardSet) => void;
	addRow: (flashcard: Flashcard) => void;
	removeRow: (Flashcard: Flashcard) => void;
}

interface State {
	dataset: FlashcardSet;
}

type FormPageStore = {
	state: State;
	actions: Actions;
};

const defaultState: State = {
	dataset: FlashcardLocalStorage.get(),
};

export const flashcardStore = create<FormPageStore>((set) => ({
	state: defaultState,
	actions: {
		updateDataSet: (dataset) => {
			set(({ state }) => {
				FlashcardLocalStorage.save(dataset);

				return {
					state: {
						...state,
						dataset,
					},
				};
			});
		},
		addRow: (flashcard) => {
			set(({ state }) => {
				const newDataset = [...state.dataset, flashcard];
				FlashcardLocalStorage.save(newDataset);

				return {
					state: {
						...state,
						dataset: [...state.dataset, flashcard],
					},
				};
			});
		},
		removeRow: (flashcard) => {
			set(({ state }) => {
				FlashcardLocalStorage.clear();

				return {
					state: {
						...state,
						dataset: state.dataset.filter((item) => item !== flashcard),
					},
				};
			});
		},
	},
}));

export const useFlashcardStoreActions = () =>
	flashcardStore((state) => state.actions);
export const useFlashcardStoreState = () =>
	flashcardStore((state) => state.state);
