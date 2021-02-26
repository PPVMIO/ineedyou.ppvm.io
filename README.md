# I Need You

[Landing page](https://ineedyou.ppvm.io) for the I Need You Music Video

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Developing Locally

1. Install the dependencies

```yarn install```

2. Start local development server

```yarn start```

## Deploying

1. To build the production version run the following command. This will compile various artifacts in the `./build` folder.  

```yarn build --prod```

2. The s3 bucket used to host this project is setup in an infrastructure specific [repository](https://github.com/PPVMIO/infrastructure). Sync the build folder to update the s3 bucket with.
  
```aws s3 sync ./build s3://$BUCKET_NAME```

3. If you want the changes to go in to affect right away, you may need to invalidate the cloudfront cache. To do so run the following

```aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"```