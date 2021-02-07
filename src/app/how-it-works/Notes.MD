In order to write code blocks in HTMl, 
use

```
<pre>
    <code>
    </code>
</pre>
```

Special characters will be need to be escaped.

&quot; = "
&#123; =  {
&#125; =  }

Example: 
      <pre><code> ng new s3-ng-app --directory &#123;&#123;name of directory&#125;&#125;</code></pre>

      

    env:
      variables:
        S3_BUCKET: MyAppBucket //Should be the name of S3 bucket created
    APP_NAME: &amp;quot;MyApp&amp;quot; //The name of the Angular App created
    BUILD_ENV: &amp;quot;prod&amp;quot;
    
    phases:
      install:
        runtime-versions:
          nodejs: 10
        commands:
          # Install Angular CLI, If you are not using Angular 6, install angular/cli@1.7.0 or lower, confirm by running ng -v inside your project folder
          - npm i -g @angular/cli@6.0.8
          # Install node dependancies.
          - npm i
    
      build:
        commands:
          # Builds Angular application. You can also build using custom environment here like mock or staging
          - echo Build started on `date`
          - ng build --$&amp;#123;BUILD_ENV&amp;#125;
    
      post_build:
        commands:
          # Clear S3 bucket.
          - aws s3 rm s3://$&amp;#123;S3_BUCKET&amp;#125; --recursive
          - echo S3 bucket is cleared.
          # Copy dist folder to S3 bucket, As of Angular 6, builds are stored inside an app folder in distribution and not at the root of the dist folder
          - aws s3 cp dist/browser/ s3://$&amp;#123;S3_BUCKET&amp;#125; --recursive
          - echo Build completed on `date`