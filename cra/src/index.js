import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider>
			<Auth0Provider
				domain={process.env.REACT_APP_AUTH_DOMAIN}
				clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
				authorizationParams={{
					redirect_uri: `${window.location.origin}/game`,
					//audience: `${import.meta.env.SERVER_URL}`,
					//scope: 'read:current_user update:current_user_metadata',
				}}
			>
				<App />
			</Auth0Provider>
		</ChakraProvider>
	</React.StrictMode>
)
