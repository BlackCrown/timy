import { useState } from 'react';
import React from 'react';

interface ListProps {
  id: number;
  task: string;
  completed: boolean;
}

export default function TodoListPage() {
  const [list, setList] = useState<ListProps>();
  const [task, newTask] = useState<string>();

  return <div>todoList</div>;
}