import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const buttons = [
    ['C', '±', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  const getButtonVariant = (btn: string) => {
    if (['C', '±', '%'].includes(btn)) return 'secondary';
    if (['÷', '×', '-', '+', '='].includes(btn)) return 'default';
    return 'outline';
  };

  const handleButtonClick = (btn: string) => {
    switch (btn) {
      case 'C':
        clear();
        break;
      case '±':
        setDisplay(String(parseFloat(display) * -1));
        break;
      case '%':
        setDisplay(String(parseFloat(display) / 100));
        break;
      case '=':
        handleEquals();
        break;
      case '+':
      case '-':
      case '×':
      case '÷':
        performOperation(btn);
        break;
      case '.':
        inputDecimal();
        break;
      default:
        inputNumber(btn);
    }
  };

  return (
    <Card className="p-4 w-full max-w-xs mx-auto">
      <div className="space-y-3">
        {/* Display */}
        <div className="bg-muted rounded-lg p-3 text-right">
          <div className="text-lg font-mono text-foreground truncate">
            {display}
          </div>
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-2">
          {buttons.flat().map((btn, index) => (
            <Button
              key={index}
              variant={getButtonVariant(btn)}
              size="sm"
              className={`h-12 text-sm font-medium ${
                btn === '0' ? 'col-span-2' : ''
              } ${btn === '=' ? 'col-span-1' : ''}`}
              onClick={() => handleButtonClick(btn)}
            >
              {btn}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Calculator;