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
    assert.ok(true, 'routes/students.js should pass ESLint\n\n');
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
    assert.ok(false, 'student-service/templates/application.hbs should pass TemplateLint.\n\nstudent-service/templates/application.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<h1>` beginning at L3:C8. Expected `<h1>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:12  error  Incorrect indentation for `<em>` beginning at L4:C12. Expected `<em>` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
  QUnit.test('student-service/templates/students.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student-service/templates/students.hbs should pass TemplateLint.\n\nstudent-service/templates/students.hbs\n  3:4  error  Incorrect indentation for `<tr>` beginning at L3:C4. Expected `<tr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  9:4  error  Incorrect indentation for `{{#each}}` beginning at L9:C4. Expected `{{#each}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `<th>` beginning at L4:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:8  error  Incorrect indentation for `<th>` beginning at L5:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:8  error  Incorrect indentation for `<th>` beginning at L6:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:8  error  Incorrect indentation for `<th>` beginning at L7:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:4  error  Incorrect indentation for `<tr>` beginning at L10:C4. Expected `<tr>` to be at an indentation of 6 but was found at 4.  block-indentation\n  11:8  error  Incorrect indentation for `<td>` beginning at L11:C8. Expected `<td>` to be at an indentation of 6 but was found at 8.  block-indentation\n  12:8  error  Incorrect indentation for `<td>` beginning at L12:C8. Expected `<td>` to be at an indentation of 6 but was found at 8.  block-indentation\n  13:8  error  Incorrect indentation for `<td>` beginning at L13:C8. Expected `<td>` to be at an indentation of 6 but was found at 8.  block-indentation\n  14:8  error  Incorrect indentation for `<td>` beginning at L14:C8. Expected `<td>` to be at an indentation of 6 but was found at 8.  block-indentation\n  2:0  error  Tables must have a table group (thead, tbody or tfoot).  table-groups\n');
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
