import fs from "fs";
import path from "path";
import chalk from "chalk";

// File categories
const types = {
  Images: ["jpg", "jpeg", "png", "gif", "svg"],
  Videos: ["mp4", "mkv", "mov", "avi"],
  Music: ["mp3", "wav", "aac"],
  Docs: ["pdf", "doc", "docx", "txt", "ppt", "xlsx"],
  Archives: ["zip", "rar", "tar", "gz"],
  Code: ["js", "py", "java", "cpp", "html", "css", "json"]
};

export function organizeFiles(folderPath) {
  if (!fs.existsSync(folderPath)) {
    console.log(chalk.red("❌ Invalid folder path!"));
    return;
  }

  // Create organized folder
  const organizedDir = path.join(folderPath, "organized_files");
  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir);
  }

  // Read all files in folder
  const files = fs.readdirSync(folderPath);

  files.forEach(file => {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      const ext = path.extname(file).slice(1).toLowerCase();
      let category = "Others";

      for (const [type, extensions] of Object.entries(types)) {
        if (extensions.includes(ext)) {
          category = type;
          break;
        }
      }

      const categoryPath = path.join(organizedDir, category);
      if (!fs.existsSync(categoryPath)) {
        fs.mkdirSync(categoryPath);
      }

      const destPath = path.join(categoryPath, file);
      fs.renameSync(filePath, destPath);

      console.log(chalk.green(`✔ Moved ${file} → ${category}/`));
    }
  });

  console.log(chalk.blue("\n🎉 Files organized successfully!"));
}
