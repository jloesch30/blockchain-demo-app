import { useState, useEffect } from "react";

export default function useLineItem(info) {
  const [data, setData] = useState();
  useEffect(() => {
    const lineItemData = info.lineItemName.map((value, index) => {
      return [value, info.lineItemDescription[index]];
    });
    setData(lineItemData);
    return () => setData([]);
  }, []);

  return data;
}
