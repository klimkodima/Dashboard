import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';
import theme from './theme';

import Main from "./components/Main";

const App = () => {

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Main />
          </ThemeProvider>,
      </PersistGate>
    </Provider>
  )
};

export default App;