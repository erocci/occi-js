bower=$(shell which bower || echo ./node_modules/bower/bin/bower)

all: $(bower)
	$(bower) update

clean:
	-rm -rf bower_components

distclean: clean
	-rm -rf node_modules

$(bower):
	@if which npm > /dev/null; then \
	  echo "INSTALL bower"; \
	  npm install bower; \
	else \
	  echo "MISSING npm"; \
	fi

.PHONY: all clean distclean
