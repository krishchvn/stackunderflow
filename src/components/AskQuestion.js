import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AskQuestion = () => {
	const [ques, setQues] = useState('');
	const [quesBrief, setQuesBrief] = useState('');
	const [hashes, setHashes] = useState('');
	const [author, setAuthor] = useState('');
	//	const [id, setId] = useState('');
	const [dateTime, setDateTime] = useState('');
	let sortOrder = 23;

	const format1 = 'YYYY-MM-DD HH:mm:ss';

	const history = useHistory();
	useEffect(() => {
		setDateTime(moment(Date.now()).format(format1));
	}, []);

	const onSubmit = e => {
		e.preventDefault();

		//setDate(newDate);
		//	setId(Math.random().toString(36).slice(2));
		//	console.log(ques, quesBrief, code, author, date);

		axios
			.post('http://localhost:4000/questions', {
				ques: ques,
				quesBrief: quesBrief,
				hashes: hashes,
				author: author,
				dateTime: dateTime,
				sortOrder: ++sortOrder,
			})
			.then(res => {
				console.log(res.data);
				history.push('/topquestions');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className=' p-16 bg-gray-1000'>
			<div>
				<h1 className='text-3xl text-center'>Ask a Public Question</h1>
			</div>
			<form className='m-8 '>
				<div className='m-10  '>
					<input
						className=' border border-gray-300 border-4 shadow text-sm  text-left py-3 px-4 focus:outline-none md:w-4/5  '
						type='text'
						placeholder='Write Question in short (Be specific and ask to the point)'
						id='quesInShort'
						value={ques}
						onInput={e => setQues(e.target.value)}
						required
					/>
				</div>
				<div className='m-10'>
					<textarea
						className=' border border-gray-300 border-4 shadow  md:w-4/5 text-left text-sm pt-4 pb-24 px-4 focus:outline-none'
						type='text'
						placeholder='Write Question in brief (Include all the information you think is relevant, including code)'
						id='quesInBrief'
						value={quesBrief}
						onInput={e => setQuesBrief(e.target.value)}
					/>
				</div>
				<div className='m-10'>
					<textarea
						className=' border border-gray-300 border-4 shadow md:w-4/5 text-left text-sm pt-4 pb-10  px-4 focus:outline-none'
						type='text'
						placeholder='Set all hashtags you think are appropriate.'
						id='code'
						value={hashes}
						/* onChange={e =>
							e.target.value.includes('#') ? true : '#' + e.target.value
						} */
						onInput={e => setHashes(e.target.value)}
						required
					/>
				</div>
				<div className='flex justify-center'>
					<div className='mr-10 mt-4 w-1/2  '>
						<input
							className='text-sm border border-gray-300 border-4 shadow text-left py-3 px-4 focus:outline-none float-right '
							type='text'
							placeholder='Asked By'
							id='askedBy'
							value={author}
							onInput={e => setAuthor(e.target.value)}
							required
						/>
					</div>
					<div className='mt-4 w-1/2'>
						<button
							className=' w-40 text-md px-4 ml-2 mt py-3 rounded bg-orange-500 text-white font-bold hover:bg-gray-1100 hover:text-orange-500  lg:mt-0 transition ease-out duration-500'
							onClick={onSubmit}
						>
							Post Question
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AskQuestion;
