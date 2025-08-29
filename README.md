# 📂 File Organizer CLI  

**Command Line Tool** built with **Node.js** to organize files in any folder by their type (Images, Music, Videos, Docs, Archives, Code, etc.).  

Instead of manually sorting your messy folders, just run one command and everything gets neatly organized into subfolders.  

---

## ✨ Features
- 📦 Organizes files into categories:
  - **Images** → `.jpg, .png, .gif, .svg`  
  - **Videos** → `.mp4, .mkv, .mov, .avi`  
  - **Music** → `.mp3, .wav, .aac`  
  - **Docs** → `.pdf, .docx, .txt, .ppt, .xlsx`  
  - **Archives** → `.zip, .rar, .tar, .gz`  
  - **Code** → `.js, .py, .java, .cpp, .html, .css, .json`  
  - **Others** → Everything else  
- 🎨 Colored CLI output using **chalk**  
- 🚀 Fast and lightweight (uses only Node.js)  
- 🗂 Creates a separate `organized_files` folder without touching your originals  

---

## ⚡ Installation
Clone the repo and install dependencies:
```bash
git clone copy_link.git
cd file-organizer-cli
npm install
```
Make it executable:
```bash
chmod +x index.js
npm link

