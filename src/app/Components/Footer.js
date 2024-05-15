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
          &copy; {new Date().getFullYear()} My Next.js Project. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

