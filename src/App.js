import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AskQuestion from './components/AskQuestion';
import TopQuestions from './components/TopQuestions';
import DetailQuestion from './components/DetailQuestion';
import Page404 from './components/Page404';

function App() {
	return (
		<Router>
			<div className='App '>
				<Navbar />

				<Switch>
					<Route exact path='/' component={TopQuestions} />
					<Route path='/question/_id=:id' component={DetailQuestion} />
					<Route path='/askquestion' component={AskQuestion} />
					<Route component={Page404} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

/* To view this video in short, goto https://www.loom.com/share/02761ed16c594b5e949cd182a44405ab */
