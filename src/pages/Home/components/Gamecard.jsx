function GameCard({category: {imgUrl, categoryName}}) {
	return (
		<div className="game-card">
			<img src={imgUrl} className="img-responsive" />
			<div className="game-card-overlay">
				<h3 className="color-white">{categoryName}</h3>
			</div>
		</div>
	);
}

export {GameCard}
