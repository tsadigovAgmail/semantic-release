import { Context } from "semantic-release";
import commitAnalyzer from '@semantic-release/commit-analyzer';
import SemanticReleaseError from '@semantic-release/error';
//import { errors } from '../helpers';

let errors=[];



//import a from '@semantic-release/commit-analyzer';
const analyzeCommits= async(pluginConfig: any, context: Context):Promise<any>=>{
	try{
		const { logger, branch } = context;
		console.log(commitAnalyzer);
		logger.log('Determining release type of Salesforce package');

		const releaseType = await commitAnalyzer.analyzeCommits(pluginConfig, context);
		console.log(releaseType);
		if (releaseType) {
			if (branch.channel === 'master' || branch.name === 'master') {
			logger.log(`We are creating a ${releaseType} of a Salesforce package`);
			return releaseType;
			} else {
			logger.log(`We are creating a pre-release of a Salesforce package`);
			return 'patch';
			}
		}
	} catch (error) {
	errors.push(error);
	throw new SemanticReleaseError('An error occurred during the release process, aborting');
	}
}
// from './hooks/analyzeCommits';
function fail(){console.log('>>>>>fail');}
// from './hooks/fail';

function prepare(){console.log('>>>>>>prepare');}
// from './hooks/prepare';
function publish(){console.log('>>>>>>publish');}
// from './hooks/publish';
function success(){console.log('>>>>>>>success');}
// from './hooks/success';
function verifyConditions//{console.log('>>>>>>>verifyConditions');}
(pluginConfig: any, context: Context)  {
	try {

	  const { logger } = context;

	  logger.log(context.lastRelease?.gitTag!);
	//logger.log(JSON.stringify(context?.env!));
	  //setLogger(logger);
  console.log('Running release process for SalesForce DX package');
	  logger.log(`Running release process for SalesForce DX package`);
	  logger.log('Verifying conditions...');
  



	  if (process.env.SF_USERNAME) {
		//await logout(process.env.SF_USERNAME);
		//await login(process.env.SF_USERNAME, process.env.SF_LOGIN_URL || 'https://login.salesforce.com');
	  }
  
	  if (process.env.SF_DEVHUB_USERNAME) {
		//await logout(process.env.SF_DEVHUB_USERNAME);
		//await login(process.env.SF_DEVHUB_USERNAME, 'https://login.salesforce.com');
	  }
  
	} catch (error) {
	  //errors.push(error);
	  //throw new SemanticReleaseError('An error occurred during the release process, aborting');
	}
  
  };
// from './hooks/verifyConditions';
function verifyRelease//(){console.log('>>>>>>>verifyRelease');}
(pluginConfig: any, context: any)  {
	try {

	  const { logger } = context;
	  //setLogger(logger);
  console.log('Running release process for SalesForce DX package');
	  logger.log(`Running release process for SalesForce DX package`);
	  logger.log('Verifying conditions...');
  

	  if (process.env.SF_USERNAME) {
		//await logout(process.env.SF_USERNAME);
		//await login(process.env.SF_USERNAME, process.env.SF_LOGIN_URL || 'https://login.salesforce.com');
	  }
  
	  if (process.env.SF_DEVHUB_USERNAME) {
		//await logout(process.env.SF_DEVHUB_USERNAME);
		//await login(process.env.SF_DEVHUB_USERNAME, 'https://login.salesforce.com');
	  }
  
	} catch (error) {
	  //errors.push(error);
	  //throw new SemanticReleaseError('An error occurred during the release process, aborting');
	}
  
  };
// from './hooks/verifyRelease';

export { verifyConditions, analyzeCommits, verifyRelease, prepare, publish, success, fail };
