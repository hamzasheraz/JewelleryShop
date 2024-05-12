import React,{useState} from 'react'

const FilterSection = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('women');
   
    const changeCategory = (value) => {
      setSelectedCategory(value);
      props.setcat(value);
      console.log(value);
    };
  
    return (
      <section className="products section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="widget">
                <h4 className="widget-title">Short By</h4>
                <form method="post" action="#">
                  <select className="form-control" value={selectedCategory} onChange={(e) => changeCategory(e.target.value)}>
                    <option>men</option>
                    <option>women</option>
                    <option>Accessories</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FilterSection;
  