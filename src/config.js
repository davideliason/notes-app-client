export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "s3-serverless-notes-app"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://c058eeluud.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_QReI5yBOf",
      APP_CLIENT_ID: "1bkd2u5ep9qol3c3csgrjoi1id",
      IDENTITY_POOL_ID: "us-east-1:aa464bc8-abd7-4c86-b253-88ab4f6a7bef"
    }
  };