const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col items-center justify-center w-full h-auto p-4 border-t border-gray-300 dark:border-gray-600 mt-2">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Copyright 2023 - Arkia Ebrahimi
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is a demo for a voting app, called
            <span className="font-bold">Votey</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
