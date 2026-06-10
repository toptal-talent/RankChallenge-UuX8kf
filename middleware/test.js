import { isMainThread } from 'worker_threads';
import manageEngine from './ManageEngine.js';

export default function testMiddleware() {
    manageEngine();
}

if (!isMainThread) {
    testMiddleware();
}
