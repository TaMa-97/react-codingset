import React from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultButton from '@/components/elements/button/sampleButton';

function TopDetail() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/under');
  };
  return (
    <section>
      <h2>section</h2>
      <DefaultButton onClick={handleStart}>下層HOGEHOGE</DefaultButton>
    </section>
  );
}

export default TopDetail;
