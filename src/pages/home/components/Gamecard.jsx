function GameCard({ category: { imgUrl, categoryName } }) {
	return (
		<div className="game-card br-4px">
			<img src={imgUrl} className="img-responsive" alt="category" />
			<div className="game-card-overlay">
				<h3 className="color-white">{categoryName}</h3>
			</div>
		</div>
	);
}

export { GameCard };
