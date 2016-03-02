/**
 * render a bootstrap styled panel component
 * that can be toggled on click
 *
 * @returns {{restrict: string, templateUrl: string, controller: string, bindToController: boolean}}
 * @constructor
 */
function PanelWidgetDirective() {
    return {
        restrict: 'E',
        templateUrl: 'utils/directives/panel-widget/panel-widget.tmpl.html',
        controller: PanelWidgetController
    }
}

/**
 * controller for the panelWidget directive.
 * toggle visibility of the panel without registering
 * a watcher on the scope
 *
 */

function PanelWidgetLink (scope, element) {

    element.find('.panel-heading')
      .on('click', function () {
          element.find('.panel-body').toggle();
      })
}

class PanelWidgetController {

    constructor($element) {

        $element.find('.panel-heading')
          .on('click', function () {
              $element.find('.panel-body').toggle();
          })
    }
}


export default PanelWidgetDirective;


