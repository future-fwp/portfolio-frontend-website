
const Circle = ({ addlayout }: { addlayout: string }) => {
	return <div className={`bg-[#23F7AB] w-40 h-40 absolute rounded-full blur-3xl opacity-30 ${addlayout}`}></div>;
};

export default Circle;
