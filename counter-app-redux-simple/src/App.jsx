import './App.css'
import CounterCard from './features/counter/CounterCard'
import ReduxProvider from '../../counter-app-redux-toolkit/src/app/ReduxProvider';
import { store } from '../../counter-app-redux-toolkit/src/app/store';

function App() {

  return (
    <>
    <ReduxProvider store={store}>
      <CounterCard></CounterCard>
    </ReduxProvider>

    </>
  )
}

export default App
