import S3 from 'aws-sdk/clients/s3';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { type, name } = await req.json();

    const newName = Date.now() + '_' + name;

    const s3 = new S3({
      region: process.env.S3_REGION,
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      signatureVersion: 'v4',
    });

    const fileParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: newName,
      Expires: 60,
      ContentType: type,
      ACL: 'public-read',
    };

    const url = await s3.getSignedUrlPromise('putObject', fileParams);

    return NextResponse.json({ url });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Błąd serwera' }), {
      status: 500,
    });
  }
}
