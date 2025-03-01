import z from 'zod';

export const flashcardFieldsEnumSchema = z.enum([
	'frontFlash',
	'backFlash',
	'exampleForeign1',
	'exampleNative1',
	'exampleForeign2',
	'exampleNative2',
	'exampleForeign3',
	'exampleNative3',
]);

export const flashcardSchema = z.object({
	[flashcardFieldsEnumSchema.Enum.frontFlash]: z.string().min(1).trim(),
	[flashcardFieldsEnumSchema.Enum.backFlash]: z.string().min(1).trim(),
	[flashcardFieldsEnumSchema.Enum.exampleForeign1]: z.string().min(1).trim(),
	[flashcardFieldsEnumSchema.Enum.exampleNative1]: z.string().min(1).trim(),
	[flashcardFieldsEnumSchema.Enum.exampleForeign2]: z.string().min(1).trim(),
	[flashcardFieldsEnumSchema.Enum.exampleNative2]: z.string().min(1).trim(),
	[flashcardFieldsEnumSchema.Enum.exampleForeign3]: z.string().min(1).trim(),
	[flashcardFieldsEnumSchema.Enum.exampleNative3]: z.string().min(1).trim(),
});
export type Flashcard = z.infer<typeof flashcardSchema>;

export const flashcardSetSchema = z.array(flashcardSchema);
export type FlashcardSet = z.infer<typeof flashcardSetSchema>;
