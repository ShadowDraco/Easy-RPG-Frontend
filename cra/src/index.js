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
				domain='dev-iaagx3vzh22w84ou.us.auth0.com'
				clientId='Ad59Ar27j64zPw2jD6FMPLzlWw2z7bFR'
				authorizationParams={{
					redirect_uri: `https://easy-rpg.netlify.app/game`,
					//audience: `${import.meta.env.SERVER_URL}`,
					//scope: 'read:current_user update:current_user_metadata',
				}}
			>
				<App />
			</Auth0Provider>
		</ChakraProvider>
	</React.StrictMode>
)
