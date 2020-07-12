import mime from 'mime';
import fs from 'fs';
const PATH = 'http://localhost:3000/';
export const uploadImage = async (image) => {
// to declare some path to store your converted images
  let matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data =  Buffer.from(matches[2], 'base64');
  let decodedImg = response;
  let imageBuffer = decodedImg.data;
  let type = decodedImg.type;
  let extension = mime.getExtension(type);
  const dateTime = new Date().getTime();
  let fileName = dateTime + '.' + extension;
  try {
    fs.writeFileSync('./images/' + fileName, imageBuffer, 'utf8');
    return {'status':'success',path:PATH + fileName};
  } catch (e) {
    return {'status':'fail',path:e};
  }
};