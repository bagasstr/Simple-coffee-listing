import React from "react";
import Tabs from "../molecules/Tabs";
import TabsItems from "../molecules/TabsItems";

export default function CollectionPage() {
  return (
    <>
      <div className=''>
        <div className=''>
          <img src='/src/assets/bg-cafe.jpg' alt='' />
          <div className='container'>
            <img src='/src/assets/vector.svg' alt='' className='img-vector' />
            <div className='relative'>
              <h1 className=''>Our Collection</h1>
              <p className=''>
                Introducing our Coffee Collection, a selection of unique coffees
                from different roast types and origins, expertly roasted in
                small batches and shipped fresh weekly.
              </p>
            </div>
            <div className='container-tabs'>
              <Tabs />
            </div>
            <TabsItems />
          </div>
        </div>
      </div>
    </>
  );
}
