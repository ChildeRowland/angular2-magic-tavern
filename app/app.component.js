System.register(['angular2/core', './tweet/tweet.component'], function(exports_1, context_1) {
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
    var core_1, tweet_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.allTweets = [
                        {
                            image: 'http://lorempixel.com/200/100/food/1',
                            title: 'First Tweet adout Foon',
                            text: 'Hello from the magic tavern'
                        }, {
                            image: 'http://lorempixel.com/200/100/food/2',
                            title: 'Co-hosts',
                            text: 'Welcome to Chunt and Usidore'
                        }, {
                            image: 'http://lorempixel.com/200/100/food/3',
                            title: 'Today\'s Show:',
                            text: 'Our Guest today is from the swamp of sadness'
                        }
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<h1>Welcome to Twatterton</h1>\n    \t<tweet [tweets]=\"allTweets\">\n\n    \t</tweet>\n    ",
                        directives: [tweet_component_1.TweetComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
// component tweet for one tweet
// media object on bootstrap
// lorempixel.com ?1 
//# sourceMappingURL=app.component.js.map