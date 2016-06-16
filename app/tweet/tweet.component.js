System.register(['angular2/core', './../favorite/favorite.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, favorite_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent() {
                    this.tweets = [
                        {
                            image: 'location of the image',
                            title: 'title of the tweet',
                            text: 'body of the tweet'
                        }
                    ];
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "tweets", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n\t\t<ul>\n\t\t\t<div class=\"media\">\n\t\t\t\t<li *ngFor=\"#tweet of tweets\">\n\t\t\t\t\t<a class=\"media-left\" href=\"#\">\n\t\t\t\t\t\t<img class=\"media-object\" \n\t\t\t\t\t\t\t [src]=\"tweet.image\" \n\t\t\t\t\t\t\t alt=\"Generic placeholder image\">\n\t\t\t\t\t</a>\n\t\t\t\t  \t<div class=\"media-body\">\n\t\t\t\t  \t\t<h4 class=\"media-heading\">{{ tweet.title }}</h4>\n\t\t\t\t\t\t<span>{{ tweet.text }}</span>\n\n\t\t\t\t\t\t<span class=\"favs\">\n\t\t\t\t\t\t\t<favorite></favorite>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</div>\n\t\t</ul>\n\t",
                        styles: ["\n\t\t.favs {\n\t\t\tfloat: right;\n\t\t\tmargin: 20px;\n\t\t}\n\t"],
                        directives: [favorite_component_1.FavoriteComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
// *ngFor="#course of courses" 
//# sourceMappingURL=tweet.component.js.map