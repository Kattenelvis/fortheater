import React from 'react'
import Names from './Components/Names'
import Graph from './Components/Graph'
import styled from 'styled-components'
import Graphs from './Components/Graphs'

function App() {
	const App = styled.div`
		display: flex;
		justify-content: space-around;
	`

	return (
		<App>
			{/* <Graphs /> */}
			{/* <Names names={['Emil', 'Någon', 'Person1']} /> */}
			<Graphs />
		</App>
	)
}

export default App
