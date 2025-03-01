import FileLoader from '@/components/FileStream/components/FileLoader';
import { Title } from '@/components/Title';
import { FileDownload } from '@/components/FileStream/components/FileDownload';

export const FileStream = () => {
	return (
		<div className="border-2 border-solid border-retrowave-dark_violet">
			<Title>FileStream</Title>
			<div className="flex flex-row justify-between gap-8 p-12">
				<FileLoader />
				<FileDownload />
			</div>
		</div>
	);
};
