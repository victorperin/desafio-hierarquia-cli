import fs from 'fs/promises';
import path from 'path';
import type { Hierarchy } from './types';
import { globalState } from '../globalState';

// Todo: deal with lower cases
export const loadHierarchy = async (filePath: string): Promise<Hierarchy> => {
  performance.mark('startLoadHierarchy');


  const hierarchyPath = path.resolve(filePath);
  const data = await fs.readFile(hierarchyPath, 'utf-8');
  const result = JSON.parse(data);

  performance.mark('endtLoadHierarchy')
  globalState.timers.loadHierarchy = performance.measure('startLoadHierarchy', 'endtLoadHierarchy').duration;


  return result
};
