import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway'

export class WorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloFunc', {
      code: lambda.AssetCode.fromAsset("./lambda"),
      handler: 'hello.handler',
      runtime: lambda.Runtime.NODEJS_16_X
    });

    new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: hello,
    })
  }
}
