import fs from 'fs';
import path from 'path';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

const publicDir = path.join(process.cwd(), 'public');
const allowedExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg'];

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const allFiles = fs.readdirSync(publicDir);
    const imageFiles = allFiles.filter(file =>
      allowedExtensions.includes(path.extname(file).toLowerCase())
    );
    return res.status(200).json(imageFiles);
  }

  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({ uploadDir: publicDir, keepExtensions: true });

    form.parse(req, (err, fields, files) => {
      if (err) return res.status(500).json({ error: 'Upload failed' });

      const uploadedFile = files.file[0];
      const fileName = uploadedFile.originalFilename;
      const newPath = path.join(publicDir, fileName);

      // Replace existing image if needed
      if (fields.replace && fs.existsSync(path.join(publicDir, fields.replace))) {
        fs.unlinkSync(path.join(publicDir, fields.replace));
      }

      fs.renameSync(uploadedFile.filepath, newPath);
      return res.status(200).json({ success: true });
    });
  }


  if (req.method === 'DELETE') {
    try {
      const { filename } = req.query;
      const filePath = path.join(publicDir, filename);
  
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        return res.status(200).json({ success: true });
      } else {
        return res.status(404).json({ error: 'File not found' });
      }
    } catch (err) {
      return res.status(500).json({ error: 'Delete failed' });
    }
  }

}
