
import { useRef } from "react";

const useSidebar = () => {
  const mainContentRef = useRef(null);
  const sidebarRef = useRef(null);
  const removeSmRef = useRef(null);
  // const sidebarAddRef = useRef(null);

  const handleToggle = () => {
    if (mainContentRef.current) {
      mainContentRef.current.classList.toggle("large_main_content_section");
    }
    console.log(mainContentRef.current);
    if (sidebarRef.current) {
      sidebarRef.current.classList.toggle("small_sidebar");
    }
    if (removeSmRef.current) {
      removeSmRef.current.classList.toggle("remove_sm");
    }
  };

  const SmallhandleToggle = () => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.remove('left_sidebar');
    }
  };

  const SmallhandleToggleRemove = () => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.add('left_sidebar');
    }
  };

  return {
    mainContentRef,
    sidebarRef,
    removeSmRef,
    handleToggle,
    SmallhandleToggle,
    SmallhandleToggleRemove
  };
};

export default useSidebar;
