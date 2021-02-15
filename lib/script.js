'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//import jsdom from "jsdom";

// Type.fit API info
var url = 'https://type.fit/api/quotes';

// Page elements
//const label = jsdom.window.document.querySelector('#label');
//const submit = jsdom.window.document.querySelector('#button');


// Add AJAX function here:
var getQuotes = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, jsonResponse;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return fetch(url, { cache: 'no-cache' });

                    case 3:
                        response = _context.sent;

                        if (!response.ok) {
                            _context.next = 11;
                            break;
                        }

                        console.log('Response from API: ', response);
                        _context.next = 8;
                        return response.json();

                    case 8:
                        jsonResponse = _context.sent;

                        console.log('JsonResponse: ', jsonResponse);
                        return _context.abrupt('return', jsonResponse);

                    case 11:
                        throw new Error("Request to 'https://type.fit/api/quotes' has failed!");

                    case 14:
                        _context.prev = 14;
                        _context.t0 = _context['catch'](0);

                        console.log('Error: ', _context.t0);

                    case 17:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 14]]);
    }));

    return function getQuotes() {
        return _ref.apply(this, arguments);
    };
}();

var chooseRandomQuote = function chooseRandomQuote(jsonResponse) {
    var randomIndex = Math.floor(Math.random() * jsonResponse.length);
    return [jsonResponse[randomIndex].text, jsonResponse[randomIndex].author];
};

var renderQuote = function renderQuote(randomQuote) {
    console.log('"' + randomQuote[0] + '"');
    console.log('by ' + randomQuote[1]);
    //const labelContent = `<h4> ${randomQuote[0]} </h4>
    //                      <label> <strong> ${randomQuote[1]}  </strong> </label>`
    //label.append(labelContent);
};

getQuotes().then(chooseRandomQuote).then(renderQuote);

//console.log('hello');
//getQuotes();