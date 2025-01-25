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
			onClick={onClick} // onClick is attached to the entire button
			className={`group group-hover:cursor-pointer flex border p-4 rounded-lg gap-2 justify-center filtercard items-center ${
				isSelected ? "bg-white text-black" : ""
			}`}
		>
			{icon && (
				<div className="relative gap-2 md:gap-4 flex justify-center items-center cursor-pointer">
					{languages}
					{icon}
				</div>
			)}
		</button>
	);
};

export default FilterLanguagesButton;
