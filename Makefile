REPORTER=spec
ISTANBUL=./node_modules/.bin/istanbul
MOCHA=./node_modules/.bin/_mocha

test: hint mocha

test-coveralls: hint mocha coveralls

mocha:
	$(ISTANBUL) cover $(MOCHA) \
		--report lcovonly -- \
		--reporter $(REPORTER) \
		--bail \
		test/commands/*.js test/commands/browse/*.js


hint:
	@./node_modules/.bin/jshint lib bin

coveralls:
	cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage

populate:
	node ./tool/populate

.PHONY: test test-watch
