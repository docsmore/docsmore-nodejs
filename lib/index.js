/**
  * @module DOCSMOREAPILib
  *
  * ![alt text](https://www.docsmore.com/wp-content/uploads/2017/11/docsmore-one-liner.png "Title")
  * <h3>Create a developer account at docsmore.io and start unleashing the power of Docsmore into
  * your own applications. To make it easier, we have provided client libraries and SDK in several
  * languages for you to get started and hit the ground running in no time. </h3> <br><br> <h4>Note:
  * If you don't see API Setting under top right menu, that means you will need to be a developer
  * account. Please contact support@docsmore.com and a customer service expert will switch your
  * account to developer account. </h4> <br><br> <h5> Just head over to https://docsmore.io and
  * sign up for your 30 days trial. </h5>
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const AVAILABLEENDPOINTSController = require('./Controllers/AVAILABLEENDPOINTSController');
const OAUTHTOKENController = require('./Controllers/OAUTHTOKENController');
const GetOAuthTOKENRequest = require('./Models/GetOAuthTOKENRequest');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of DOCSMOREAPILib
    Configuration,
    Environments,
    // controllers of DOCSMOREAPILib
    AVAILABLEENDPOINTSController,
    OAUTHTOKENController,
    // models of DOCSMOREAPILib
    GetOAuthTOKENRequest,
    // exceptions of DOCSMOREAPILib
    APIException,
};

module.exports = initializer;
