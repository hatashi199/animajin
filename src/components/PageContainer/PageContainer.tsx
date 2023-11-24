interface PageContainerProps {
	children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
	children
}: PageContainerProps) => {
	return (
		<div className='flex justify-center bg-grey py-[60px]'>{children}</div>
	);
};

export default PageContainer;
