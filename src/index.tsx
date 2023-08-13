import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from '@mui/material';
import theme from 'app/mui-theme';

render(
    <ThemeProvider theme={ theme }>
        <StoreProvider>
            <BrowserRouter>
                <ErrorBoundary>
                    <App/>
                </ErrorBoundary>
            </BrowserRouter>
        </StoreProvider>
    </ThemeProvider>,
    document.getElementById( 'root' )
);
