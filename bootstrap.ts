import app from './app'
import * as angular from 'angular';

angular.element(document).ready(() => {
    angular.bootstrap(document, [app.name])
})