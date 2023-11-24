interface ButtonProps {
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
	return (
		<button
			className={`bg-cian text-white rounded-buttonRounded py-[10px] px-[30px]`}
		>
			{children}
		</button>
	);
};

export default Button;
