import * as angular from 'angular';
import template from './template.html'

export default angular.module('app', [])
    .component('hero', new class implements angular.IComponentOptions {
        public template: string;
        public controller: angular.Injectable<angular.IControllerConstructor>;

        constructor() {
            this.template = template
            this.controller = class implements angular.IComponentController {
                private hello: string;

                constructor(private $http: angular.IHttpService) {
                    this.hello = "Hello World"
                }
            }
        }
    })
