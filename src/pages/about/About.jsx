import "./about.css";

function About() {
	return (
		<div className="about-wrapper container-body">
			<h1 className="about-heading">About Board At Home</h1>
			<p className="about-body mb-2">
				Board At Home is Chennai's 1st and largest board gaming venture. With an
				international ambience and world class tabletop games; Board At Home is
				truly one of a kind experience for anyone ranging from families to hobby
				gamers, who want to spend quality time over engaging games and yummy
				food. With more than 1000 games at our outlet we have a huge variety of
				genres to choose from. We also organise board game birthday parties,
				board game sessions for clubs and weddings and meaningfully interactive
				employee engagement sessions for companies of all sizes. Also if you
				would like to buy games check out our webstore for a whole lot of
				amazing games across price/age/complexity ranges! It's time to Unplug,
				Unbox and Unwind.
			</p>
			<img
				src="https://img.grouponcdn.com/seocms/TKh3FrCVe5f1fhSzYujc5/Is_the_Board-Game_Cafe_the_Future_of_Gaming_-1281x679"
				className="img-responsive about-img"
				alt="gaming-center"
			/>
		</div>
	);
}

export { About };
