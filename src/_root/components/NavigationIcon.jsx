/* eslint-disable react/prop-types */
const NavigationIcon = ({ children }) => {
  return (
    <div className="bg-darkgreen text-white size-[27px] grid place-content-center rounded-full hover:bg-darkgreen/80 transition-all ease-in-out duration-300">
      {children}
    </div>
  );
};

export default NavigationIcon;
