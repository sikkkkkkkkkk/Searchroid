import { Button } from '@extension/ui';
import type { TaskHistoryItem } from '@extension/storage';

interface TaskHistoryListProps {
  tasks: TaskHistoryItem[];
  onRerun: (task: string) => void;
  isDarkMode?: boolean;
}

const TaskHistoryList: React.FC<TaskHistoryListProps> = ({
  tasks,
  onRerun,
  isDarkMode = false,
}) => {
  if (tasks.length === 0) return null;

  return (
    <div className="p-2">
      <h3 className={`mb-3 text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Recent Tasks</h3>
      <div className="space-y-2">
        {tasks.map(task => (
          <div
            key={task.id}
            className={`flex items-center justify-between rounded-lg p-2 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}
          >
            <div className="truncate text-sm mr-2 flex-1">{task.task}</div>
            <Button
              theme={isDarkMode ? 'dark' : 'light'}
              variant="secondary"
              onClick={() => onRerun(task.task)}
            >
              Re-run
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskHistoryList;
