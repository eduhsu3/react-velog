import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [dataType, setDataType] = useState('trending');
  const [isWrite, setIsWrite] = useState(false); //글쓰기, 목록 상태

  const [schKeyword, setSchKeyword] = useState(null);

  return (
    <>
      <Header setDataType={setDataType} dataType={dataType} setSchKeyword={setSchKeyword} isWrite={isWrite} setIsWrite={setIsWrite} />
      <Main dataType={dataType} setDataType={setDataType} schKeyword={schKeyword} isWrite={isWrite} setIsWrite={setIsWrite} />
      <Footer />
    </>
  );
}

export default App;
