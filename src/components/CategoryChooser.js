
export const Category = (props) => {
  const handleSelectCategory = () => {
    props.selectCategory(props.category.slug);
  }
  return (
    <button className="category-button" onClick={ handleSelectCategory }>
      { props.category.displayName }
    </button>
  );
}

const CategoryChooser = (props) => {
  const displayCategories = (categories) => { 
    return categories.map(cat => (
      <Category key={ cat.slug }  category={cat} selectCategory={ props.selectCategory } />
    ))
  }
  return (
    <div className="category-chooser">
      { displayCategories(props.categories, props.selectCategory) }
    </div>
  );
}

export default CategoryChooser;