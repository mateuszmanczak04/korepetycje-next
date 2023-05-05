import S3 from 'aws-sdk/clients/s3';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Nieodpowiednia metoda.' });
  }

  try {
    const { type, name } = req.body;

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

    return res.status(200).json({ url });
  } catch (err: any) {
    console.log(err);
    return res
      .status(500)
      .json({ message: 'Błąd serwera.', error: err.message });
  }
}
