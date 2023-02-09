import { useCallback, useState } from "react";

export function useTopBanner() {
  const [visible, setVisible] = useState(true);

  const removeElement = useCallback(() => {
    setVisible(false);
    localStorage.setItem("banner-closed", true);
    setTimeout(() => {
      localStorage.removeItem("banner-closed");
      console.log("banner-closed removed from local storage");
      setVisible(true);
    }, 6000);
  }, []);

  return { visible, removeElement };
}
