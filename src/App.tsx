import { FileStream } from '@/components/FileStream/FileStream';
import { FlashcardFormPage } from '@/components/FlashcardFormPage';
import { FlashcardTable } from '@/components/FlashcardTable/FlashcardTable';
import { cn } from '@/utils/cn';
import retrowaveimg from '@/assets/images/retrowave.jpg';

function App() {
	return (
		<div className="relative">
			<div
				style={{
					backgroundImage: `url('${retrowaveimg}')`,
				}}
				className={cn(
					'fixed inset-0 h-screen w-screen',
					'bg-[/assets/retrowave.jpg]',
					'top-0 bg-cover bg-fixed opacity-10'
				)}
			/>
			<div className="relative flex flex-col gap-4">
				<div className="flex flex-row items-center justify-between bg-retrowave-deep_magenta p-2">
					<h1 className="m-0 p-0">Anki flashcard helper</h1>
					<span className="font-silkscreen">VERSION: 0.01 ALPHA</span>
				</div>
				<FileStream />
				<FlashcardFormPage />
				<FlashcardTable />
			</div>
		</div>
	);
}

export default App;
