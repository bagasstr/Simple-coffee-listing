import React from "react";

export default function Card({
  title,
  image,
  price,
  rating,
  votes,
  popular,
  available,
}) {
  return (
    <>
      <div className=''>
        <div className=''>
          <div className='rounded-lg overflow-hidden relative'>
            <p
              className={`${
                popular
                  ? "absolute text-primary font-bold bg-yellow w-fit py-1 px-3 rounded-full left-3 top-3 text-xs"
                  : ""
              }`}>
              {popular ? "Popular" : ""}
            </p>
            <img src={image} alt='' className='rounded-lg ' />
          </div>
          <div className='flex items-center justify-between mt-3'>
            <h2 className='text-text text-[16px] font-medium'>{title}</h2>
            <h2 className='bg-greenCyan px-2 py-1 text-xs font-medium rounded-md text-primary'>
              {price}
            </h2>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              {rating ? (
                <>
                  <img src='/src/assets/Star_fill.svg' alt='' />
                  <h4 className='text-text font-medium text-sm ml-2'>
                    {rating}
                  </h4>
                  <h4 className='text-gray font-medium text-sm ml-1'>
                    ({votes} votes)
                  </h4>
                </>
              ) : (
                <>
                  <img src='/src/assets/Star.svg' alt='' />
                  <h4 className='text-gray font-medium text-sm ml-2'>
                    No ratings
                  </h4>
                </>
              )}
            </div>
            <div className=''>
              {!available && (
                <h4 className='text-red font-medium text-sm'>Sold Out</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
