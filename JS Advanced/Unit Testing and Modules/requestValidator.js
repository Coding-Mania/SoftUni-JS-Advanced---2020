function solve(object) {
    const methods = ["GET", "POST", "DELETE", "CONNECT"];
    const uriPattern = /^(\*|[a-z\d\.]+)$/gim;
    const versionPattern = /HTTP\/0.9|HTTP\/1.0|HTTP\/1.1|HTTP\/2.0/gm;
    const messagePattern = /^[^<>\\&'"]*$/gim;

    if (!methods.includes(object.method) || !object.hasOwnProperty('method')) {
        throwError('Method');
    } else if (!uriPattern.exec(object.uri) || !object.hasOwnProperty('uri')) {
        throwError('URI');
    } else if (!versionPattern.exec(object.version) || !object.hasOwnProperty('version')) {
        throwError('Version');
    } else if (!messagePattern.exec(object.message) || !object.hasOwnProperty('message')) {
        throwError('Message');
    }

    return object;

    function throwError(type) {
        throw new Error(`Invalid request header: Invalid ${type}`);
    }
}
