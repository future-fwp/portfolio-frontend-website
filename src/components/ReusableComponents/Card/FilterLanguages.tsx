
const FilterLanguagesButton = ({
	languages,
	icon,
	onClick,
	isSelected,
}: {
	languages: string;
	icon: any;
	onClick: any;
	isSelected: boolean;
}) => {
	return (
		<button
			onClick={onClick}
			className="cursor-pointer "
		>
			<div
				className={`flex justify-center filtercard md:justify-between items-center ${
					isSelected ? "bg-white text-black" : ""
				}`}
			>
				<div>{languages}</div>
				{icon && <div className="relative ">{icon}</div>}
				{!icon && <img src={icon} />}
			</div>
		</button>
	);
};

export default FilterLanguagesButton;
