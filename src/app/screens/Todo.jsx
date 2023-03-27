import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userLogout } from "../actions/LoginAction";
import { getTodoData, getTodoFilterData } from "../actions/todoAction";
import Header from "../component/Header/Header";
import Model from "../component/Model/Model";
import PaginatedItems from "../component/PaginatedItems/PaginatedItems";

const Todo = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [visible, setVisible] = useState(false);

  const { isLogin } = useSelector((state) => state.loginData);

  const { todos, isLoading, filterData, isFiltering } = useSelector(
    (state) => state.todoData
  );
  useEffect(() => {
    if (isLogin) {
      dispatch(getTodoData());
    } else {
      navigation("/");
    }
  }, []);

  const getTodoMoreData = (id) => {
    dispatch(getTodoFilterData(id));
    setVisible(true);
  };

  const logOutAction = () => {
    dispatch(userLogout());
    navigation("/");
  };

  return (
    <div>
      <Header handleLogOut={() => logOutAction()} />
      <div className="todo-wrapper">
        {!isLoading ? (
          <PaginatedItems
            items={todos}
            onItemPress={(id) => getTodoMoreData(id)}
          />
        ) : (
          <div>Loading..........</div>
        )}
      </div>
      {visible && !isFiltering && (
        <Model data={filterData} handleClose={() => setVisible(false)} />
      )}
    </div>
  );
};

export default Todo;
