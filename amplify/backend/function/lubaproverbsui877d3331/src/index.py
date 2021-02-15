import boto3
from botocore.exceptions import ClientError
from boto3.dynamodb.conditions import Key, Attr
import decimal
import json

import os

# import requests

print('Loading function')

table_name = "LubaProverbs"


def respond(err, res=None):
    return {
        "isBase64Encoded": False,
        'statusCode': '400' if err else '200',
        'body': err.message if err else res,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        }
    }


def handler(event, context):
    print('received event:')
    print(event)
    dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
    table = dynamodb.Table(table_name)

    operation = event['httpMethod']
    if event['pathParameters']:
        proverb_id = event['pathParameters']['id']

    if operation == 'GET':
        if proverb_id != None:
            try:
                response = table.query(
                    KeyConditionExpression=Key('id').eq(int(proverb_id))
                )
            except ClientError as e:
                print(e.response['Error']['Message'])
            else:
                return respond(None,  json.dumps(response['Items'][0], cls=DecimalEncoder))
        else:

            try:
                # response = dynamo.scan(TableName=table_name)
                response = table.scan()
            except ClientError as e:
                print(e.response['Error']['Message'])
            else:
                results = json.dumps(response['Items'], cls=DecimalEncoder)
                return respond(None, results)


class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return str(o)
        return super(DecimalEncoder, self).default(o)

