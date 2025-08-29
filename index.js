#!/usr/bin/env node
import chalk from "chalk";
import { organizeFiles } from "./organizer.js";

// CLI arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(chalk.red("❌ Please provide a folder path!"));
  process.exit(1);
}

const folderPath = args[0];
organizeFiles(folderPath);
