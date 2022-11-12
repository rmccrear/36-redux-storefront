import { Button } from "@mui/material";

export const Category = (props) => {
  const handleSelectCategory = () => {
    props.selectCategory(props.category.slug);
  }
  return (
    <Button variant="text" className="category-button" onClick={ handleSelectCategory }>
      { props.category.displayName }
    </Button>
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