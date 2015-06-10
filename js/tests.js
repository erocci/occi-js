/* global chai:false */
/* global mocha:false */
/* global describe:false */
/* global it:false */

/* jshint expr: true */ // Tolerate jshint W030 for .to.exist

'use strict=true';

var expect = chai.expect;
var assert = chai.assert;

var testSuite = (function () {

    mocha.setup('bdd'); // Mandatory to use describe, etc.

    /*
     * Keep request parameters from inputs.
     */
    var DEFAULT_REQUEST = {
        method: 'get',
        accept: 'text/plain'
    };

    var req;

    /*
     * Concatenation of string to produce valid URL.
     * ie, do not double the slash.
     */
    var concatUrl = function (path1, path2) {
        if (!path1) {
            return path2 || '';
        }
        if (path1[path1.length - 1] !== '/') {
            return path1 + '/' + path2 || '';
        }
        return path1 + path2 || '';
    };

    var requestFor = function (path, onCompleteCallback) {

        var returnCode, response = {};

        $.ajax({
            url: concatUrl(req.url, path),
            type: req.method,
            headers: {
                accept: req.accept
            }
        })
        .done(function(data, textStatus, jqXHR) {
            // console.log(headers('server'));
            response.server = jqXHR.getResponseHeader('server');
            response.body = data;
            returnCode = jqXHR.status;
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            returnCode = jqXHR.status;
        })
        .always(function() {
            onCompleteCallback(returnCode, response);
        });

    };


    /**
     * This method describes all tests. Call it once!
     * @method init
     */
    var init = function () {

        describe('Occi Server', function () {
            it('should be available', function () {
                expect(req.url, 'No server address given!').to.exist;
            });
        });

        describe('Available OCCI server', function () {

            this.timeout(5000); // 5 secondes of timeout for each async test

            it('Should return version 1.2', function (done) {
                requestFor('-/', function (err, data) {
                    expect(err, 'server should return 200 OK').to.equal(200);
                    expect(data.server, 'server should return its version.').to.exist;
                    if (data && data.server) {
                        var srv = data.server.split(' ');
                        expect(srv, 'server value in header to contains 2 words.').to.have.length(2);
                    }
                    // expect(data.version).to.equal(1.2);
                    done();
                });
            });
        });

    };

    /**
     * Run the test suite ;-)
     * @method run
     * @param  {Object} request The request url/method/accept values from user inputs.
     */
    var run = function (request) {
        req = $.extend(DEFAULT_REQUEST, request);
        mocha.run();
    };


    return {
        init: init,
        run: run
    };
}());
