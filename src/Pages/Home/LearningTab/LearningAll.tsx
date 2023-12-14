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
    <div className="mx-auto">
      <div className=" bg-base-100 shadow-xl">
        <div className="relative">
          <img src={image} alt="blog" className="w-full" />
          <div className="absolute top-6 left-8">
            {isTrending ? (
              <div className="relative">
                <img src="/public/trending.png" alt="" />
                <p className=" absolute text-white bottom-[6px] left-4 font-medium">
                  <small>{isTrending}</small>
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LearningAll;
