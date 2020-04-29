import  { CollatedTasks } from '../constants';

export const getCollatedTasksExist = selectedProject => 
getCollatedTasksExist.find(task => task.key ===  selectedProject);