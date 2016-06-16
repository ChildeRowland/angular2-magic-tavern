export class TweetService {
	getTweets() {
		return [
			{
				imageUrl: 'http://lorempixel.com/200/100/food/1',
				title: 'First Tweet adout Foon',
				text: 'Hello from the magic tavern',
				handle: '@arnieneecamp',
				totalFavs: 10,
				isFav: true
			}, {
				imageUrl: 'http://lorempixel.com/200/100/food/2',
				title: 'Co-hosts',
				text: 'Welcome to Chunt and Usidore',
				handle: '@arnieneecamp',
				totalFavs: 11,
				isFav: false
			}, {
				imageUrl: 'http://lorempixel.com/200/100/food/3',
				title: 'Today\'s Show:',
				text: 'Our Guest today is from the swamp of sadness',
				handle: '@arnieneecamp',
				totalFavs: 12,
				isFav: false
			}
		]
	}
}