import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component ({
	selector: 'favorite',
	template: `
		<span class="glyphicon glyphicon-heart"
			  [class.favored]="isFav"
			  (click)="markFav()"></span>
		<span>{{ totalFavs }}</span>
	`,
	styles: [`
		.glyphicon-heart {
			cursor: pointer;
		}
		.favored {
			color: deeppink;
		}
	`]
})

export class FavoriteComponent {
	@Input() totalFavs = 0;
	@Input() isFav = false;
	@Output() changed = new EventEmitter();

	markFav() {
		this.isFav = !this.isFav;
		this.totalFavs += this.isFav ? 1 : -1;
		this.changed.emit({ 'Favorite changed': this.isFav });
	}
}