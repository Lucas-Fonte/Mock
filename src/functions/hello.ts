import {
  Handler, Context, Callback, APIGatewayEvent,
} from 'aws-lambda';

interface HelloResponse {
  statusCode: number;
  headers: any;
  body: string;
}

const handler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  const params = event.queryStringParameters;

  const response: HelloResponse = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
    body: JSON.stringify({
      msg: 'Hello from Mock, check out this number!',
      number: Math.floor(Math.random() * 10),
      params,
    }),
  };

  callback(undefined, response);
};

export { handler };
