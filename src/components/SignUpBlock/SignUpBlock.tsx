import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { handleSignUp } from './handleSignUp';

const SignUpBlock: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const handleSubmit = async () => {
		try {
			const userData = await handleSignUp({ email, username, password });
			console.log(userData);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='flex flex-col gap-[60px] items-center p-[40px] rounded-boxRounded bg-white'>
			<h2 onClick={handleSubmit}>Sign up to Animajin</h2>
			<form className='flex flex-col gap-[25px] items-center'>
				<Input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email'
					className='w-full bg-input rounded-boxRounded leading-[40px] px-[15px]'
				/>
				<Input
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder='Username'
					className='w-full bg-input rounded-boxRounded leading-[40px] px-[15px]'
				/>
				<Input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Password'
					className='w-full bg-input rounded-boxRounded leading-[40px] px-[15px]'
				/>
				<Input
					type='password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					placeholder='Confirm Password'
					className='w-full bg-input rounded-boxRounded leading-[40px] px-[15px]'
				/>
				<label className='flex gap-[10px] items-center'>
					<Input
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
