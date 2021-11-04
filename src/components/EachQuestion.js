import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const EachQuestion = ({
	id,
	ques,
	quesBrief,
	author,
	dateTime,
	hashes,
	code,
	handleDelete,
}) => {
	var lettersAllowed = /^[0-9A-Za-z#]+$/;

	return (
		<div className='  py-5 px-5 pb-16 mb-2 bg-gray-1100 border border-2 rounded-lg shadow-md'>
			<Link to={`/question/_id=${id}`} className='hover:no-underline'>
				<div className='pb-2'>
					<p className='text-blue-10 hover:text-blue-1000 text-md md:text-md cursor-pointer'>
						{ques}
					</p>
				</div>
			</Link>
			<div className='float-right'>
				<IconButton>
					<DeleteOutlineIcon color='primary' onClick={() => handleDelete(id)} />
				</IconButton>
			</div>

			<div className='text-sm md:text-md' key={id}>
				<div className='flex flex-row float-left'>
					{hashes.split(' ').map(hash =>
						hash.match(lettersAllowed) ? (
							hash[0] === '#' ? (
								<div className='bg-blue-5 rounded-md m-1 py-1 px-2 hover:bg-blue-50'>
									<span className='text-blue-40 hover:text-blue-10 '>
										{hash}
									</span>
								</div>
							) : (
								<div className='bg-blue-5 rounded-md m-1 py-1 px-2 hover:bg-blue-50'>
									<span className='text-blue-40 hover:text-blue-10 '>
										{'#' + hash}
									</span>
								</div>
							)
						) : (
							<div></div>
						)
					)}
				</div>
				<div className='flex float-left sm:float-right'>
					<div className='bg-gray-100 py-2 px-4 rounded-full transform transition duration-300 hover:scale-105'>
						<span className='text-gray-400 hover:text-gray-700' key={id}>
							{author}
						</span>
					</div>
					<div className='  bg-gray-100 py-2 px-4 rounded-full transform transition duration-300 hover:scale-105'>
						<span className='text-gray-400 hover:text-gray-700' key={id}>
							<ReactTimeAgo
								date={dateTime}
								locale='en-US'
								timeStyle='round-minute'
							/>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EachQuestion;
