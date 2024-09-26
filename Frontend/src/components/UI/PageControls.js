import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";

function PageControls({ currentPage, setCurrentPage, totalPages }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(+currentPage - 1); // Decrease the current page
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(+currentPage + 1); // Increase the current page
    }
  };

  return (
    <div className="flex justify-between mx-32 py-10">
      <div
        className={`cursor-pointer flex items-center space-x-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handlePrevious}
      >
        <LuArrowLeftFromLine size={24} color="#7C4EE4" />
        <p>Previous</p>
      </div>
      <div
        className={`cursor-pointer flex items-center space-x-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleNext}
      >
        <p>Next</p>
        <LuArrowRightFromLine size={24} color="#7C4EE4" />
      </div>
    </div>
  );
}

export default PageControls;
