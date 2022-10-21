import { useSalaryContext } from "~SalaryStuff/SalaryContext/SalaryContextProvider";
import { MonthWithDetails } from "~shared/sharedTypes";
import { classNames } from "~shared/sharedUtils/classNames";

type Props = {
	monthWithDetails: MonthWithDetails;
};

export const Weekdays = ({ monthWithDetails }: Props) => {
	const { getDaysWithDetailsOfMonth, toggleDaysWithDetailsSelected } = useSalaryContext();

	return (
		<div className="grid grid-cols-8 gap-1 ">
			{["", "M", "T", "W", "T", "F", "S", "S"].map((weekDay, index) => (
				<span
					key={`${monthWithDetails.formattedDate}-${weekDay}-${index}`}
					className={classNames(
						"flex items-center justify-center rounded-md border-[1px] border-gray-700 bg-gray-800 p-2",
						index === 0 && "border-gray-600 bg-gray-700"
					)}
					onClick={() => {
						if (index !== 0) return;

						const daysWithDetailsOfMonth = getDaysWithDetailsOfMonth(
							monthWithDetails.formattedDate
						);

						toggleDaysWithDetailsSelected(daysWithDetailsOfMonth);
					}}
				>
					{weekDay}
				</span>
			))}
		</div>
	);
};