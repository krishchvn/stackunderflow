import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import Avatar from 'react-avatar';
import { useHistory } from 'react-router-dom';

const DetailQuestion = () => {
	const [question, setQuestion] = useState(null);
	const { id } = useParams();
	var lettersAllowed = /^[0-9A-Za-z#]+$/;
	const history = useHistory();

	const [loading, setLoading] = useState(true);

	const abortCont = new AbortController();

	//console.log(id, 'id');

	useEffect(() => {
		setTimeout(() => {
			fetch('http://localhost:4000/questions/' + id, {
				signal: abortCont.signal,
			})
				.then(res => {
					return res.json();
				})
				.then(data => {
					setQuestion(data);
				})
				.catch(err => {
					history.push('/page404');
					//console.log(err);
				});

			return () => abortCont.abort();
			//console.log(question);
		}, 400);
	}, []);

	return (
		<div className=''>
			{question ? (
				<div
					className='w-full lg:w-5/6 float-right border-l-2 px-6 pt-10  '
					key={id}
				>
					<div className='w-full lg:w-5/6'>
						<div className=''>
							<div className='border-b-2'>
								<span className='text-2.5xl leading-7 font-normal'>
									{question.ques}
								</span>

								<div className='my-2'>
									<span className='text-gray-500 text-sm font-normal'>
										Asked{' '}
									</span>
									<span className='text-sm font-normal'>
										<ReactTimeAgo
											date={question.dateTime}
											locale='en-US'
											timeStyle='round-minute'
										/>
									</span>
								</div>
							</div>
						</div>
						<div className=''>
							<div className='px-2 py-4  mt-10'>
								<span className='text-sm pl-2'>{question.quesBrief}</span>
							</div>
							{question.code && (
								<div className='bg-gray-100 px-2 py-4  mt-4'>
									<span className='text-sm pl-2'>{question.code}</span>
								</div>
							)}
						</div>

						<div className='mt-2'>
							<div className='flex float-left'>
								{question.hashes.split(' ').map(hash =>
									hash.match(lettersAllowed) ? (
										hash[0] === '#' ? (
											<div className='bg-blue-5 rounded-md m-1 py-1 px-2 hover:bg-blue-50'>
												<span className='text-blue-40 hover:text-blue-10 text-sm '>
													{hash}
												</span>
											</div>
										) : (
											<div className='bg-blue-5 rounded-md m-1 py-1 px-2 hover:bg-blue-50'>
												<span className='text-blue-40 hover:text-blue-10 text-sm'>
													{'#' + hash}
												</span>
											</div>
										)
									) : (
										<div></div>
									)
								)}
							</div>
						</div>
						<div className=' float-right'>
							<div className='flex-col   bg-blue-50 pl-2 pr-16 py-2   mt-16  '>
								<div className='text-xs text-gray-500'>
									<span className=''>asked </span>
									<span className=' '>
										<ReactTimeAgo
											date={question.dateTime}
											locale='en-US'
											timeStyle='round-minute'
										/>
									</span>
								</div>
								<div className='flex '>
									<div className='mt-1 mr-2'>
										<Avatar name={question.author} size='30' />
									</div>
									<div className=''>
										<span className='text-sm text-blue-40'>
											{question.author}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				loading && (
					<div className='border-gray-400 border-t border-4 rounded-full w-10 h-10 animate-spin absolute top-3/4 md:top-1/2 left-1/2'></div>
				)
			)}
		</div>
	);
};

export default DetailQuestion;
