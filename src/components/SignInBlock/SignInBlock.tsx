import Button from '../Button/Button';
import Input from '../Input/Input';

const SignInBlock: React.FC = () => {
	return (
		<div className='flex flex-col gap-[60px] items-center p-[40px] rounded-boxRounded bg-white'>
			<h2>Sign in</h2>
			<form className='flex flex-col gap-[25px] items-center'>
				<Input
					type='email'
					placeholder='Email'
					className='w-full bg-input rounded-boxRounded leading-[40px] px-[15px]'
				/>
				<Input
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
