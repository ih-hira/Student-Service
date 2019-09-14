'use strict';



;define("student-service/adapters/student", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTAdapter.extend({
    host: 'http://localhost:8080',

    pathToType() {
      return 'students';
    }

  });

  _exports.default = _default;
});
;define("student-service/app", ["exports", "student-service/resolver", "ember-load-initializers", "student-service/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("student-service/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("student-service/helpers/app-version", ["exports", "student-service/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("student-service/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("student-service/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("student-service/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "student-service/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("student-service/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("student-service/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("student-service/initializers/export-application-global", ["exports", "student-service/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("student-service/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("student-service/models/student", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({
    //id: DS.attr('string'),
    name: _emberData.default.attr('string'),
    sclass: _emberData.default.attr('string'),
    address: _emberData.default.attr('string')
  });

  _exports.default = _default;
});
;define("student-service/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("student-service/router", ["exports", "student-service/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('students');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("student-service/routes/students", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    // model() {
    //     return this.store.findAll('student');
    // },
    ajax: Ember.inject.service(),

    model() {
      return this.get('ajax').request('http://localhost:8080/students');
    },

    actions: {
      addnew() {
        var resp = this.get('ajax').request('http://localhost:8080/students', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          data: JSON.stringify({
            "id": this.controller.get('model.id'),
            "name": this.controller.get('model.name'),
            "sclass": this.controller.get('model.sclass'),
            "address": this.controller.get('model.address')
          })
        });
        this.refresh();
      },

      updateinfo() {
        var id = document.getElementById("sid").value;
        var url = 'http://localhost:8080/students/' + id;
        var resp = this.get('ajax').request(url, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'PATCH',
          data: JSON.stringify({
            "id": document.getElementById("sid").value,
            "name": document.getElementById("sname").value,
            "sclass": document.getElementById("sclass").value,
            "address": document.getElementById("saddress").value
          })
        });
      }

    }
  });

  _exports.default = _default;
});
;define("student-service/serializers/student", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      console.log(payload);
      payload = {
        students: payload
      };
      return this._super(store, primaryModelClass, payload, id, requestType);
    }

  });

  _exports.default = _default;
});
;define("student-service/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("student-service/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "GEII8mac",
    "block": "{\"symbols\":[],\"statements\":[[7,\"style\",true],[8],[0,\"\\n    h1{\\n        text-align: center;\\n        color:blueviolet;\\n    }\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"menu\"],[8],[0,\"\\n        \"],[7,\"h1\",true],[8],[0,\"\\n            Student Service\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "student-service/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("student-service/templates/students", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ZP/MZbBa",
    "block": "{\"symbols\":[\"student\"],\"statements\":[[7,\"link\",true],[10,\"rel\",\"stylesheet\"],[10,\"href\",\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\"],[8],[9],[0,\"\\n\"],[7,\"script\",true],[10,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"],[8],[9],[0,\"\\n\"],[7,\"script\",true],[10,\"src\",\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"],[8],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n    \"],[7,\"h2\",true],[8],[0,\"Student list\"],[9],[0,\"\\n    \"],[7,\"table\",true],[10,\"class\",\"table table-striped\"],[10,\"id\",\"studentlist\"],[8],[0,\"\\n        \"],[7,\"thead\",true],[8],[0,\"\\n            \"],[7,\"tr\",true],[8],[0,\"\\n                \"],[7,\"th\",true],[8],[0,\"Id\"],[9],[0,\"\\n                \"],[7,\"th\",true],[8],[0,\"Name\"],[9],[0,\"\\n                \"],[7,\"th\",true],[8],[0,\"Class\"],[9],[0,\"\\n                \"],[7,\"th\",true],[8],[0,\"Address\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"tbody\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\"]]],null,{\"statements\":[[0,\"            \"],[7,\"tr\",true],[10,\"onClick\",\"showdetails(this)\"],[10,\"data-target\",\"#modalLoginForm\"],[10,\"data-toggle\",\"modal\"],[8],[0,\"\\n                \"],[7,\"td\",true],[8],[1,[23,1,[\"id\"]],false],[9],[0,\"\\n                \"],[7,\"td\",true],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n                \"],[7,\"td\",true],[8],[1,[23,1,[\"sclass\"]],false],[9],[0,\"\\n                \"],[7,\"td\",true],[8],[1,[23,1,[\"address\"]],false],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n    \"],[7,\"h2\",true],[8],[0,\"Add New Student\"],[9],[0,\"\\n    \"],[7,\"form\",true],[10,\"class\",\"form-horizontal\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"form-group\"],[8],[0,\"\\n            \"],[7,\"label\",true],[10,\"for\",\"id\"],[10,\"class\",\"col-md-2 control-label\"],[8],[0,\"ID\"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-md-5\"],[8],[0,\"\\n                \"],[1,[28,\"input\",null,[[\"value\",\"class\"],[[24,[\"model\",\"id\"]],\"form-control\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"form-group\"],[8],[0,\"\\n            \"],[7,\"label\",true],[10,\"for\",\"name\"],[10,\"class\",\"col-md-2 control-label\"],[8],[0,\"Name\"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-md-5\"],[8],[0,\"\\n                \"],[1,[28,\"input\",null,[[\"value\",\"class\"],[[24,[\"model\",\"name\"]],\"form-control\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"form-group\"],[8],[0,\"\\n            \"],[7,\"label\",true],[10,\"for\",\"class\"],[10,\"class\",\"col-md-2 control-label\"],[8],[0,\"Class\"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-md-5\"],[8],[0,\"\\n                \"],[1,[28,\"input\",null,[[\"value\",\"class\"],[[24,[\"model\",\"sclass\"]],\"form-control\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"form-group\"],[8],[0,\"\\n            \"],[7,\"label\",true],[10,\"for\",\"address\"],[10,\"class\",\" col-md-2 control-label\"],[8],[0,\"Address\"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-md-5\"],[8],[0,\"\\n                \"],[1,[28,\"textarea\",null,[[\"value\",\"class\"],[[24,[\"model\",\"address\"]],\"form-control\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"form-group\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-sm-offset-2 col-sm-10\"],[8],[0,\"\\n                \"],[7,\"button\",false],[12,\"class\",\"btn btn-sm btn-primary\"],[3,\"action\",[[23,0,[]],\"addnew\"]],[8],[0,\"Add\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"modal fade\"],[10,\"id\",\"modalLoginForm\"],[10,\"tabindex\",\"-1\"],[10,\"role\",\"dialog\"],[10,\"aria-labelledby\",\"myModalLabel\"],[10,\"aria-hidden\",\"true\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"modal-dialog\"],[10,\"role\",\"document\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"modal-content\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"modal-header text-center\"],[8],[0,\"\\n                \"],[7,\"h4\",true],[10,\"class\",\"modal-title w-100 font-weight-bold\"],[8],[0,\"Student Details\"],[9],[0,\"\\n                \"],[7,\"button\",true],[10,\"class\",\"close\"],[10,\"data-dismiss\",\"modal\"],[10,\"aria-label\",\"Close\"],[10,\"onClick\",\"document.location.reload(true)\"],[10,\"type\",\"button\"],[8],[0,\"\\n                    \"],[7,\"span\",true],[10,\"aria-hidden\",\"true\"],[8],[0,\"×\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"modal-body mx-3\"],[8],[0,\"\\n                \"],[7,\"form\",true],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"md-form mb-5\"],[8],[0,\"\\n                        \"],[7,\"i\",true],[10,\"class\",\"fas fa-envelope prefix grey-text\"],[8],[9],[0,\"\\n\"],[0,\"                        \"],[7,\"label\",true],[10,\"data-error\",\"wrong\"],[10,\"data-success\",\"right\"],[10,\"for\",\"sid\"],[8],[0,\"ID\"],[9],[0,\"\\n                        \"],[1,[28,\"input\",null,[[\"value\",\"type\",\"id\",\"class\",\"disabled\"],[[24,[\"id\"]],\"text\",\"sid\",\"form-control validate\",\"disabled\"]]],false],[0,\"\\n                    \"],[9],[0,\"\\n\\n                    \"],[7,\"div\",true],[10,\"class\",\"md-form mb-5\"],[8],[0,\"\\n                        \"],[7,\"i\",true],[10,\"class\",\"fas fa-envelope prefix grey-text\"],[8],[9],[0,\"\\n\"],[0,\"                        \"],[7,\"label\",true],[10,\"data-error\",\"wrong\"],[10,\"data-success\",\"right\"],[10,\"for\",\"sname\"],[8],[0,\"Name\"],[9],[0,\"\\n                        \"],[1,[28,\"input\",null,[[\"value\",\"type\",\"id\",\"class\"],[[24,[\"model\",\"name\"]],\"text\",\"sname\",\"form-control validate\"]]],false],[0,\"\\n                    \"],[9],[0,\"\\n\\n                    \"],[7,\"div\",true],[10,\"class\",\"md-form mb-5\"],[8],[0,\"\\n                        \"],[7,\"i\",true],[10,\"class\",\"fas fa-envelope prefix grey-text\"],[8],[9],[0,\"\\n\"],[0,\"                        \"],[7,\"label\",true],[10,\"data-error\",\"wrong\"],[10,\"data-success\",\"right\"],[10,\"for\",\"sclass\"],[8],[0,\"Class\"],[9],[0,\"\\n                        \"],[1,[28,\"input\",null,[[\"value\",\"type\",\"id\",\"class\"],[[24,[\"model\",\"sclass\"]],\"text\",\"sclass\",\"form-control validate\"]]],false],[0,\"\\n                    \"],[9],[0,\"\\n\\n                    \"],[7,\"div\",true],[10,\"class\",\"md-form mb-4\"],[8],[0,\"\\n                        \"],[7,\"i\",true],[10,\"class\",\"fas fa-lock prefix grey-text\"],[8],[9],[0,\"\\n\"],[0,\"                        \"],[7,\"label\",true],[10,\"data-error\",\"wrong\"],[10,\"data-success\",\"right\"],[10,\"for\",\"saddress\"],[8],[0,\"Address\"],[9],[0,\"\\n                        \"],[1,[28,\"textarea\",null,[[\"value\",\"id\",\"class\"],[[24,[\"model\",\"address\"]],\"saddress\",\"form-control validate\"]]],false],[0,\"\\n                    \"],[9],[0,\"\\n\\n                    \"],[7,\"div\",true],[10,\"class\",\"modal-footer d-flex justify-content-center\"],[8],[0,\"\\n                        \"],[7,\"button\",false],[12,\"class\",\"btn btn-default\"],[3,\"action\",[[23,0,[]],\"updateinfo\",[24,[\"id\"]]]],[8],[0,\"Update\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"script\",true],[8],[0,\"\\n    function showdetails(e) {\\n        document.getElementById(\\\"sid\\\").value = e.cells[0].innerHTML;\\n        document.getElementById(\\\"sname\\\").value = e.cells[1].innerHTML;\\n        document.getElementById(\\\"sclass\\\").value = e.cells[2].innerHTML;\\n        document.getElementById(\\\"saddress\\\").value = e.cells[3].innerHTML;\\n    }\\n\"],[9],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "student-service/templates/students.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('student-service/config/environment', [], function() {
  var prefix = 'student-service';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("student-service/app")["default"].create({"name":"student-service","version":"0.0.0+83c21f72"});
          }
        
//# sourceMappingURL=student-service.map
