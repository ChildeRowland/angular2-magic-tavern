import { Component, Input } from 'angular2/core';
import { FavoriteComponent } from './../favorite/favorite.component';

@Component ({
	selector: 'tweet',
	template: `
		<ul>
			<div class="media">
				<li *ngFor="#tweet of tweets">
					<a class="media-left" href="#">
						<img class="media-object" 
							 [src]="tweet.image" 
							 alt="Generic placeholder image">
					</a>
				  	<div class="media-body">
				  		<h4 class="media-heading">{{ tweet.title }}</h4>
						<span>{{ tweet.text }}</span>

						<span class="favs">
							<favorite [isFav]="tweet.isFav"
									  [totalFavs]="tweet.totalFavs"
									  (changed)="changeFav($event)">
							</favorite>
						</span>
					</div>
				</li>
			</div>
		</ul>
	`,
	styles: [`
		.favs {
			float: right;
			margin-right: 20px;
		}
	`],
	directives: [ FavoriteComponent ]
})

export class TweetComponent {
	@Input() tweets = [
		{
			image: 'location of the image',
			title: 'title of the tweet',
			text: 'body of the tweet',
			totalFavs: 0,
			isFav: false
		}
	]

	changeFav($event) {
		console.log($event);
	}
}
