const Footer = () => {
  const teamMembers = [
    { name: 'Rupali Singh Dev', github: 'https://github.com/RupaliSinghDev' }, 
    { name: 'Tanu Verma', github: 'https://github.com/thisistanu25' },
  ];

  const githubLogoUrl = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
  

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center"> 
        <h2 className="text-lg font-bold mb-4">Design and Developed By:</h2>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index} className="mb-2 flex items-center justify-center">
              {member.name}
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="ml-2">
                <img src={githubLogoUrl} alt="GitHub Logo" className="w-4 h-4" />
              </a>
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

