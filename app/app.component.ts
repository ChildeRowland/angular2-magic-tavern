import { Component } from 'angular2/core';
import { TweetComponent } from './tweet/tweet.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Welcome to Twatterton</h1>
    	<tweet [tweets]="allTweets">

    	</tweet>
    `
    directives: [ TweetComponent ]
})

export class AppComponent { 
	allTweets = [
		{
			image: 'http://lorempixel.com/200/100/food/1'
			title: 'First Tweet adout Foon',
			text: 'Hello from the magic tavern'
		}, {
			image: 'http://lorempixel.com/200/100/food/2'
			title: 'Co-hosts',
			text: 'Welcome to Chunt and Usidore'
		}, {
			image: 'http://lorempixel.com/200/100/food/3'
			title: 'Today\'s Show:',
			text: 'Our Guest today is from the swamp of sadness'
		}
	]
}

// component tweet for one tweet
// media object on bootstrap
// lorempixel.com ?1