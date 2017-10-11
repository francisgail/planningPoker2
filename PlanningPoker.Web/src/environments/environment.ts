// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiEndPoint: "http://ec2-34-233-71-132.compute-1.amazonaws.com:5000/api/",
  signalrEndPoint: "http://ec2-34-233-71-132.compute-1.amazonaws.com:5000/",
  // signalrEndPoint: "http://localhost/planningpoker.api/",
  // apiEndPoint:"http://localhost/planningpoker.api/api/"
};
