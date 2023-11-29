interface ButtonProps {
	children: React.ReactNode;
	formSubmit?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	children,
	formSubmit
}: ButtonProps) => {
	return (
		<button
			className={`bg-cian text-white rounded-buttonRounded py-[10px] px-[30px]`}
			onSubmit={formSubmit}
		>
			{children}
		</button>
	);
};

export default Button;
