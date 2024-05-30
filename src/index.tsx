import { CreateBucketCommand, HeadBucketCommand, ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3';
import { Hono } from 'hono'
import { Home } from './pages/Home'
import type { Sound } from './types/Global.d.ts'

const app = new Hono()

app.get('/', async (c) => {
  const s3 = new S3Client({
    region: 'us-east-1',
    forcePathStyle: true,
    endpoint: String(process.env.MINIO_SERVER_URL),
    credentials: {
      accessKeyId: String(process.env.SERVICE_USER_MINIO),
      secretAccessKey: String(process.env.SERVICE_PASSWORD_MINIO),
    },
  });

  const bucketName = 'default'
  try {
    await s3.send(new HeadBucketCommand({ Bucket: bucketName }))
  } catch {
    await s3.send(new CreateBucketCommand({ Bucket: bucketName }))
  }
  const response = await s3.send(new ListObjectsV2Command({ Bucket: bucketName }))
  const sounds = response.Contents?.map((file) => {
    return {
      name: file.Key,
      source: `${process.env.MINIO_SERVER_URL}/${bucketName}/${file.Key}`
    }
  }) as Sound[];

  return c.html(<Home sounds={sounds} />)
})

app.post('/upload', async (c) => {
  const body = await c.req.parseBody()

  console.log(body);

  return new Response('lul', { status: 403 })
})


console.log('Server started on port 3000');
export default app
