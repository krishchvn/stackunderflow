import React from 'react';
import { useParams } from 'react-router-dom';

const DetailQuestion = () => {
	const { id } = useParams();
	return (
		<div className='block'>
			<p>Question in detail - {id}</p>
		</div>
	);
};

export default DetailQuestion;
