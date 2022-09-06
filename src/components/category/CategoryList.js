function CategoryList(props) {
  function generateClass(currentId, selectedId) {
    if (currentId !== selectedId) {
      return "text-gray-900";
    } else {
      return "bg-black text-white";
    }
  }
  return (
    <>
      {props.categories.map((category) => {
        return (
          <button
            key={category.id}
            type="button"
            className={`${generateClass(
              category.id,
              props.categoryId
            )} m-1 py-2 px-3 text-xs font-medium hover:text-white bg-white hover:bg-gray-900 ring-1 focus:outline-none rounded-lg text-center`}
            onClick={() => props.handleSelectCategory(category)}
          >
            {category.name}
          </button>
        );
      })}
    </>
  );
}

export default CategoryList;
