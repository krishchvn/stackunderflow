import React, { useState, useEffect } from 'react';
import EachQuestion from './EachQuestion';

const TopQuestions = () => {
	const [allQues, setAllQues] = useState(null);
	const [sortWay, setSortWay] = useState('Latest');
	const [sortArr, setSortArr] = useState([]);
	const format1 = 'YYYY-MM-DD HH:mm:ss';

	let sortArr1 = [];

	useEffect(() => {
		fetch('http://localhost:4000/questions')
			.then(res => {
				return res.json();
			})
			.then(data => {
				if (sortWay === 'Latest') {
					data.sort((a, b) => b.sortOrder - a.sortOrder);
				}
				sortArr1 = data;
				setAllQues(data);
			});
	}, []);

	const sortVal = val => {
		if (val === 'Latest') {
			sortArr1.sort((a, b) => b.sortOrder - a.sortOrder);
		} else if (val === 'AZ') {
			sortArr1.sort((a, b) => b.ques - a.ques);
		}
		setSortArr([...allQues]);
	};

	return (
		<div className='mx-56 pt-16 border-l-2'>
			<div className='px-4'>
				<div className='flex justify-between'>
					<div className=''>
						<h1 className='text-3xl text-left mb-6 '>Top Questions</h1>
					</div>
					<div className='flex mb-6'>
						<div className=' transition duration-300 ease-out border-2 border-r-0 border-gray-1050 px-2 py-1 hover:bg-gray-200 '>
							<button onClick={sortVal('Latest')} className='text-gray-1150'>
								Latest
							</button>
						</div>
						<div className=' transition duration-300 ease-out border-2 border-r-0 border-gray-1050 px-2 py-1 hover:bg-gray-200'>
							<button onClick={sortVal('AZ')} className='text-gray-1150'>
								A-Z
							</button>
						</div>
						<div className=' transition duration-300 ease-out border-2 border-r-0 border-gray-1050 px-2 py-1 hover:bg-gray-200 '>
							<button /* onClick={onClickZA} */ className='text-gray-1150'>
								Z-A
							</button>
						</div>
						<div className=' transition duration-300 ease-out border-2 border-gray-1050 px-2 py-1 hover:bg-gray-200 '>
							<button /* onClick={onClickOldest} */ className='text-gray-1150'>
								Oldest
							</button>
						</div>
					</div>
				</div>

				{allQues &&
					allQues
						.filter(allQue => (allQue.ques, allQue.author, allQue.dateTime))
						.map(allQue => (
							<EachQuestion
								id={allQue.id}
								ques={allQue.ques}
								quesBrief={allQue.quesBrief}
								author={allQue.author}
								dateTime={allQue.dateTime}
								hashes={allQue.hashes}
							/>
						))}
			</div>
		</div>
	);
};

export default TopQuestions;
