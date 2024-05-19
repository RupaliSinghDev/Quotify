const Footer = () => {
  const teamMembers = [
    { name: 'Rupali Singh Dev' },
    { name: 'Tanu Verma' },
    // Add more team members as needed
  ];

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center"> {/* Center align content */}
        <h2 className="text-lg font-bold mb-4">Design and Developed By:</h2>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{member.name}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          &copy; {new Date().getFullYear()} Quotify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
