import { createStorage } from '../base/base';
import { StorageEnum } from '../base/enums';

export interface TaskHistoryItem {
  id: string;
  task: string;
  createdAt: number;
}

export interface TaskHistoryStorage {
  addTask: (task: string) => Promise<TaskHistoryItem>;
  getRecentTasks: (limit?: number) => Promise<TaskHistoryItem[]>;
  clear: () => Promise<void>;
}

const TASK_HISTORY_KEY = 'task_history';

const taskHistoryStorage = createStorage<TaskHistoryItem[]>(TASK_HISTORY_KEY, [], {
  storageEnum: StorageEnum.Local,
  liveUpdate: true,
});

export function createTaskHistoryStorage(): TaskHistoryStorage {
  return {
    addTask: async (task: string): Promise<TaskHistoryItem> => {
      const item: TaskHistoryItem = {
        id: crypto.randomUUID(),
        task,
        createdAt: Date.now(),
      };
      await taskHistoryStorage.set(prev => [item, ...prev]);
      return item;
    },

    getRecentTasks: async (limit = 5): Promise<TaskHistoryItem[]> => {
      const items = await taskHistoryStorage.get();
      return [...items]
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, limit);
    },

    clear: async (): Promise<void> => {
      await taskHistoryStorage.set([]);
    },
  };
}

export const taskHistoryStore = createTaskHistoryStorage();
