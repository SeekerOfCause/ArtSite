import { Storage } from '@google-cloud/storage';

const bucketName = 'art-site-bucket-1'

const store = new Storage({
  keyFilename: './assets/something_something_dark_side.json',
  projectId: 'tough-star-416200'
});

export async function getFiles(path: string) {
    const [files] = await store.bucket(bucketName).getFiles({prefix: path});
    const returnedFiles = files
    return returnedFiles
}



export async function getPaintingsURL() {
  const paintingFiles = await getFiles("Paintings");
  const paintings = paintingFiles.map((p)=> p.publicUrl());
  console.log(paintings)
  return paintings;
}