import React, { useState, useEffect } from 'react';
import ReactTimeAgo from 'react-time-ago';

const TopQuestions = () => {
	const [allQues, setAllQues] = useState(null);
	var lettersAllowed = /^[0-9A-Za-z#]+$/;

	useEffect(() => {
		fetch('http://localhost:4000/questions')
			.then(res => {
				return res.json();
			})
			.then(data => {
				setAllQues(data);
				console.log(allQues, 'All Questions');
			});
	}, []);

	return (
		<div className='mx-56 pt-16 border-l-2'>
			<div className='px-4'>
				<div className='flex justify-between'>
					<div className=''>
						<h1 className='text-3xl text-left mb-6 '>Top Questions</h1>
					</div>
					<div className='flex'>
						<div className='border-2 border-gray-1150'>
							<button>A-Z</button>
						</div>
						<div className=''>
							<button>Z-A</button>
						</div>
						<div className=''>
							<button>Latest</button>
						</div>
					</div>
				</div>
				{allQues &&
					allQues
						.filter(allQue => (allQue.ques, allQue.author, allQue.date))
						.map(allQue => (
							<div className='py-5 px-5 pb-16 mb-2 bg-gray-1100 border border-2 rounded-lg shadow-md'>
								<div className='pb-2'>
									<p
										className='text-blue-10 hover:text-blue-1000 text-lg'
										key={allQue.id}
									>
										{allQue.ques}
									</p>
								</div>

								<div className=''>
									<div className='flex float-left'>
										{allQue.hashes.split(' ').map(hash =>
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
									<div className='flex float-right'>
										<div className='bg-gray-100 py-2 px-4 rounded-full transform transition duration-300 hover:scale-105'>
											<span
												className='text-gray-400 hover:text-gray-700'
												key={allQue.id}
											>
												{allQue.author}
											</span>
										</div>
										<div className='  bg-gray-100 py-2 px-4 rounded-full transform transition duration-300 hover:scale-105'>
											<span
												className='text-gray-400 hover:text-gray-700'
												key={allQue.id}
											>
												<ReactTimeAgo
													date={allQue.date}
													locale='en-US'
													timeStyle='round-minute'
												/>
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
			</div>
		</div>
	);
};

export default TopQuestions;
