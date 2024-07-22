const htmlTemplate = (body) => {
	const { errorType, message, selectRoute } = body;

	return `
			<ul> 
				<li>
					<h3> 
						<strong>Error Type:</strong> 
					</h3>

					${errorType}
				</li>
				<li>
					<h3> 
						<strong>Message:</strong>
					</h3>

					${message}
				 </li>

				${!selectRoute ? `` : `
					<li>
						<h3>
							<strong>Route Selected:</strong>
						</h3>

						${selectRoute}
					</li>
				`}
			</ul>
		`;


}

export default htmlTemplate