import React from 'react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeUrl?: string;
  credlyUrl?: string;
}

export const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: 'Certificate Badges',
      issuer: 'Google Cloud',
      date: '2025',
      credlyUrl: 'https://www.credly.com/users/rimandeep.singh'
    },
    {
      title: 'Azure Fundamentals AZ-900',
      issuer: 'Microsoft',
      date: '2023',
      credentialId: 'EC4413B0B526EDE2',
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'AWS',
      date: '2022',
      credentialId: 'FTN3TCHK61Q1QD5Z',
    },
    {
      title: ' System Administration and IT Infrastructure Services',
      issuer: 'Google',
      date: '2024',
      credentialId: '3QUDXMS6W6L3',
    },
    {
      title: 'NDG Linux Essentials',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      credentialId: '8d8dc69f-509d-4e73-bf08-25029194d058',
    },
    {
      title: 'Advanced Certification in Cloud Computing and DevOps',
      issuer: 'Intellipaat',
      date: '2025',
      credentialId: 'IPTIH2505287',
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-muted/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground/70">{cert.date}</p>
              {cert.credentialId && (
                <p className="text-xs text-muted-foreground/50 mt-2">Credential ID: {cert.credentialId}</p>
              )}
              {cert.credlyUrl && (
                <a 
                  href={cert.credlyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  View on Credly
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};