import React, { useState, useEffect, useContext } from 'react';
import EachQuestion from './EachQuestion';
import { SearchContext } from '../context/SearchContext';

const TopQuestions = () => {
	const [allQues, setAllQues] = useState(null);
	const [sortWay, setSortWay] = useState('Latest');
	const [loading, setLoading] = useState(true);
	//const [sortArr, setSortArr] = useState([]);
	//const format1 = 'YYYY-MM-DD HH:mm:ss';
	const [activeLatest, setActiveLatest] = useState(true);
	const [activeOldest, setActiveOldest] = useState(false);
	const [activeAZ, setActiveAZ] = useState(false);
	const [activeZA, setActiveZA] = useState(false);
	const [filterHash, setFilterHash] = useState('');
	const [noResult, setNoResult] = useState(true);
	const [term] = useContext(SearchContext);

	useEffect(() => {
		setTimeout(() => {
			fetch('http://localhost:4000/questions')
				.then(res => {
					return res.json();
				})
				.then(data => {
					if (sortWay === 'Latest') {
						data.sort((a, b) => b.sortOrder - a.sortOrder);
						//setSortWay(null);
					}
					setAllQues(data);
					setLoading(false);

					console.log('allQues');
				});
		}, 300);
	}, [filterHash]);

	const sortVal = val => {
		let sortArr1 = [...allQues];

		//	console.log(sortArr1, 'sortArr1');
		/* Trying to display loader while sorting change buttons */

		if (val === 'Latest') {
			setSortWay('Latest');
			sortArr1 && sortArr1.sort((a, b) => b.sortOrder - a.sortOrder);
			setAllQues(sortArr1);
			setActiveLatest(true);
			setActiveAZ(false);
			setActiveOldest(false);
			setActiveZA(false);
		} else if (val === 'AZ') {
			setSortWay('AZ');
			sortArr1 &&
				sortArr1.sort(function (a, b) {
					a = a.ques?.toLowerCase();
					b = b.ques?.toLowerCase();

					return a < b ? -1 : a > b ? 1 : 0;
				});
			setAllQues(sortArr1);
			setActiveAZ(true);
			setActiveLatest(false);
			setActiveZA(false);
			setActiveOldest(false);
		} else if (val === 'ZA') {
			setSortWay('ZA');
			sortArr1 &&
				sortArr1.sort(function (a, b) {
					a = a.ques?.toLowerCase();
					b = b.ques?.toLowerCase();

					return a > b ? -1 : a > b ? 1 : 0;
				});
			setAllQues(sortArr1);
			setActiveZA(true);
			setActiveOldest(false);
			setActiveAZ(false);
			setActiveLatest(false);
		} else if (val === 'Oldest') {
			setSortWay('Oldest');
			sortArr1 && sortArr1.sort((a, b) => a.sortOrder - b.sortOrder);
			setAllQues(sortArr1);
			setActiveOldest(true);
			setActiveAZ(false);
			setActiveLatest(false);
			setActiveZA(false);
		}
		//console.log(allQues, 'allQues1');
	};

	const handleDelete = id => {
		let newQuestions = allQues.filter(que => que.id !== id);
		/* axios
			.delete(`http://localhost:3000/questions/${id}`)
			.then(res => {
				console.log(res.data);
				setAllQues(res.data);
			})
			.catch(err => {
				console.log(err);
			}); */

		setAllQues(newQuestions);
	};

	const onFilterHandler = e => {
		e.preventDefault();
		setFilterHash(e.target.value);
		//console.log(e.target.value);
	};

	const onSubmitFilterHandler = e => e.preventDefault();

	return (
		<div className='w-full lg:w-5/6 lg:float-right border-l-2 p-2 pt-16 '>
			<div className='px-4 w-full lg:w-3/4'>
				<div className='flex-col lg:flex lg:flex-row justify-between'>
					<div className=''>
						<h1 className='text-3xl text-left mb-6 '>Top Questions</h1>
					</div>
					<div className='mt-1'>
						<form onSubmit={onSubmitFilterHandler} className=''>
							<input
								type='text'
								placeholder='Filter by Hash'
								className='outline-none px-2 h-8 w-3/4 lg:w-auto border-2  border-gray-1050 text-gray-1150'
								value={filterHash}
								onChange={onFilterHandler}
							/>
						</form>
					</div>
					<div className=' flex mb-6 mt-2 lg:mt-1'>
						<div
							className={
								' transition duration-300 ease-out border-2 border-r-0 border-gray-1050 px-2 py-1 hover:bg-gray-200' +
								(activeLatest ? ' bg-gray-200' : '')
							}
						>
							<button
								onClick={() => {
									sortVal('Latest');
								}}
								className='text-gray-1150'
							>
								Latest
							</button>
						</div>
						<div
							className={
								' transition duration-300 ease-out border-2 border-r-0 border-gray-1050 px-2 py-1 hover:bg-gray-200' +
								(activeAZ ? ' bg-gray-200' : '')
							}
						>
							<button
								onClick={() => {
									sortVal('AZ');
								}}
								className='text-gray-1150'
							>
								A-Z
							</button>
						</div>
						<div
							className={
								' transition duration-300 ease-out border-2 border-r-0 border-gray-1050 px-2 py-1 hover:bg-gray-200' +
								(activeZA ? ' bg-gray-200' : '')
							}
						>
							<button
								onClick={() => {
									sortVal('ZA');
								}}
								//	onClick={onSort}
								className='text-gray-1150'
							>
								Z-A
							</button>
						</div>
						<div
							className={
								' transition duration-300 ease-out border-2 border-r-1 border-gray-1050 px-2 py-1 hover:bg-gray-200' +
								(activeOldest ? ' bg-gray-200' : '')
							}
						>
							<button
								onClick={() => {
									sortVal('Oldest');
								}}
								className='text-gray-1150'
							>
								Oldest
							</button>
						</div>
					</div>
				</div>

				{allQues && allQues.length > 0
					? allQues
							.filter(
								allQue =>
									(allQue.ques, allQue.author, allQue.dateTime) &&
									(filterHash === '' ||
									allQue.hashes.toLowerCase().includes(filterHash.toLowerCase())
										? allQue
										: '') &&
									(term === '' ||
										(allQues &&
										allQue.ques?.toLowerCase().includes(term.toLowerCase())
											? allQue
											: ''))
							)
							.map(allQue => (
								<EachQuestion
									id={allQue.id}
									ques={allQue.ques}
									quesBrief={allQue.quesBrief}
									author={allQue.author}
									dateTime={allQue.dateTime}
									hashes={allQue.hashes}
									handleDelete={handleDelete}
									code={allQue.code}
								/>
							))
					: loading && (
							<div className='border-gray-400 border-t border-4 rounded-full w-10 h-10 animate-spin absolute top-3/4 md:top-1/2 left-1/2'></div>
					  )}
				{/* {!loading && noResult && !allQues.length ? (
					<div className=''>No results</div>
				) : (
					''
				)} */}
			</div>
		</div>
	);
};

export default TopQuestions;
