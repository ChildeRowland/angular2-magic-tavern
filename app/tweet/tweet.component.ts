import { Component, Input } from 'angular2/core';
import { FavoriteComponent } from './../favorite/favorite.component';

@Component ({
	selector: 'tweet',
	template: `
		<div class="media">
			<a class="media-left" href="#">
				<img class="media-object" 
					 [src]="data.imageUrl" 
					 alt="Generic placeholder image">
			</a>
		  	<div class="media-body">
		  		<h4 class="media-heading">{{ data.title }}</h4>
		  		<p>{{ data.handle }}</p>
				<span>{{ data.text }}</span>

				<span class="favs">
					<favorite [isFav]="data.isFav"
							  [totalFavs]="data.totalFavs"
							  (changed)="changeFav($event)">
					</favorite>
				</span>
			</div>
		</div>
	`,
	styles: [`
		.media {
			margin-top: 25px;
		}
		.favs {
			float: right;
			margin-right: 20px;
		}
	`],
	directives: [ FavoriteComponent ]
})

export class TweetComponent {
	@Input() data;

	changeFav($event) {
		console.log($event);
	}
}
