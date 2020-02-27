var axios = require('axios');
var APIService = /** @class */ (function () {
    function APIService() {
        this._url = 'https://dog.ceo/api/breeds/list/all';
        this._method = 'GET';
        this._headers = [];
    }
    Object.defineProperty(APIService.prototype, "headers", {
        // headers
        get: function () {
            return this._headers;
        },
        enumerable: true,
        configurable: true
    });
    APIService.prototype.resetHeaders = function () {
        this._headers = [];
    };
    APIService.prototype.setHeaders = function (headers) {
        for (var i in headers) {
            if (headers[i].hasOwnProperty("Key") &&
                headers[i].hasOwnProperty("Value")) {
                this._headers.push([headers[i].key, headers[i].value]);
            }
        }
        return this;
    };
    // method
    APIService.prototype.setMethod = function (newMethod) {
        this._method = newMethod;
        return this;
    };
    APIService.prototype.request = function (body) {
        return {
            headers: this._headers,
            method: this._method,
            body: JSON.stringify(body),
        };
    };
    APIService.prototype.retrieveDogs = function () {
        return axios({
            method: this._method,
            url: this._url,
            headers: this._headers
        }).then(function (response) { return response.data.message; });
    };
    return APIService;
}());
var api = new APIService();
api.setMethod('GET');
api.setHeaders([{
        key: 'Accept',
        value: 'application/json'
    }]);
api.retrieveDogs().then(function (data) { return console.log(data); });
