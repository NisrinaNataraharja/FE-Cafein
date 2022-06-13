import React from "react";

const Card = ({ img, titleImg, width, children, ...props }) => {
  return (
    <div className="card" style={{ width: width }}>
      <div className="text-center">
        <img src={img} className="img-fluid text-center" alt="" />
        <p className="text-center">{titleImg}</p>
      </div>
      <div className={`card-body ${props.textPosition}`}>{children}</div>
    </div>
  );
};

// const Card = ({ borderRadius, shadow, img, children, ...props }) => {
//   return (
//     <div classnName="card" {...props} style={{ boxShadow: shadow, width: props.width }}>
//       <div>
//         <img src={img} classnName="card-img-top" alt="" />
//       </div>
//       <div classnName="card-body">{children}</div>
//     </div>
//   );
// };

// Card.defaultProps = {
//   borderRadius: "8px",
// };

export default Card;
