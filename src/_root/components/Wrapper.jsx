/* eslint-disable react/prop-types */
const Wrapper = ({ children }) => {
  return (
    <div className="w-full h-full max-w-screen-2xl mx-auto px-4 sm:px-5">
      {children}
    </div>
  );
};

export default Wrapper;
