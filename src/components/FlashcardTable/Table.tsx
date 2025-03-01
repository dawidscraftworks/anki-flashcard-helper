import {
	useReactTable,
	getCoreRowModel,
	flexRender,
	ColumnDef,
	createColumnHelper,
} from '@tanstack/react-table';

import {
	Flashcard,
	flashcardFieldsEnumSchema,
} from '@/schema/flashcard-form.schema';
import { useFlashcardStoreActions } from '@/stores/flashcard.store';
import { Button } from '@/components/Button';

const columnHeper = createColumnHelper<Flashcard>();

const columns: ColumnDef<Flashcard>[] = [
	columnHeper.display({
		id: 'actions',
	}),
	{
		accessorKey: flashcardFieldsEnumSchema.Enum.frontFlash,
		header: flashcardFieldsEnumSchema.Enum.frontFlash,
	},
	{
		accessorKey: flashcardFieldsEnumSchema.Enum.backFlash,
		header: flashcardFieldsEnumSchema.Enum.backFlash,
	},
	{
		accessorKey: flashcardFieldsEnumSchema.Enum.exampleForeign1,
		header: '#1 Foreign',
	},
	{
		accessorKey: flashcardFieldsEnumSchema.Enum.exampleNative1,
		header: '#1 Native',
	},
	{
		accessorKey: flashcardFieldsEnumSchema.Enum.exampleForeign2,
		header: '#2 Foreign',
	},
	{
		accessorKey: flashcardFieldsEnumSchema.Enum.exampleNative2,
		header: '#2 Native',
	},
	{
		accessorKey: flashcardFieldsEnumSchema.Enum.exampleForeign3,
		header: '#3 Foreign',
	},
	{
		accessorKey: flashcardFieldsEnumSchema.Enum.exampleNative3,
		header: '#3 Native',
	},
];

interface Table {
	data: Flashcard[];
}
export const Table = ({ data }: Table) => {
	const { removeRow } = useFlashcardStoreActions();
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="border-2 border-solid border-retrowave-dark_violet p-4">
			<table className="border-input relative w-full table-fixed">
				<thead className="">
					{table.getHeaderGroups().map((headerGroup) => (
						<tr
							key={headerGroup.id}
							className="bg-retrowave-deep_magenta text-white"
						>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									className="overflow-hidden truncate border p-2"
								>
									{flexRender(
										header.column.columnDef.header,
										header.getContext()
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id} className="even:bg-retrowave-dark_violet/40">
							{row.getVisibleCells().map((cell) => (
								<td
									key={cell.id}
									className="overflow-hidden truncate text-ellipsis border p-2 pr-2.5"
								>
									{cell.column.id === 'actions' ? (
										<div className="mx-4">
											<Button
												onClick={() => removeRow(row.original)}
												className="h-full w-full text-base"
											>
												DELETE #{row.index + 1}
											</Button>
										</div>
									) : (
										<>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</>
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
