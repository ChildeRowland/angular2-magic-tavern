export class TweetService {
	getTweets() {
		return [
			{
				image: 'http://lorempixel.com/200/100/food/1',
				title: 'First Tweet adout Foon',
				text: 'Hello from the magic tavern',
				totalFavs: 10,
				isFav: true
			}, {
				image: 'http://lorempixel.com/200/100/food/2',
				title: 'Co-hosts',
				text: 'Welcome to Chunt and Usidore',
				totalFavs: 11,
				isFav: false
			}, {
				image: 'http://lorempixel.com/200/100/food/3',
				title: 'Today\'s Show:',
				text: 'Our Guest today is from the swamp of sadness',
				totalFavs: 12,
				isFav: false
			}
		]
	}
}