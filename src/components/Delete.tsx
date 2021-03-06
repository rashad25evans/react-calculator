import * as React from "react";
import { useCallback } from 'react';
import { useStoreActions } from '../hooks';


const Delete: React.FC = () => {
  const percent = useStoreActions(actions => actions.buttons.percent);
  const clear = useStoreActions(actions => actions.buttons.clear);
  const del = useStoreActions(actions => actions.buttons.delete);

  // Clear
  const handleClear = useCallback(() => {
    clear("");
  }, [clear]);

  // Percent
  const handlePercent = useCallback((e) => {
    const value = e.target.value
    percent(value);
  }, [percent]);

  // Delete
  const handleDelete = useCallback(() => {
    del("");
  }, [del]);


  return (
    <div className="delete-item">
      <button id="clear" onClick={handleClear}>
        C
      </button>
      <button id="percent" onClick={handlePercent} value="%">
        %
      </button>
      <button id="delete" onClick={handleDelete}>
        DEL
      </button>
    </div>
  );
};

export default Delete;
