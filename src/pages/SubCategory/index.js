import { useParams } from 'react-router-dom';

function SubCategory() {
  const params = useParams();

  return (
    <div>
      <h1>{params.subcategory}</h1>
    </div>
  );
}

export default SubCategory;
