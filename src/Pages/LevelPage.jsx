import React from 'react';
import LevelCard from '../Components/LevelCard';

const LevelsPage = () => {
  const levels = [
    { level: 'beginner', title: 'Beginner Level', description: 'Perfect for starters', icon: '🌱', color: 'green' },
    { level: 'intermediate', title: 'Intermediate Level', description: 'Build skills', icon: '📚', color: 'blue' },
    { level: 'advanced', title: 'Advanced Level', description: 'Master skills', icon: '🚀', color: 'purple' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Choose Your Level</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {levels.map(level => <LevelCard key={level.level} {...level} />)}
      </div>
    </div>
  );
};

export default LevelsPage;
