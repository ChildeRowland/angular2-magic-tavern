import { Component } from 'angular2/core';
import { TweetComponent } from './tweet/tweet.component';
import { TweetService } from './tweet/tweet.service';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Welcome to Twatterton</h1>
    	<tweet [tweets]="allTweets">

    	</tweet>
    `
    directives: [ TweetComponent ],
    providers: [ TweetService ]
})

export class AppComponent { 
	allTweets: any[];

	constructor( tweetService: TweetService ) {
		this.allTweets = tweetService.getTweets();
	}

}
