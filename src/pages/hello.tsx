import React from 'react';
import FullScreenContainer from '../components/structure/fullScreenContainer'

const icomers_icon = (
	<svg xmlns="http://www.w3.org/2000/svg" width="400px" height="400px" viewBox="0 0 24 24">
		<path d="M6 23.73l-3-2.122v-14.2l3 1.359v14.963zm2-14.855v15.125l13-1.954v-15.046l-13 1.875zm5.963-7.875c-2.097 0-3.958 2.005-3.962 4.266l-.001 1.683c0 .305.273.54.575.494.244-.037.425-.247.425-.494v-1.681c.003-1.71 1.416-3.268 2.963-3.268.537 0 1.016.195 1.384.564.422.423.654 1.035.653 1.727v1.747c0 .305.273.54.575.494.243-.037.423-.246.423-.492l.002-1.749c.002-1.904-1.32-3.291-3.037-3.291zm-6.39 5.995c.245-.037.427-.247.427-.495v-2.232c.002-1.71 1.416-3.268 2.963-3.268l.162.015c.366-.283.765-.513 1.188-.683-.405-.207-.858-.332-1.35-.332-2.096 0-3.958 2.005-3.962 4.266v2.235c0 .306.272.538.572.494z" />
	</svg>)

export default function Hello() {
	return (
		<FullScreenContainer>
			<main>
				<section>
					<div style={{ textAlign: "center" }}>
						{icomers_icon}
					</div>
					<p className="display-1">Amadis Web Store</p>
					<div className="about-content">
						<span>
							A Frontend Store application with React, redux and nextjs
						</span>
						<span>
							By Brandon Fernandez and Joseph Estevez
						</span>
					</div>
					<p className="display-2">Coming soon</p>
				</section>
			</main>
		</FullScreenContainer>
	)
}