/*global angular,document */

'use strict=true';

angular.module('occiApp.services', [])
.factory('tests', [function () {
	var groups = [
		{
			desc: "OCCI Core",
			tests: [
				{ desc: "if support JSON" },
				{ desc: "if support text/occi" }
			]
		},
		{
			desc: "OCCI HTTP",
			tests: [
				{ desc: "if support filtering" },
				{ desc: "if support pagination" }
			]
		}
	];
	return {
		groups: groups
	};
}])

.factory('t', ['$q', function ($q) {
	var run_test = function(test, init, endg) {
		var req =

		return true;
	};

	var run_group = function(group, init, end) {
		if (init) {
			init(group);
		}


		return true;
	};

	var run_groups = function(groups, init_group, end_group, init_test, end_test) {
		if (init_group)  {
			init_group(groups);
		}
		for (var t in groups.tests) {
			run_test(t, init_test, end_test);
		}
		if (end) { end(); }
	};

	return {
		run_test: run_test,
		run_groups: run_groups
	};
}]);
