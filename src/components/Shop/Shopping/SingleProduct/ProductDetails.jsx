import React from 'react';
import CommentList from './CommentList';

function ProductDetails() {
  const comments = [
    {
      author: 'Jonathon Andrew',
      timestamp: 'July 02, 2015, at 11:34',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    // ... Add more comments as needed
  ];

  return (
    <>
      <section className="single-product">
        {/* ... Other product details ... */}
      </section>
      <section className="product-reviews">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="tabCommon mt-20">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a data-toggle="tab" href="#details" aria-expanded="true">
                      Details
                    </a>
                  </li>
                  <li className="">
                    <a data-toggle="tab" href="#reviews" aria-expanded="false">
                      Reviews (3)
                    </a>
                  </li>
                </ul>
                <div className="tab-content patternbg">
                  <div id="details" className="tab-pane fade active in">
                    <h4>Product Description</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    {/* ... More description ... */}
                  </div>
                  <div id="reviews" className="tab-pane fade">
                    <CommentList comments={comments} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;