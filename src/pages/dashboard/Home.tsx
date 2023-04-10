import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { selectedMenuState } from '@stores/openLeft';

function Home() {
  //Left Menu color 지정
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedMenuState);

  useEffect(() => {
    setSelectedIndex(0);
  }, []);

  return (
    <div>
      <h3>welcome Home</h3>
    </div>
  );
}

export default Home;
