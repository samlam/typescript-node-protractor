import * as http from 'http';

export class sampleApi {
    apiHost:string = 'some.web.site';
    apiPath:string = 'path/to/method';
    apiPort:number = 80;

    constructor(public requestOptions:http.RequestOptions = null ){
        if (!requestOptions){
            this.requestOptions = {
                host : this.apiHost,
                path : this.apiPath,
                port : this.apiPort
            }
        }
    }

    public sendRequest(requestOptions:http.RequestOptions = null){
        var o = (requestOptions) ? requestOptions : this.requestOptions;
        http.request (o, (res) => {
            
        });
    }
}

