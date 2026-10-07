import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-center bg-grid">
      <div className="relative z-10 w-full max-w-xl bg-surface-container-lowest/95 backdrop-blur-md p-space-xl sm:p-space-2xl rounded-xl shadow-xl flex flex-col items-center text-center">
        <div className="relative my-space-md flex items-center justify-center w-full font-headline-xl text-[4rem] sm:text-[5rem] leading-none font-bold tracking-tighter text-on-surface">
          404
        </div>
        <div className="w-12 h-1 bg-primary/20 rounded-full my-space-sm"></div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mt-space-sm mb-space-md font-bold">
          Page Not Found
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-space-xl">
          The page you are entering does not exist
        </p>

        <Link
          className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs mt-space-lg px-space-xl py-space-sm bg-primary hover:bg-tertiary text-on-primary rounded font-label-md text-label-md transition-all shadow-md"
          data-path="spatial-workspace"
          href="/"
        >
          <span className="material-symbols-outlined text-[16px]">
            arrow_back
          </span>
          <span>Return to Main Canvas</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
