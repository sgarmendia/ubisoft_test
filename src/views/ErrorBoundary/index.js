import React from 'react'

const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	color: 'red',
};

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	handleReload() {
		location.reload()
		return false
	}

	render() {
	if (this.state.hasError) {

		return (
			<div style={containerStyle}>
				<h1>Something went wrong.</h1>
				<button onClick={() => this.handleReload()}>
                	<i className="fa fa-refresh" />
                	<span style={{ marginLeft: '5px'}} className="reload_text">Refresh</span>
            	</button>
			</div>
		);
	}

	return this.props.children; 
	}
}