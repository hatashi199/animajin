import Button from '../Button/Button';

const SignInBlock: React.FC = () => {
	return (
		<div className='flex flex-col gap-[60px] items-center p-[40px] rounded-boxRounded bg-white'>
			<h2>Sign in</h2>
			<form className='flex flex-col gap-[25px] items-center'>
				<input
					type='email'
					placeholder='Email'
					className='w-full bg-input rounded-boxRounded leading-[40px] px-[15px]'
				/>
				<input
					type='password'
					placeholder='Password'
					className='w-full bg-input rounded-boxRounded leading-[40px] px-[15px]'
				/>
				<Button>Sign In</Button>
			</form>
		</div>
	);
};

export default SignInBlock;
