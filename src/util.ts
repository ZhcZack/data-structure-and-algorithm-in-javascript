export const log = console.log.bind(console);

export function assertEqual<T>(message: T, wanted: T) {
    if (message === wanted) {
        log('pass');
    } else {
        log('fail');
    }
}

export function assertNotEqual<T>(message: T, wanted: T) {
    if (message !== wanted) {
        log('pass');
    } else {
        log('fail');
    }
}

function getFunctionName(func: Function): string {
    let literial = func.toString();
    literial = literial.substr('function '.length);
    literial = literial.substr(0, literial.indexOf('('));
    return literial;
}

export function doTest(testFunc: () => void) {
    log('*** test start ***');
    testFunc();
    log('*** test end ***\n');
} 