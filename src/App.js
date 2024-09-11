/*arquivo principal, onde vamos montar toda a calculadora*/

import Button from './components/Button';
import Input from './components/Input';
import backgroundImage from './assets/background.jpg';

import { useState } from 'react';
import { Container, Content, Row } from './styles';




const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
      
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0')  {
      switch(operation) {

        case '+':
          handleSumNumbers()
          break;

        case '-':
          handleMinusNumbers()
          break;

        case '*':
          handleMultNumbers()
          break;

          case '/':
          handleDiviNumbers()
          break;

        default:
        break;  

      }
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleDiviNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  return (
    <Container   style={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', 
      width: '100%' 
    }}>

      <Content> 

       

        <Input value={currentNumber}/>

        <Row>

        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="+" onClick={handleSumNumbers}/>

        </Row>

        <Row>

        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="-" onClick={handleMinusNumbers}/>

        </Row>

        <Row>

        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="÷" onClick={handleDiviNumbers}/>

        </Row>

        <Row>

        <Button label="0" onClick={() => handleAddNumber('0')}/>
        <Button label="*" onClick={handleMultNumbers}/>
        <Button label="C" onClick={handleOnClear}/>
        <Button label="=" onClick={handleEquals}/>
        

        </Row>
        
      </Content> 
    </Container>
  );
}

export default App;
