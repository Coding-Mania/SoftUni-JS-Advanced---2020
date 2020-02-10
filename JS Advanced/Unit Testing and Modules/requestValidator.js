function solve(object) {
    const methodPattern = /GET|POST|DELETE|CONNECT/gm;
    const uriPattern = /\w*/gm;
    const versionPattern = /HTTP\/0.9|HTTP\/1.0|HTTP\/1.1|HTTP\/2.0/gm;
    const messagePattern = /\d/gm;

    if (!methodPattern.exec(object.method)) {
        throwError('Method');
    } else if (uriPattern) {
        throwError('URI');
    } else if (!versionPattern.exec(object.version)) {
        throwError('Version');
    }else if (!messagePattern.exec(object.message)) {
        throwError('Version');
    }

    return object;

    function throwError(type) {
        throw new Error(`Invalid request header: Invalid ${type}`);
    }
}
