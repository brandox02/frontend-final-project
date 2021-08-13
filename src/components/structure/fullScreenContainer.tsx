export default function FullScreenContainer(props: any) {	
	return <div className="screen-container">
		<div className={'container'}>
			{props.children}
		</div>
	</div>
}