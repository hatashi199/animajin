import Button from '../Button/Button';

const SignUpBlock: React.FC = () => {
	return (
		<div className='flex flex-col gap-[60px] items-center p-[40px] rounded-boxRounded bg-white'>
			<h2>Sign up to Animajin</h2>
			<form className='flex flex-col gap-[25px] items-center'>
				<input
					type='email'
					placeholder='Email'
					className='w-full bg-input rounded-boxRounded leading-[40px] px-[15px]'
				/>
				<input
					type='text'
					placeholder='Username'
					className='w-full bg-input rounded-boxRounded leading-[40px] px-[15px]'
				/>
				<input
					type='password'
					placeholder='Password'
					className='w-full bg-input rounded-boxRounded leading-[40px] px-[15px]'
				/>
				<input
					type='password'
					placeholder='Confirm Password'
					className='w-full bg-input rounded-boxRounded leading-[40px] px-[15px]'
				/>
				<label className='flex gap-[10px] items-center'>
					<input
						type='checkbox'
						id='checkbox'
						name='checkbox'
						className='w-[15px] h-[15px] outline-red-500 bg-grey'
					/>
					<span>You agree to our terms of service</span>
				</label>
				<Button>Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpBlock;
