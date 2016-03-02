import 'expose?faker!faker';
import 'expose?jQuery!jquery';
import 'angular';
import 'angular-bootstrap';
import 'angular-ui-router';
import 'index.css';

// load application module
import Util        from './utils/utils.module';
import Digest      from './digest/digest.module';
import Welcome     from './welcome/welcome.module';
import Compile     from './compile/compile.module';
import PlayGround  from './playground/playground.module';
import Repeater    from './repeater/repeater.module';
import Production  from './production/production.module';

angular.module('main', [
  'ui.router',
  'ui.bootstrap',
  'utils',
  'digest',
  'welcome',
  'compile',
  'playground',
  'repeater',
  'production'
]);

angular.element(document)
  .ready(() => angular.bootstrap(document, ['main']),{strictDi:true});
