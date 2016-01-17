const View = getState => {

  const render = (view, root) => {
    root.innerHTML = view(getState());
  };

  return {render};
};

export default View;
