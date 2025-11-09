export const AppFooterCopyright = () => {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <span className="dark:hover:text-indigo-300 ml-1 duration-500">
          Don Manoj Roy Jayasinghe. All rights reserved.
        </span>
      </div>
    </div>
  );
};
