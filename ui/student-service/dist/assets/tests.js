'use strict';

define("student-service/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/student.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/student.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('models/student.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/student.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/students.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/students.js should pass ESLint\n\n1:8 - \'Route\' is defined but never used. (no-unused-vars)\n4:16 - Use `import Route from \'@ember/routing/route\';` instead of using Ember.Route (ember/new-module-imports)\n8:11 - Use `import { inject } from \'@ember/service\';` instead of using Ember.inject.service (ember/new-module-imports)\n14:17 - \'resp\' is assigned a value but never used. (no-unused-vars)\n35:17 - \'resp\' is assigned a value but never used. (no-unused-vars)');
  });
  QUnit.test('serializers/student.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/student.js should pass ESLint\n\n5:9 - Unexpected console statement. (no-console)');
  });
});
define("student-service/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('student-service/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student-service/templates/application.hbs should pass TemplateLint.\n\nstudent-service/templates/application.hbs\n  1:7  error  Incorrect indentation for `\n    h1{\n        text-align: center;\n        color:blueviolet;\n    }\n` beginning at L1:C7. Expected `\n    h1{\n        text-align: center;\n        color:blueviolet;\n    }\n` to be at an indentation of 2 but was found at 4.  block-indentation\n  8:4  error  Incorrect indentation for `<div>` beginning at L8:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  9:8  error  Incorrect indentation for `<h1>` beginning at L9:C8. Expected `<h1>` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:12  error  Incorrect indentation for `\n            Student Service\n        ` beginning at L9:C12. Expected `\n            Student Service\n        ` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
  QUnit.test('student-service/templates/students.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student-service/templates/students.hbs should pass TemplateLint.\n\nstudent-service/templates/students.hbs\n  7:4  error  Incorrect indentation for `<h2>` beginning at L7:C4. Expected `<h2>` to be at an indentation of 2 but was found at 4.  block-indentation\n  8:4  error  Incorrect indentation for `<table>` beginning at L8:C4. Expected `<table>` to be at an indentation of 2 but was found at 4.  block-indentation\n  9:8  error  Incorrect indentation for `<thead>` beginning at L9:C8. Expected `<thead>` to be at an indentation of 6 but was found at 8.  block-indentation\n  17:8  error  Incorrect indentation for `<tbody>` beginning at L17:C8. Expected `<tbody>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:12  error  Incorrect indentation for `<tr>` beginning at L10:C12. Expected `<tr>` to be at an indentation of 10 but was found at 12.  block-indentation\n  11:16  error  Incorrect indentation for `<th>` beginning at L11:C16. Expected `<th>` to be at an indentation of 14 but was found at 16.  block-indentation\n  12:16  error  Incorrect indentation for `<th>` beginning at L12:C16. Expected `<th>` to be at an indentation of 14 but was found at 16.  block-indentation\n  13:16  error  Incorrect indentation for `<th>` beginning at L13:C16. Expected `<th>` to be at an indentation of 14 but was found at 16.  block-indentation\n  14:16  error  Incorrect indentation for `<th>` beginning at L14:C16. Expected `<th>` to be at an indentation of 14 but was found at 16.  block-indentation\n  18:12  error  Incorrect indentation for `{{#each}}` beginning at L18:C12. Expected `{{#each}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  19:12  error  Incorrect indentation for `<tr>` beginning at L19:C12. Expected `<tr>` to be at an indentation of 14 but was found at 12.  block-indentation\n  20:16  error  Incorrect indentation for `<td>` beginning at L20:C16. Expected `<td>` to be at an indentation of 14 but was found at 16.  block-indentation\n  21:16  error  Incorrect indentation for `<td>` beginning at L21:C16. Expected `<td>` to be at an indentation of 14 but was found at 16.  block-indentation\n  22:16  error  Incorrect indentation for `<td>` beginning at L22:C16. Expected `<td>` to be at an indentation of 14 but was found at 16.  block-indentation\n  23:16  error  Incorrect indentation for `<td>` beginning at L23:C16. Expected `<td>` to be at an indentation of 14 but was found at 16.  block-indentation\n  32:4  error  Incorrect indentation for `<h2>` beginning at L32:C4. Expected `<h2>` to be at an indentation of 2 but was found at 4.  block-indentation\n  33:4  error  Incorrect indentation for `<form>` beginning at L33:C4. Expected `<form>` to be at an indentation of 2 but was found at 4.  block-indentation\n  34:8  error  Incorrect indentation for `<div>` beginning at L34:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  40:8  error  Incorrect indentation for `<div>` beginning at L40:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  46:8  error  Incorrect indentation for `<div>` beginning at L46:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  52:8  error  Incorrect indentation for `<div>` beginning at L52:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  58:8  error  Incorrect indentation for `<div>` beginning at L58:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  35:12  error  Incorrect indentation for `<label>` beginning at L35:C12. Expected `<label>` to be at an indentation of 10 but was found at 12.  block-indentation\n  36:12  error  Incorrect indentation for `<div>` beginning at L36:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  37:16  error  Incorrect indentation for `{{input}}` beginning at L37:C16. Expected `{{input}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  41:12  error  Incorrect indentation for `<label>` beginning at L41:C12. Expected `<label>` to be at an indentation of 10 but was found at 12.  block-indentation\n  42:12  error  Incorrect indentation for `<div>` beginning at L42:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  43:16  error  Incorrect indentation for `{{input}}` beginning at L43:C16. Expected `{{input}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  47:12  error  Incorrect indentation for `<label>` beginning at L47:C12. Expected `<label>` to be at an indentation of 10 but was found at 12.  block-indentation\n  48:12  error  Incorrect indentation for `<div>` beginning at L48:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  49:16  error  Incorrect indentation for `{{input}}` beginning at L49:C16. Expected `{{input}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  53:12  error  Incorrect indentation for `<label>` beginning at L53:C12. Expected `<label>` to be at an indentation of 10 but was found at 12.  block-indentation\n  54:12  error  Incorrect indentation for `<div>` beginning at L54:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  55:16  error  Incorrect indentation for `{{textarea}}` beginning at L55:C16. Expected `{{textarea}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  59:12  error  Incorrect indentation for `<div>` beginning at L59:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  60:16  error  Incorrect indentation for `<button>` beginning at L60:C16. Expected `<button>` to be at an indentation of 14 but was found at 16.  block-indentation\n  69:4  error  Incorrect indentation for `<div>` beginning at L69:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  70:8  error  Incorrect indentation for `<div>` beginning at L70:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  71:12  error  Incorrect indentation for `<div>` beginning at L71:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  77:12  error  Incorrect indentation for `<div>` beginning at L77:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  72:16  error  Incorrect indentation for `<h4>` beginning at L72:C16. Expected `<h4>` to be at an indentation of 14 but was found at 16.  block-indentation\n  73:16  error  Incorrect indentation for `<button>` beginning at L73:C16. Expected `<button>` to be at an indentation of 14 but was found at 16.  block-indentation\n  74:20  error  Incorrect indentation for `<span>` beginning at L74:C20. Expected `<span>` to be at an indentation of 18 but was found at 20.  block-indentation\n  78:16  error  Incorrect indentation for `<form>` beginning at L78:C16. Expected `<form>` to be at an indentation of 14 but was found at 16.  block-indentation\n  79:20  error  Incorrect indentation for `<div>` beginning at L79:C20. Expected `<div>` to be at an indentation of 18 but was found at 20.  block-indentation\n  86:20  error  Incorrect indentation for `<div>` beginning at L86:C20. Expected `<div>` to be at an indentation of 18 but was found at 20.  block-indentation\n  93:20  error  Incorrect indentation for `<div>` beginning at L93:C20. Expected `<div>` to be at an indentation of 18 but was found at 20.  block-indentation\n  100:20  error  Incorrect indentation for `<div>` beginning at L100:C20. Expected `<div>` to be at an indentation of 18 but was found at 20.  block-indentation\n  107:20  error  Incorrect indentation for `<div>` beginning at L107:C20. Expected `<div>` to be at an indentation of 18 but was found at 20.  block-indentation\n  80:24  error  Incorrect indentation for `<i>` beginning at L80:C24. Expected `<i>` to be at an indentation of 22 but was found at 24.  block-indentation\n  81:24  error  Incorrect indentation for `{{! <input type="text" id="sid" class="form-control validate"> }}` beginning at L81:C24. Expected `{{! <input type="text" id="sid" class="form-control validate"> }}` to be at an indentation of 22 but was found at 24.  block-indentation\n  82:24  error  Incorrect indentation for `<label>` beginning at L82:C24. Expected `<label>` to be at an indentation of 22 but was found at 24.  block-indentation\n  83:24  error  Incorrect indentation for `{{input}}` beginning at L83:C24. Expected `{{input}}` to be at an indentation of 22 but was found at 24.  block-indentation\n  87:24  error  Incorrect indentation for `<i>` beginning at L87:C24. Expected `<i>` to be at an indentation of 22 but was found at 24.  block-indentation\n  88:24  error  Incorrect indentation for `{{! <input type="text" id="sname" class="form-control validate"> }}` beginning at L88:C24. Expected `{{! <input type="text" id="sname" class="form-control validate"> }}` to be at an indentation of 22 but was found at 24.  block-indentation\n  89:24  error  Incorrect indentation for `<label>` beginning at L89:C24. Expected `<label>` to be at an indentation of 22 but was found at 24.  block-indentation\n  90:24  error  Incorrect indentation for `{{input}}` beginning at L90:C24. Expected `{{input}}` to be at an indentation of 22 but was found at 24.  block-indentation\n  94:24  error  Incorrect indentation for `<i>` beginning at L94:C24. Expected `<i>` to be at an indentation of 22 but was found at 24.  block-indentation\n  95:24  error  Incorrect indentation for `{{! <input type="text" id="sclass" class="form-control validate"> }}` beginning at L95:C24. Expected `{{! <input type="text" id="sclass" class="form-control validate"> }}` to be at an indentation of 22 but was found at 24.  block-indentation\n  96:24  error  Incorrect indentation for `<label>` beginning at L96:C24. Expected `<label>` to be at an indentation of 22 but was found at 24.  block-indentation\n  97:24  error  Incorrect indentation for `{{input}}` beginning at L97:C24. Expected `{{input}}` to be at an indentation of 22 but was found at 24.  block-indentation\n  101:24  error  Incorrect indentation for `<i>` beginning at L101:C24. Expected `<i>` to be at an indentation of 22 but was found at 24.  block-indentation\n  102:24  error  Incorrect indentation for `{{! <input type="text" id="saddress" class="form-control validate"> }}` beginning at L102:C24. Expected `{{! <input type="text" id="saddress" class="form-control validate"> }}` to be at an indentation of 22 but was found at 24.  block-indentation\n  103:24  error  Incorrect indentation for `<label>` beginning at L103:C24. Expected `<label>` to be at an indentation of 22 but was found at 24.  block-indentation\n  104:24  error  Incorrect indentation for `{{textarea}}` beginning at L104:C24. Expected `{{textarea}}` to be at an indentation of 22 but was found at 24.  block-indentation\n  108:24  error  Incorrect indentation for `<button>` beginning at L108:C24. Expected `<button>` to be at an indentation of 22 but was found at 24.  block-indentation\n  116:8  error  Incorrect indentation for `\n    function showdetails(e) {\n        document.getElementById("sid").value = e.cells[0].innerHTML;\n        document.getElementById("sname").value = e.cells[1].innerHTML;\n        document.getElementById("sclass").value = e.cells[2].innerHTML;\n        document.getElementById("saddress").value = e.cells[3].innerHTML;\n    }\n` beginning at L116:C8. Expected `\n    function showdetails(e) {\n        document.getElementById("sid").value = e.cells[0].innerHTML;\n        document.getElementById("sname").value = e.cells[1].innerHTML;\n        document.getElementById("sclass").value = e.cells[2].innerHTML;\n        document.getElementById("saddress").value = e.cells[3].innerHTML;\n    }\n` to be at an indentation of 2 but was found at 4.  block-indentation\n  55:55  error  you must use double quotes in templates  quotes\n');
  });
});
define("student-service/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/student-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/student-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/student-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/student-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/students-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/students-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/student-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/student-test.js should pass ESLint\n\n');
  });
});
define("student-service/tests/test-helper", ["student-service/app", "student-service/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("student-service/tests/unit/adapters/student-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | student', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:student');
      assert.ok(adapter);
    });
  });
});
define("student-service/tests/unit/models/student-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | student', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('student', {});
      assert.ok(model);
    });
  });
});
define("student-service/tests/unit/routes/students-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | students', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:students');
      assert.ok(route);
    });
  });
});
define("student-service/tests/unit/serializers/student-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | student', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('student');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('student', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('student-service/config/environment', [], function() {
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

require('student-service/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
