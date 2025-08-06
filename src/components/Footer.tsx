const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white">
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>&copy; {new Date().getFullYear()} Cyril Bousmar. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        {/* <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          
        </div> */}
      </div>
    </footer>
  );
};

export default Footer; 