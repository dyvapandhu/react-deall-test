function CategoryList(props) {
  function generateClass(currentId, selectedId) {
    if (currentId === selectedId) {
      return "text-white bg-black";
    } else {
      return "text-black bg-white";
    }
  }
  return (
    <div className="overflow-x-auto">
      {props.categories.map((category) => {
        return (
          <button
            key={category.id}
            type="button"
            className={`${generateClass(category.id, props.categoryId)} m-1 py-2 px-3 text-xs font-medium border hover:text-white hover:bg-gray-900 rounded-lg text-center`}
            onClick={() => props.handleSelectCategory(category)}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryList;
