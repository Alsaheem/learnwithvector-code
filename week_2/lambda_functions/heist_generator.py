import os
import json
from datetime import datetime


def lambda_handler(event, context):
    print("Called Heist Generator")
    environment = os.environ["ENVIRONMENT"]
    generator = heist_generator()
    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(
            {
                "data ": generator,
                "environment": environment,
                "datetime": f"{datetime.now()}",
            }
        ),
    }


def heist_generator():
    return {
        {
            "title": "Registration",
            "description": "Get here on time, it's first come first serve. Be late, get turned away.",
            "time": "12:30 -1pm",
        },
        {
            "title": "Opening Ceremony",
            "description": "Get ready for an exciting event, this will kick off in amazing fashion with MOP & Busta Rhymes as an opening show.",
            "time": "2:30 - 4pm",
        },
        {
            "title": "Main Event",
            "description": "This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!",
            "time": "5 - 8pm",
        },
        {
            "title": "Closing Ceremony",
            "description": "See how is the victor and who are the losers. The big stage is where the winners bask in their own glory.",
            "time": "8:30 - 9pm",
        },
    }
