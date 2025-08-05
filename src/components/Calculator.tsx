import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trash2, RotateCcw } from 'lucide-react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setEquation(num);
      setWaitingForNewValue(false);
    } else {
      const newDisplay = display === '0' ? num : display + num;
      setDisplay(newDisplay);
      setEquation(prev => prev + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setEquation('0.');
      setWaitingForNewValue(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
      setEquation(prev => prev + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const clearEntry = () => {
    setDisplay('0');
    setEquation(prev => prev.slice(0, -display.length));
  };

  const deleteLast = () => {
    if (display.length > 1) {
      const newDisplay = display.slice(0, -1);
      setDisplay(newDisplay);
      setEquation(prev => prev.slice(0, -1));
    } else {
      setDisplay('0');
      setEquation(prev => prev.slice(0, -1));
    }
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
    setEquation(prev => prev + ` ${nextOperation} `);
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
        return secondValue !== 0 ? firstValue / secondValue : 0;
      case '%':
        return firstValue % secondValue;
      case '^':
        return Math.pow(firstValue, secondValue);
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      const fullEquation = `${equation} = ${newValue}`;
      
      setDisplay(String(newValue));
      setHistory(prev => [fullEquation, ...prev.slice(0, 4)]);
      setEquation(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleSpecialFunction = (func: string) => {
    const currentValue = parseFloat(display);
    let result = 0;

    switch (func) {
      case 'sqrt':
        result = Math.sqrt(currentValue);
        break;
      case 'square':
        result = currentValue * currentValue;
        break;
      case 'reciprocal':
        result = currentValue !== 0 ? 1 / currentValue : 0;
        break;
      case 'percent':
        result = currentValue / 100;
        break;
      case 'plusminus':
        result = currentValue * -1;
        break;
    }

    setDisplay(String(result));
    setEquation(String(result));
    setWaitingForNewValue(true);
  };

  const buttons = [
    [
      { text: 'C', type: 'function', action: clear },
      { text: 'CE', type: 'function', action: clearEntry },
      { text: '⌫', type: 'function', action: deleteLast },
      { text: '÷', type: 'operator', action: () => performOperation('÷') }
    ],
    [
      { text: '√', type: 'function', action: () => handleSpecialFunction('sqrt') },
      { text: 'x²', type: 'function', action: () => handleSpecialFunction('square') },
      { text: '1/x', type: 'function', action: () => handleSpecialFunction('reciprocal') },
      { text: '×', type: 'operator', action: () => performOperation('×') }
    ],
    [
      { text: '7', type: 'number', action: () => inputNumber('7') },
      { text: '8', type: 'number', action: () => inputNumber('8') },
      { text: '9', type: 'number', action: () => inputNumber('9') },
      { text: '-', type: 'operator', action: () => performOperation('-') }
    ],
    [
      { text: '4', type: 'number', action: () => inputNumber('4') },
      { text: '5', type: 'number', action: () => inputNumber('5') },
      { text: '6', type: 'number', action: () => inputNumber('6') },
      { text: '+', type: 'operator', action: () => performOperation('+') }
    ],
    [
      { text: '1', type: 'number', action: () => inputNumber('1') },
      { text: '2', type: 'number', action: () => inputNumber('2') },
      { text: '3', type: 'number', action: () => inputNumber('3') },
      { text: '=', type: 'equals', action: handleEquals, rowSpan: true }
    ],
    [
      { text: '±', type: 'function', action: () => handleSpecialFunction('plusminus') },
      { text: '0', type: 'number', action: () => inputNumber('0') },
      { text: '.', type: 'number', action: inputDecimal },
      null // This slot is occupied by the equals button above
    ]
  ];

  const getButtonVariant = (type: string) => {
    switch (type) {
      case 'function':
        return 'secondary';
      case 'operator':
      case 'equals':
        return 'default';
      default:
        return 'outline';
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      <Card className="p-4">
        <div className="space-y-3">
          {/* History */}
          {history.length > 0 && (
            <div className="space-y-1 max-h-16 overflow-y-auto">
              {history.map((entry, index) => (
                <div key={index} className="text-xs text-muted-foreground font-mono">
                  {entry}
                </div>
              ))}
            </div>
          )}

          {/* Equation Display */}
          <div className="bg-muted/50 rounded-lg p-2 min-h-[2rem]">
            <div className="text-sm text-muted-foreground font-mono text-right">
              {equation || ''}
            </div>
          </div>

          {/* Result Display */}
          <div className="bg-muted rounded-lg p-3 text-right">
            <div className="text-xl font-mono text-foreground truncate">
              {display}
            </div>
          </div>

          {/* Button Grid */}
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((row, rowIndex) =>
              row.map((btn, colIndex) => {
                if (!btn) return <div key={`${rowIndex}-${colIndex}`}></div>;
                
                return (
                  <Button
                    key={`${rowIndex}-${colIndex}`}
                    variant={getButtonVariant(btn.type)}
                    size="sm"
                    className={`h-10 text-sm font-medium ${
                      btn.rowSpan ? 'row-span-2' : ''
                    }`}
                    onClick={btn.action}
                  >
                    {btn.text}
                  </Button>
                );
              })
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Calculator;