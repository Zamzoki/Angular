const axios = require('axios')

type KeyValue<T, U> = {
    key: T;
    value: U;
}

type ApiMethod = "GET" | "POST";

class APIService {
    _url: string = 'https://dog.ceo/api/breeds/list/all'
    _method: ApiMethod = 'GET'
    _headers: string[][] = [];

    constructor() {}

    // headers
    get headers (): string[][] {
        return this._headers;
    }
    public resetHeaders (): void {
        this._headers = [];
    }

    public setHeaders(headers: KeyValue<string, string>[]): APIService {
        for(const i in headers) {
            if( headers[i].hasOwnProperty("Key") &&
                headers[i].hasOwnProperty("Value")) {
                this._headers.push([headers[i].key, headers[i].value]);
            }
        }
        return this;
    }

    // method
    public setMethod (newMethod: ApiMethod): APIService {
        this._method = newMethod;
        return this;
    }
  
    public request<T> (body: T): RequestInit {
        return {
           headers: this._headers,
           method: this._method,
           body: JSON.stringify(body),
        }
    }

    retrieveDogs() : Promise<Response> {
        return axios({
            method: this._method,
            url: this._url,
            headers: this._headers
        }).then(response => response.data.message );
    }
}

const api = new APIService()
api.setMethod('GET');
api.setHeaders(
    [{
        key: 'Accept',
        value: 'application/json'
    }]
);



api.retrieveDogs().then(data => {
    console.log(data)
})