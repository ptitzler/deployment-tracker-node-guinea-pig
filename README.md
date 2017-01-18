# deployment-tracker-node-guinea-pig
Test application for https://github.com/IBM-Bluemix/cf-deployment-tracker-client-node

### How to run

Download the sample application:

```
 $ git clone https://github.com/ptitzler/deployment-tracker-node-guinea-pig.git
 $ cd deployment-tracker-node-guinea-pig
``` 

By default two instances of this sample application will be started when you run `cf push`. Each instance sends a tracking request to the [Deployment-Tracker service](https://github.com/IBM-Bluemix/cf-deployment-tracker-service).

> Customize `manifest.yml` and `package.json` as desired to test specific scenarios or client versions.

Push and start the sample application:

```
 $ cf push
```

Each time an instance of this application sends a tracking request an entry like the following is displayed in the application log:

```
Uploaded stats { ok: true }
```

The log file also contains a dump of the `VCAP_APPLICATION` environment variable:

```
"{\"application_id\":\"3...6\",\"application_name\":\"deployment-tracker-node-guinea-pig\"_uris\":[\"deployment-tracker-node-guinea-pig.mybluemix.net\"],\"application_version\":\"8...b\",\"host\":\"0.0.0.0\",\"instance_id\":\-4...7\",\"instance_index\":0,\"limits\":{\"disk\":1024,\"fds\":16384,\"mem\":256},\"name\":\"deployment-tracker-node-guinea-pig\",\"port\":8080,\"s...1\",\"space_name\":\"dev\",\"uris\":[\"deployment-tracker-node-guinea-pig.mybluemix.net\"],\"users\":null,\"version\":\"8..b\"}"
```