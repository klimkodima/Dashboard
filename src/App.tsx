import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Main from "./components/Main";
import Loader from "./components/Loader";
import store from './store';
import theme from './theme';

const App = () => {

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader/>}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Main />
          </ThemeProvider>,
      </PersistGate>
    </Provider>
  )
};

export default App;