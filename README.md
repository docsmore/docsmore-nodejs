# Getting started

![alt text](https://www.docsmore.com/wp-content/uploads/2017/11/docsmore-one-liner.png "Title")


<h3>Create a developer account at docsmore.io and start unleashing the power of Docsmore into your own applications. To make it easier, we have provided client libraries and SDK in several languages for you to get started and hit the ground running in no time.
</h3>
<br><br>
<h4>Note: If you don't see API Setting under top right menu, that means you will need to be a developer account. Please contact support@docsmore.com and a customer service expert will switch your account to developer account. </h4>
<br><br>
<h5>
Just head over to https://docsmore.io and sign up for your 30 days trial.
</h5>

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=DOCSMORE%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=DOCSMORE%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `DOCSMOREAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=DOCSMORE%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=DOCSMORE%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=DOCSMORE%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=DOCSMORE%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  DOCSMORE APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=DOCSMORE%20APIController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [AVAILABLEENDPOINTSController](#availableendpoints_controller)
* [OAUTHTOKENController](#oauthtoken_controller)

## <a name="availableendpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AVAILABLEENDPOINTSController") AVAILABLEENDPOINTSController

### Get singleton instance

The singleton instance of the ``` AVAILABLEENDPOINTSController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AVAILABLEENDPOINTSController;
```

### <a name="create_get_workflow_link_for_flow_track"></a>![Method: ](https://apidocs.io/img/method.png ".AVAILABLEENDPOINTSController.createGetWorkflowLinkForFlowTrack") createGetWorkflowLinkForFlowTrack

> *Tags:*  ``` Skips Authentication ``` 

> In Docsmore space, Flow Track means all the client documents generated using one of the Document Flow. In other words, it is an instance of Document FLow. The other thing to notice here is payload information is remarkably similar to general "Workflow" of a Single Document.
> 
> When you initiate this API call, you are basically setting up a new instance of Workflow and in turn getting workflow link of the starting document in the workflow.


```javascript
function createGetWorkflowLinkForFlowTrack(accept, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accept = 'application/json';
    var contentType = 'application/json';

    controller.createGetWorkflowLinkForFlowTrack(accept, contentType, function(error, response, context) {

    
    });
```



### <a name="get_raw_data_for_a_given_document"></a>![Method: ](https://apidocs.io/img/method.png ".AVAILABLEENDPOINTSController.getRawDataForAGivenDocument") getRawDataForAGivenDocument

> *Tags:*  ``` Skips Authentication ``` 

> This API call gets you underlying raw data of the document. All you need to do is supply Auth token and Document Key as part of the call.
> 
> Document Key can be obtained from "Document Gallery" Page and Clicking on the sub-menu of the desired document.
> 
> As a response object, jsondata and metadata information is passed. Jsondata is basically raw data and metadata is data columns information.


```javascript
function getRawDataForAGivenDocument(authToken, documentKey, accept, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authToken |  ``` Required ```  | TODO: Add a parameter description |
| documentKey |  ``` Required ```  | TODO: Add a parameter description |
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var authToken = 'authToken';
    var documentKey = 'documentKey';
    var accept = 'Accept';
    var contentType = 'Content-Type';

    controller.getRawDataForAGivenDocument(authToken, documentKey, accept, contentType, function(error, response, context) {

    
    });
```



### <a name="get_all_document_flows"></a>![Method: ](https://apidocs.io/img/method.png ".AVAILABLEENDPOINTSController.getAllDocumentFlows") getAllDocumentFlows

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getAllDocumentFlows(accept, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accept = 'application/json';
    var contentType = 'application/json';

    controller.getAllDocumentFlows(accept, contentType, function(error, response, context) {

    
    });
```



### <a name="create_get_workflow_link"></a>![Method: ](https://apidocs.io/img/method.png ".AVAILABLEENDPOINTSController.createGetWorkflowLink") createGetWorkflowLink

> *Tags:*  ``` Skips Authentication ``` 

> This is the most popular use of Docsmore API. From your connected app, you can launch workflow and obtain the unique link for immediate launch or later on. You can also supply data in flat json format that can be used inside the document for pre-fill purpose saving your customer time.
> 
> Please make sure you pay close attention to the requirement for this API call as there are several aspects of it as required parameters.


```javascript
function createGetWorkflowLink(accept, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accept = 'application/json';
    var contentType = 'application/json';

    controller.createGetWorkflowLink(accept, contentType, function(error, response, context) {

    
    });
```



### <a name="fetch_single_document"></a>![Method: ](https://apidocs.io/img/method.png ".AVAILABLEENDPOINTSController.fetchSingleDocument") fetchSingleDocument

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function fetchSingleDocument(id, accept, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';
    var accept = 'Accept';
    var contentType = 'Content-Type';

    controller.fetchSingleDocument(id, accept, contentType, function(error, response, context) {

    
    });
```



### <a name="fetch_all_documents_from_your_team_catalogue"></a>![Method: ](https://apidocs.io/img/method.png ".AVAILABLEENDPOINTSController.fetchAllDocumentsFromYourTeamCatalogue") fetchAllDocumentsFromYourTeamCatalogue

> *Tags:*  ``` Skips Authentication ``` 

> By design, the authenticated user can only view the files that are either created by them or shared with them. Make sure user has at least read permission to view the catalogue.


```javascript
function fetchAllDocumentsFromYourTeamCatalogue(items, page, accept, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| items |  ``` Required ```  | TODO: Add a parameter description |
| page |  ``` Required ```  | TODO: Add a parameter description |
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var items = '{{items}}';
    var page = '{{page}}';
    var accept = 'application/json';
    var contentType = 'application/json';

    controller.fetchAllDocumentsFromYourTeamCatalogue(items, page, accept, contentType, function(error, response, context) {

    
    });
```



### <a name="upload_pdf_document"></a>![Method: ](https://apidocs.io/img/method.png ".AVAILABLEENDPOINTSController.uploadPDFDocument") uploadPDFDocument

> *Tags:*  ``` Skips Authentication ``` 

> Upload a document and have it converted to Docsmore format. 


```javascript
function uploadPDFDocument(doc, title, description, tags, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| doc |  ``` Required ```  | The field is required and expects a PDF file. |
| title |  ``` Required ```  | This field is optional. If not provided, document file name will be used as title |
| description |  ``` Required ```  | This field is optional. |
| tags |  ``` Required ```  | This field is optional. It helps to organize and used in searches. |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    TestHelper.getFilePath('url', function(data) {
        var doc = data;
    var title = 'title';
    var description = 'description';
    var tags = 'tags';
    var contentType = 'Content-Type';

        controller.uploadPDFDocument(doc, title, description, tags, contentType, function(error, response, context) {

        });
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="oauthtoken_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OAUTHTOKENController") OAUTHTOKENController

### Get singleton instance

The singleton instance of the ``` OAUTHTOKENController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OAUTHTOKENController;
```

### <a name="create_get_o_auth_token"></a>![Method: ](https://apidocs.io/img/method.png ".OAUTHTOKENController.createGetOAuthTOKEN") createGetOAuthTOKEN

> *Tags:*  ``` Skips Authentication ``` 

> 
> Obtaining an Auth Token is the first thing in the process. The lifetime of Auth token is configurable in the developer portal depending upon your need. Once auth token is obtained, all the follow up API calls will need to include auth token in the header. FaIlure to do so would result in response with 401 Unauthorized Access.
> 
> Under Your Developer Account - Go to Api Setting and you will screen similar to below.
> <img src="https://www.docsmore.com/wp-content/uploads/2018/02/apikey-screen.png" alt="alt text" title="Title" />
> 
> Make sure you call this in server side code. Exposing apiKey and clientSecret is a not a good idea on front end and can lead up to security vulnerabilities.


```javascript
function createGetOAuthTOKEN(body, accept, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new GetOAuthTOKENRequest({
	"client_id": "[API KEY]",
	"client_secret": "[CLIENT SECRET]"
});
    var accept = 'application/json';
    var contentType = 'application/json';

    controller.createGetOAuthTOKEN(body, accept, contentType, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



