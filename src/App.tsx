
import { configureStore } from '@reduxjs/toolkit'
import './App.css'
import HomeComponent from './Components/HomeComponent'
import { GlobalContextProvider } from './GlobalContext'
import GlobalSliceReducer from './store';
import { Provider } from 'react-redux';

function App() {

  const store = configureStore({
    reducer: GlobalSliceReducer
  })

  return (
    <>
      <GlobalContextProvider>
        <Provider store={store}>
          <HomeComponent />
        </Provider>
      </GlobalContextProvider>
    </>
  )
}

export default App
