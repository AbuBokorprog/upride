import React from "react";

interface LearningAll {
  id: number;
  title: string;
  description: string;
  image: string;
  isTrending?: string;
}

const LearningAll: React.FC<LearningAll> = ({
  title,
  description,
  image,
  isTrending,
}) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="relative">
          <img src={image} alt="blog" />
        </figure>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p>{description}</p>
          <div className="absolute top-4">
            {isTrending ? (
              <div className="relative">
                <img src="/public/trending.png" alt="" />
                <p className=" absolute text-white bottom-[7px] left-4 font-medium">
                  <small>{isTrending}</small>
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningAll;
