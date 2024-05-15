/*import React from 'react';

const Footer = () => {
  // Sample team data
  const team = [
    {
      name: "John Doe",
      photo: "john.jpg", // Path to John's photo
      github: "https://github.com/johndoe"
    },
    {
      name: "Jane Smith",
      photo: "jane.jpg", // Path to Jane's photo
      github: "https://github.com/janesmith"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm">&copy; 2024 Your Website</p>
        <ul className="flex space-x-8">
          {team.map((member, index) => (
            <li key={index} className="flex flex-col items-center">
              <img
                src={member.photo}
                alt={member.name}
                className="h-16 w-16 rounded-full mb-2"
              />
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 text-center"
              >
                {member.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;*/

// components/Footer.js

const Footer = () => {
  const teamMembers = [
    { name: 'Alice Johnson', role: 'Project Manager' },
    { name: 'Bob Smith', role: 'Lead Developer' },
    // Add more team members as needed
  ];

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-bold mb-4">Project Team</h2>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{member.name}</span> - <span>{member.role}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Quotify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

