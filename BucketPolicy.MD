OLD

```
{
    "Version": "2012-10-17",
    "Id": "Policy1565052310757",
    "Statement": [
        {
            "Sid": "Stmt1565052219886",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::mattagreen.com/*"
        },
        {
            "Sid": "Stmt1565052307205",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::170172180887:role/service-role/codebuild-MattAGreen-CB-service-role"
            },
            "Action": [
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::mattagreen.com/*"
        }
    ]
}

```

NEW

```
{
    "Version": "2012-10-17",
    "Id": "Policy1565052310757",
    "Statement": [
        {
            "Sid": "Stmt1565052219886",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E237L37Q4O6PYI"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::mattagreen.com/*"
        },
        {
            "Sid": "Stmt1565052307205",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::170172180887:role/service-role/codebuild-MattAGreen-CB-service-role"
            },
            "Action": [
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::mattagreen.com/*"
        }
    ]
}
```
