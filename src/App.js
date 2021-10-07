import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import AskQuestion from './components/AskQuestion';
import TopQuestions from './components/TopQuestions';
import DetailQuestion from './components/DetailQuestion';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />

				<Switch>
					<Route exact path='/'>
						<TopQuestions />
					</Route>
					<Route path='/question/_id=:id'>
						<DetailQuestion />
					</Route>
					<Route path='/askquestion'>
						<AskQuestion />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
