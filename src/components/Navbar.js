import React from 'react';

function Navbar() {
	const menuBtn = document.getElementById('menuBtn');
	const menu = document.getElementById('menu');

	const handleClick = () => {
		if (menu.style.display === 'none') {
			menu.style.display = 'block';
		} else {
			menu.style.display = 'none';
		}
	};

	return (
		<nav class='flex items-center justify-between flex-wrap bg-orange-500 py-4 lg:px-12 shadow border-solid border-t-2 border-orange-200'>
			<div class='flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0'>
				<div class='flex items-center flex-shrink-0 text-white mr-16'>
					<span class='font-semibold text-xl font-sans tracking-tight'>
						STACKunderFlow
					</span>
				</div>
				<div class='block lg:hidden ' id='menu' onClick={handleClick}>
					{/* menu svg */}
					<button
						id='menuBtn'
						class='flex items-center px-3 py-2 border-2 rounded text-white border-white focus:outline-none'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4'
							fill='none'
							viewBox='0 0 24 20'
							stroke='white'
							outline='none'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</button>
				</div>
			</div>

			<div
				id='menu'
				class=' w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8'
			>
				{/* search svg */}
				<div class='relative mx-20 top-0 text-white lg:block lg:w-3/5 lg:-mt-4'>
					<input
						class=' bg-orange-200 h-10 w-full  pl-2 pr-8 rounded-lg placeholder-white text-sm focus:outline-none sm: mt-4'
						type='search'
						name='search'
						placeholder='Search a Question'
					/>
					<button type='submit' class='absolute right-0 top-0 mt-3 mr-2'>
						<svg
							class='text-white h-4 w-4 fill-current  sm: mt-4'
							xmlns='http://www.w3.org/2000/svg'
							version='1.1'
							id='Capa_1'
							x='0px'
							y='0px'
							viewBox='0 0 56.966 56.966'
							style={{ enableBackground: 'new 0 0 56.966 56.966' }}
							/* 	xml:space='preserve' */
							width='512px'
							height='512px'
						>
							<path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
						</svg>
					</button>
				</div>
				<div class='lg:absolute lg:top -0 lg:right-0 flex text-center justify-center lg:mr-4	 '>
					<a
						href='#'
						class='block text-md px-4 py-2 rounded text-white ml-2 font-bold hover:text-orange-500 mt-4 hover:bg-white lg:mt-0 transition ease-out duration-500'
					>
						Ask a Question
					</a>
					<a
						href='#'
						class='block text-md px-4 ml-2 py-2 rounded text-white font-bold hover:bg-white hover:text-orange-500 mt-4 lg:mt-0 transition ease-out duration-500'
					>
						Top Questions
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
