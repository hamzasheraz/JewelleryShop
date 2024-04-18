import React,{useState} from 'react'

const FilterSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('Man');
    const categories = [
      { name: 'Shoes', items: ['Brand & Twist', 'Shoe Color', 'Shoe Color'] },
      { name: 'Duty Wear', items: ['Brand & Twist', 'Shoe Color', 'Shoe Color'] },
      { name: 'WorkOut Shoes', items: ['Brand & Twist', 'Shoe Color', 'Gladian Shoes', 'Swis Shoes'] }
    ];
  
    return (
      <section className="products section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="widget">
                <h4 className="widget-title">Short By</h4>
                <form method="post" action="#">
                  <select className="form-control" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option>Man</option>
                    <option>Women</option>
                    <option>Accessories</option>
                    <option>Shoes</option>
                  </select>
                </form>
              </div>
              <div className="widget product-category">
                <h4 className="widget-title">Categories</h4>
                {categories.map((category, index) => (
                  <div className="panel-group commonAccordion" id="accordion" role="tablist" aria-multiselectable="true" key={index}>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id={`heading${index}`}>
                        <h4 className="panel-title">
                          <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                            {category.name}
                          </a>
                        </h4>
                      </div>
                      <div id={`collapse${index}`} className="panel-collapse collapse in" role="tabpanel" aria-labelledby={`heading${index}`}>
                        <div className="panel-body">
                          <ul>
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}><a href="#!">{item}</a></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FilterSection;