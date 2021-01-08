"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fail = exports.success = exports.publish = exports.prepare = exports.verifyRelease = exports.analyzeCommits = exports.verifyConditions = void 0;
function analyzeCommits() { console.log('analyzeCommits'); }
exports.analyzeCommits = analyzeCommits;
// from './hooks/analyzeCommits';
function fail() { console.log('fail'); }
exports.fail = fail;
// from './hooks/fail';
function prepare() { console.log('prepare'); }
exports.prepare = prepare;
// from './hooks/prepare';
function publish() { console.log('publish'); }
exports.publish = publish;
// from './hooks/publish';
function success() { console.log('success'); }
exports.success = success;
// from './hooks/success';
function verifyConditions() { console.log('verifyConditions'); }
exports.verifyConditions = verifyConditions;
// from './hooks/verifyConditions';
function verifyRelease() { console.log('verifyRelease'); }
exports.verifyRelease = verifyRelease;
//# sourceMappingURL=index.js.map