interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
	type: string;
}

const Input: React.FC<InputProps> = ({ type, ...rest }: InputProps) => {
	return (
		<input
			type={type}
			{...rest}
		/>
	);
};

export default Input;
