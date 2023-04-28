import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { selectedMenuState } from '@stores/openLeft';
import Button from '@components/Button/Button';

function Home() {
  //Left Menu color 지정
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedMenuState);

  useEffect(() => {
    setSelectedIndex(0);
  }, []);

  return (
    <div>
      <h3>welcome Home</h3>
      <Button label='Blue' backgroundColor='blue' size='md' color='#fff' />
    </div>
  );
}

export default Home;
