let AWS = require('aws-sdk');
let _auth = require('./Authorizer');
let google = require('googleapis').google;
const storage = google.storage('v1');
exports.handler = function (event, context, callback) {

	storage.objects.copy({
		sourceBucket: "test_sigma_cloud_storage",
		sourceObject: "Object Key 1",
		destinationBucket: "test_sigma_gcp_storage",
		destinationObject: "Object Copy 2"
	})
		.then(response => {
			console.log(response.data);           // successful response
			/*
			response.data = {
				"kind": "storage#object",
				"id": "<destinationBucket>/<destinationObject>/<timestamp>",
				"selfLink": "https://www.googleapis.com/storage/v1/b/<destinationBucket>/o/<destinationObject>",
				"name": "<destinationObject>",
				"bucket": "<destinationBucket>",
				"contentType": "<content-type>",
				"timeCreated": "<yyyy-MM-ddTHH:mm:ss.###Z>",
				"updated": "<yyyy-MM-ddTHH:mm:ss.###Z>",
				"size": "<bytes>",
				"md5Hash": "<hash>",
				"metadata": {
					"<key1>": "<val1>",
					"<key2>": "<val2>"
				},
				"crc32c": "<crc>",
				"etag": "<etag>"
				// , ...
			}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});

	callback(null, 'Successfully executed');
}