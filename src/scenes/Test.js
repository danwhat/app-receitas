import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [api, setApi] = useState({});
  console.log(api);

  const testFunc = async () => {
    const data = await ('654');
    setApi(data);
  };

  useEffect(() => {
    testFunc();
  }, []);

  if (api === {}) return setApi(('654'));
  if (api !== {}) return <h1>chseio</h1>;

  return (
    <h1>vazio</h1>
  );
}

export default App;
