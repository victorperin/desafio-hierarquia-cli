import fs from 'fs/promises';
import path from 'path';

export type Hierarchy = {
  [key: string]: any;
};

export const loadHierarchy = async (filePath: string): Promise<Hierarchy> => {
  const hierarchyPath = path.resolve(filePath);
  const data = await fs.readFile(hierarchyPath, 'utf-8');
  return JSON.parse(data);
};