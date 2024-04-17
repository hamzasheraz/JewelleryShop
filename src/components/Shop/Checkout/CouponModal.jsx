// CouponModal.jsx
import React from "react";

const CouponModal = () => {
  return (
    <div className="modal fade" id="coupon-modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Coupon Code"
                />
              </div>
              <button type="submit" className="btn btn-main">
                Apply Coupon
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;
