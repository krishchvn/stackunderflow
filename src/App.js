import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AskQuestion from './components/AskQuestion';
import TopQuestions from './components/TopQuestions';
import DetailQuestion from './components/DetailQuestion';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<div className='App '>
				<div className='flex-col '>
					<div className=''>
						<Navbar />
					</div>

					<Switch>
						<div className=''>
							<Route exact path='/'>
								<TopQuestions />
							</Route>
							<Route path='/question/_id=:id'>
								<DetailQuestion />
							</Route>
							<Route path='/askquestion'>
								<AskQuestion />
							</Route>
						</div>
					</Switch>

					{/* <div className=' w-full'>
						<Footer />
					</div> */}
				</div>
			</div>
		</Router>
	);
}

export default App;
