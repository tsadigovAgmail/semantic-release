function analyzeCommits(){console.log('analyzeCommits');}
// from './hooks/analyzeCommits';
function fail(){console.log('fail');}
// from './hooks/fail';
function prepare(){console.log('prepare');}
// from './hooks/prepare';
function publish(){console.log('publish');}
// from './hooks/publish';
function success(){console.log('success');}
// from './hooks/success';
function verifyConditions(){console.log('verifyConditions');}
// from './hooks/verifyConditions';
function verifyRelease(){console.log('verifyRelease');}
// from './hooks/verifyRelease';

export { verifyConditions, analyzeCommits, verifyRelease, prepare, publish, success, fail };
