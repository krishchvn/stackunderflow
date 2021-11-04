import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AskQuestion = () => {
	const [ques, setQues] = useState('');
	const [quesBrief, setQuesBrief] = useState('');
	const [hashes, setHashes] = useState('');
	const [author, setAuthor] = useState('');
	const [code, setCode] = useState('');
	//	const [id, setId] = useState('');
	const [dateTime, setDateTime] = useState('');
	let sortOrder = 35;

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
				code: code,
				//date: Date().toISOString().slice(0, 10),
			})
			.then(res => {
				console.log(res.data);
				history.push('/');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className=' p-16   '>
			<div>
				<h1 className='text-3xl text-center'>Ask a Public Question</h1>
			</div>
			<div className='w-full md:w-5/6'>
				<form className='mt-8 w-full  md:w-5/6 md:float-right'>
					<div className='mt-10  '>
						<label htmlFor='' className='text-sm m-1 block'>
							Write Question in short
						</label>
						<input
							className=' border border-gray-300 border-4 shadow text-sm  text-left py-3 px-4 focus:outline-none w-full focus:bg-gray-1000 focus:text-black '
							type='text'
							placeholder='(Be specific and ask to the point)'
							id='quesInShort'
							value={ques}
							onInput={e => setQues(e.target.value)}
							required
						/>
					</div>
					<div className='mt-10'>
						<label htmlFor='' className='text-sm m-1 block'>
							Write Question in brief
						</label>
						<textarea
							className=' border border-gray-300 border-4 shadow  text-left text-sm pt-4 pb-24 px-4 whitespace-pre-wrap focus:outline-none w-full focus:bg-gray-1000 focus:text-black'
							type='text'
							placeholder='(Include all the information you think is relevant)'
							id='quesInBrief'
							value={quesBrief}
							onInput={e => setQuesBrief(e.target.value)}
						/>
					</div>
					<div className='mt-10 whitespace-pre-wrap'>
						<label htmlFor='' className='text-sm m-1 block'>
							Include code you think a issue lies in
						</label>
						<textarea
							className=' border border-gray-300 border-4 shadow   text-left text-sm pt-4 pb-24 px-4 whitespace-pre-wrap focus:outline-none w-full focus:bg-gray-1000 focus:text-black'
							type='text'
							placeholder='(Name each file before the code)'
							id='code'
							value={code}
							onInput={e => setCode(e.target.value)}
						/>
					</div>
					<div className='mt-10'>
						<label htmlFor='' className='text-sm m-1 block'>
							Set all hashtags you think are appropriate.
						</label>
						<textarea
							className=' border border-gray-300 border-4 shadow  text-left text-sm pt-4 pb-10  px-4 focus:outline-none w-full focus:bg-gray-1000 focus:text-black'
							type='text'
							placeholder='(Begin with alphabet, give space between each word)'
							id='code'
							value={hashes}
							onInput={e => setHashes(e.target.value)}
							required
						/>
					</div>
					<div className='flex justify-center mb-24'>
						<div className='mr-10 mt-4   '>
							<input
								className='text-sm border border-gray-300 border-4 shadow text-left py-3 px-4 focus:outline-none  focus:bg-gray-1000 focus:text-black'
								type='text'
								placeholder='Asked By'
								id='askedBy'
								value={author}
								onInput={e => setAuthor(e.target.value)}
								required
							/>
						</div>
						<div className='mt-4 '>
							<button
								className=' w-40 text-md px-4 ml-2 mt py-3 rounded bg-orange-500 text-white font-bold hover:bg-gray-600 hover:text-white  lg:mt-0 transition ease-out duration-500'
								onClick={onSubmit}
							>
								Post Question
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AskQuestion;
