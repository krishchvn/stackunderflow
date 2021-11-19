import { Link, useHistory } from 'react-router-dom';

const Page404 = () => {
	const history = useHistory();

	const onClickHandler = e => {
		e.preventDefault();
		history.goBack();
	};

	return (
		<div className='  mt-56 text-center'>
			<div className=''>
				<img
					src='https://www.pinclipart.com/picdir/big/354-3546887_oops-this-page-doesnt-exist-mainio-vire-clipart.png'
					alt=''
					className='w-auto h-32 mx-auto'
				/>
			</div>
			<div className='mt-2'>
				<div className=''>
					<span className=''>Sorry, this page doesn't exist.</span>
				</div>
				<div className=''>
					<p className='text-indigo-600 mr-2 hover:text-blue-800'>
						<Link to='/'>Go To Homepage</Link>
					</p>
					<span
						className='text-indigo-600 cursor-pointer hover:text-blue-800'
						onClick={onClickHandler}
					>
						Go To Previous page
					</span>
				</div>
			</div>
		</div>
	);
};

export default Page404;
