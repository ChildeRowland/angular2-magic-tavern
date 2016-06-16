System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var FavoriteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavoriteComponent = (function () {
                function FavoriteComponent() {
                    this.totalFavs = 0;
                    this.isFav = false;
                    this.changed = new core_1.EventEmitter();
                }
                FavoriteComponent.prototype.markFav = function () {
                    this.isFav = !this.isFav;
                    this.totalFavs += this.isFav ? 1 : -1;
                    this.changed.emit({ 'Favorite changed': this.isFav });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "totalFavs", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "isFav", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "changed", void 0);
                FavoriteComponent = __decorate([
                    core_1.Component({
                        selector: 'favorite',
                        template: "\n\t\t<span class=\"glyphicon glyphicon-heart\"\n\t\t\t  [class.favored]=\"isFav\"\n\t\t\t  (click)=\"markFav()\"></span>\n\t\t<span>{{ totalFavs }}</span>\n\t",
                        styles: ["\n\t\t.glyphicon-heart {\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.favored {\n\t\t\tcolor: deeppink;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoriteComponent);
                return FavoriteComponent;
            }());
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    }
});
//# sourceMappingURL=favorite.component.js.map