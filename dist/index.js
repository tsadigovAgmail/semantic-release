"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fail = exports.success = exports.publish = exports.prepare = exports.verifyRelease = exports.analyzeCommits = exports.verifyConditions = void 0;
var commit_analyzer_1 = __importDefault(require("@semantic-release/commit-analyzer"));
var error_1 = __importDefault(require("@semantic-release/error"));
//import { errors } from '../helpers';
var errors = [];
//import a from '@semantic-release/commit-analyzer';
function analyzeCommits(pluginConfig, context) {
    try {
        var logger = context.logger, branch = context.branch;
        logger.log('Determining release type of Salesforce package');
        var releaseType = commit_analyzer_1.default.analyzeCommits(pluginConfig, context);
        if (releaseType) {
            if (branch.channel === 'master' || branch.name === 'master') {
                logger.log("We are creating a " + releaseType + " of a Salesforce package");
                return releaseType;
            }
            else {
                logger.log("We are creating a pre-release of a Salesforce package");
                return 'patch';
            }
        }
    }
    catch (error) {
        errors.push(error);
        throw new error_1.default('An error occurred during the release process, aborting');
    }
}
exports.analyzeCommits = analyzeCommits;
// from './hooks/analyzeCommits';
function fail() { console.log('>>>>>fail'); }
exports.fail = fail;
// from './hooks/fail';
function prepare() { console.log('>>>>>>prepare'); }
exports.prepare = prepare;
// from './hooks/prepare';
function publish() { console.log('>>>>>>publish'); }
exports.publish = publish;
// from './hooks/publish';
function success() { console.log('>>>>>>>success'); }
exports.success = success;
// from './hooks/success';
function verifyConditions //{console.log('>>>>>>>verifyConditions');}
(pluginConfig, context) {
    var _a;
    try {
        var logger = context.logger;
        logger.log((_a = context.lastRelease) === null || _a === void 0 ? void 0 : _a.gitTag);
        //logger.log(JSON.stringify(context?.env!));
        //setLogger(logger);
        console.log('Running release process for SalesForce DX package');
        logger.log("Running release process for SalesForce DX package");
        logger.log('Verifying conditions...');
        if (process.env.SF_USERNAME) {
            //await logout(process.env.SF_USERNAME);
            //await login(process.env.SF_USERNAME, process.env.SF_LOGIN_URL || 'https://login.salesforce.com');
        }
        if (process.env.SF_DEVHUB_USERNAME) {
            //await logout(process.env.SF_DEVHUB_USERNAME);
            //await login(process.env.SF_DEVHUB_USERNAME, 'https://login.salesforce.com');
        }
    }
    catch (error) {
        //errors.push(error);
        //throw new SemanticReleaseError('An error occurred during the release process, aborting');
    }
}
exports.verifyConditions = verifyConditions;
;
// from './hooks/verifyConditions';
function verifyRelease //(){console.log('>>>>>>>verifyRelease');}
(pluginConfig, context) {
    try {
        var logger = context.logger;
        //setLogger(logger);
        console.log('Running release process for SalesForce DX package');
        logger.log("Running release process for SalesForce DX package");
        logger.log('Verifying conditions...');
        if (process.env.SF_USERNAME) {
            //await logout(process.env.SF_USERNAME);
            //await login(process.env.SF_USERNAME, process.env.SF_LOGIN_URL || 'https://login.salesforce.com');
        }
        if (process.env.SF_DEVHUB_USERNAME) {
            //await logout(process.env.SF_DEVHUB_USERNAME);
            //await login(process.env.SF_DEVHUB_USERNAME, 'https://login.salesforce.com');
        }
    }
    catch (error) {
        //errors.push(error);
        //throw new SemanticReleaseError('An error occurred during the release process, aborting');
    }
}
exports.verifyRelease = verifyRelease;
;
//# sourceMappingURL=index.js.map