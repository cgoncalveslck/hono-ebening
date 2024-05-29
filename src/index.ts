import { ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3';
import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  const s3 = new S3Client({
    region: 'us-east-1', // don't think this matters
    forcePathStyle: true, // idk what this does but it works :)
    endpoint: String(process.env.MINIO_SERVER_URL + ':' + process.env.MINIO_SERVER_PORT),
    credentials: {
      accessKeyId: String(process.env.SERVICE_USER_MINIO),
      secretAccessKey: String(process.env.SERVICE_PASSWORD_MINIO),
    },
  });

  const bucketName = 'default'

  //get all objects in the bucket
  const command = new ListObjectsV2Command({ Bucket: bucketName })
  const response = await s3.send(command)


  return c.json({
    count: response.KeyCount,
    env: process.env,
    files: response.Contents?.map((file) => {
      return {
        name: file.Key,
        source: `${process.env.S3_URL}/${bucketName}/${file.Key}`,

      }
    }),

  })
})

export default app