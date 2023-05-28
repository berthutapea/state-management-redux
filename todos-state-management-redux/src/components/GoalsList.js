import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddGoal, asyncDeleteGoal, asyncReceiveGoals } from '../states/goals/action';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

function GoalsList() {
  const goals = useSelector((states) => states.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveGoals());
  }, [dispatch]);

  function onAddGoal(text) {
    dispatch(asyncAddGoal(text));
  }

  function onDeleteGoal(id) {
    dispatch(asyncDeleteGoal(id));
  }

  return (
    <div>
      <h3>My Goals</h3>
      <GoalInput addGoal={onAddGoal} />

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalItem {...goal} deleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalsList;
