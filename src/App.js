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

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />

				<Switch>
					<Route exact path='/'>
						<TopQuestions />
					</Route>
					<Route exact path='/askquestion'>
						<AskQuestion />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
