import React from "react";
import ButtonTabs from "../atoms/ButtonTabs";
import { useTabs } from "../../utils/context/TabActive";

export default function Tabs() {
  return (
    <div className='flex justify-center gap-x-8'>
      <ButtonTabs title={"All Products"} />
      <ButtonTabs title={"Available Now"} />
    </div>
  );
}
