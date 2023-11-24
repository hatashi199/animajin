import logo from '../../assets/logo.png';

const Header: React.FC = () => {
	return (
		<header className='flex justify-center bg-black'>
			<div className='max-w-webCenter w-full py-[15px]'>
				<a href='#'>
					<img
						src={logo}
						alt='logo'
					/>
				</a>
			</div>
		</header>
	);
};

export default Header;
